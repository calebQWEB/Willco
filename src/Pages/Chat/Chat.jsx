import "./Chat.css";
import { FaPaperPlane } from "react-icons/fa";
import {
  collection,
  serverTimestamp,
  addDoc,
  orderBy,
  onSnapshot,
  query,
} from "firebase/firestore";
import { db, auth } from "../../Config/firebase-config";
import { useState, useEffect } from "react";

const Chat = () => {
  const [sendMessage, setSendMessage] = useState("");
  const [user, setUser] = useState(null);

  const [messages, setMessages] = useState([]);

  const messageRef = collection(db, "Messages");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // Function to get Messages from firestore
  const getMessages = () => {
    if (!user) return;

    const messagesQuery = query(
      messageRef,
      orderBy("createdAt", "asc")
    );

    const unsubscribe = onSnapshot(messagesQuery, (querySnapshot) => {
      const messages = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setMessages(messages);
    });

    return unsubscribe;
  };

  // Inside your component:
  useEffect(() => {
    const unsubscribe = getMessages();
    return unsubscribe;
  }, []);

  // Function to send messages
  const sendMessageFunc = async () => {
    try {
      await addDoc(messageRef, {
        sender: "User",
        recipient: "Representative",
        senderId: user.uid,
        createdAt: serverTimestamp(),
        content: sendMessage,
        userName: user.displayName,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const submitMessage = async (e) => {
    e.preventDefault();
    setSendMessage("");
    getMessages();

    if (sendMessage.trim === "") return;

    try {
      await sendMessageFunc();
      console.log(messages);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="willco__chat-section">
      <div className="willco__chat-system">
        {messages.length === 0 && (
          <div className="sv-container">
            <span className="start-typing">Start typing</span> or{" "}
            <button className="view-chats" onClick={getMessages}>
              View chats
            </button>
          </div>
        )}
        {messages.map((message, index) => {
          return (
            <div
              key={index}
              className={
                message.senderId === user.uid
                  ? "user-message"
                  : message.sender === "Representative"
                  ? "representative-message"
                  : ""
              }
            >
              {/* Display sender avatar or initials if needed */}
              {/* <div className="avatar">{message.senderAvatar}</div> */}
              <div className="message-content">
                <p>{message.content}</p>
              </div>
            </div>
          );
        })}
      </div>

      <form onSubmit={submitMessage}>
        <input
          type="text"
          placeholder="Enter message"
          className="willco__send-message"
          value={sendMessage}
          onChange={(e) => setSendMessage(e.target.value)}
        />
        <button className="chat-submit-button-container">
          <FaPaperPlane color="#3498DB" className="chat-submit-button" />
        </button>
      </form>
    </div>
  );
};

export default Chat;
