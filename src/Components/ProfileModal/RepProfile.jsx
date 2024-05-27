import './RepProfile.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { auth } from '../../Config/firebase-config';
import { signOutUser } from '../../Authentication/Auth';

const RepProfile = () => {
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
    <div className="willco__rep-profile-modal">
    <ul>
      <li>
        <Link to="/rep-chat">Chats</Link>
      </li>
      <li onClick={signOutClick}>Logout</li>
    </ul>
  </div>
  )
}

export default RepProfile