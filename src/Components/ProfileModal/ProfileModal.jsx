import { Link } from "react-router-dom";
import "./ProfileModal.css";
import { signOutUser } from "../../Authentication/Auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Config/firebase-config";

const ProfileModal = () => {
  const navigate = useNavigate();

  const signOutClick = async () => {
    try {
      await signOutUser(auth);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="willco__profile-modal">
      <ul>
        <li>
          <Link to="/chat">Chats</Link>
        </li>
        <li onClick={signOutClick}>Logout</li>
      </ul>
    </div>
  );
};

export default ProfileModal;
