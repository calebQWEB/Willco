import "./RepChat.css";
import { FaPaperPlane } from "react-icons/fa";
import {
  collection,
  serverTimestamp,
  addDoc,
  getDocs,
  query,
  orderBy,
  onSnapshot,
  doc,
  where,
} from "firebase/firestore";
import { db, auth } from "../../Config/firebase-config";
import { useState, useEffect } from "react";

const RepChat = () => {
  const [sendMessage, setSendMessage] = useState("");
  const [user, setUser] = useState(null);
  const [chats, setChats] = useState([]);

  const [userId, setUserId] = useState("");

  const [messages, setMessages] = useState([]);

  const messageRef = collection(db, "Messages");
  const userRef = collection(db, "Users");

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

  useEffect(() => {
    const getChats = async () => {
      try {
        const userSnapshot = await getDocs(userRef);
        const filteredUser = userSnapshot.docs.map((doc) => ({
          ...doc.data(),
        }));

        setChats(filteredUser);
      } catch (error) {
        console.log(error);
      }
    };

    getChats();
  }, []);

  // Function to send messages
  const sendMessageFunc = async () => {
    try {
      await addDoc(messageRef, {
        sender: "Representative",
        recipient: "User",
        reciepientId: userId,
        senderId: user.uid,
        createdAt: serverTimestamp(),
        content: sendMessage,
        userName: "Willco Representative",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const submitMessage = async (e) => {
    e.preventDefault();
    setSendMessage("");
    getUserChats();

    if (sendMessage.trim === "") return;

    try {
      await sendMessageFunc();
    } catch (error) {
      console.log(error);
    }
  };

  // Function to get users from the database
  const getUserChats = () => {
    if (!userId) return;
  
    const messagesQuery = query(
      messageRef,
      orderBy("createdAt", "asc")
    );
  
    const unsubscribe = onSnapshot(messagesQuery, (querySnapshot) => {
      const messages = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
  
      setMessages(messages);
    });
  
    return unsubscribe;
  };
  
  // Inside your component:
  useEffect(() => {
    const unsubscribe = getUserChats();
    return unsubscribe;
  }, [userId]);

  const selectUserClick = (currentUserId) => {
    setUserId(currentUserId)
  }


  return (
    <div className="willco__rep-chat-section">
      <aside className="willco__users-container">
        <h1 className="willco__users-header">Users</h1>
        <hr />
        {chats.map((item, index) => {
          return (
            <div
              className="willco__users-info"
              key={item.uid}
              onClick={() => selectUserClick(item.uid)}
            >
              <img
                src={item.photo}
                alt={`picture of ${item.name}`}
                className="willco__user-picture"
              />
              <span>{item.name}</span>
            </div>
          );
        })}
      </aside>

      <div className="willco__rep-chat-system-container">
        <div className="willco__rep-chat-system">
          {messages.length === 0 && (<span className="click-user">Click on a user to view chat</span>)}
          {messages?.map((message, index) => {
            return (
              <div
                key={index}
                className={
                  message.senderId === userId
                    ? "user-message"
                    : message.reciepientId === userId ?
                    "representative-message" 
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
          <button className="rep-chat-submit-button-container">
            <FaPaperPlane color="#3498DB" className="rep-chat-submit-button" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default RepChat;
