import { useLoginModalContext } from "../../Context/modalContext";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import "./LoginModal.css";
import { signInWithGoogle} from "../../Authentication/Auth";
import {useNavigate} from 'react-router-dom';
import { useEffect, useState } from "react";
import { auth, db } from "../../Config/firebase-config";
import { collection, setDoc, doc } from "firebase/firestore";
import EmailSignupModal from "../EmailSignupModal/EmailSignupModla";

const LoginModal = () => {
  const { showModal, setShowModal } = useLoginModalContext();
  const [client, setClient] = useState(null)
  const [showEmailModal, setShowEmailModal] = useState(false)

  const userRef = collection(db, "Users")

  const navigate = useNavigate()

  const hideModalClick = () => {
    setShowModal(false)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setClient(authUser);
      } else {
        setClient(null)
      }
    })

    return () => unsubscribe()
  }, [navigate])

  const signInClick = async () => {
    try {
      const user = await signInWithGoogle()
      await setDoc(doc(db, "Users", user.uid), {
        uid: user.uid,
        name: user.displayName,
        photo: user.photoURL
      })

      setShowModal(false)
      navigate('/chat')
    } catch(error) {
      console.log(error)
    }
  }

  const employeeSignIn = async () => {
    try {
      setShowEmailModal(true)
      console.log(showEmailModal)
    } catch(error) {
      console.log(error)
    }
  }

  const closeEmailModal = () => {
    setShowEmailModal(false)
  }

  return (
    <>
      {showModal && (
        <div className="login-modal-container scale-in-hor-right">
          <div className="close-icon-container" onClick={hideModalClick}>
              <FaLongArrowAltLeft size={30}/>
          </div>
          <h1 className="modal-header">You are</h1>
          <div>
            <button className="modal-client" onClick={signInClick}>A Client</button>
            <button className="modal-employee" onClick={employeeSignIn}>An Employee</button>
          </div>

          {showEmailModal && <div className="email-signup">
          <div className="close-icon-container">
                <IoMdClose className='close-icon' onClick={closeEmailModal}/>
            </div>
            <EmailSignupModal />
          </div>}
        </div>
      )}
    </>
  );
};

export default LoginModal;
