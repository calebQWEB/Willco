import logo from "../../assets/Logo/logo.svg";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import "./Navbar.css";
import { useState, useEffect } from "react";
import { useLoginModalContext } from "../../Context/modalContext";
import { auth } from "../../Config/firebase-config";
import ProfileModal from "../ProfileModal/ProfileModal";
import RepProfile from "../ProfileModal/RepProfile";
import repProfilePicture from '../../assets/Profile/rep-profile.png';

const Navbar = () => {
  const [showNavMenu, setShowNavMenu] = useState(false);
  const { showModal, setShowModal } = useLoginModalContext();
  const [user, setUser] = useState(null);
  const [showProfile, setShowProfile] = useState(false)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
        console.log(user)
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const showNavClick = () => {
    setShowNavMenu((prev) => !prev);
    setShowProfile(false)
  };

  const chatWithUsClick = () => {
    console.log(showModal);
    setShowModal(true);
  };

  // Function to show the profile modal
  const showProfileModalClick = () => {
    setShowProfile(prev => !prev)
    setShowNavMenu(false)
  }

  return (
    <nav className="willco__nav">
      <img src={logo} alt="willco Logo" className="willco__logo" />

      <ul className="willco__nav-links-container">
        <li className="willco__nav-links">
          <Link>Home</Link>
        </li>
        <li className="willco__nav-links">
          <Link>Services</Link>
        </li>
        <li className="willco__nav-links">
          <Link>Training</Link>
        </li>
      </ul>

      <div className="willco__nav-menu-icon-container">
        {showNavMenu ? (
          <AiOutlineClose size={30} color="#FFFFFF" onClick={showNavClick} />
        ) : (
          <AiOutlineMenu size={30} color="#FFFFFF" onClick={showNavClick} />
        )}
      </div>

      {showNavMenu && (
        <ul className="willco__nav-links-container-mobile">
          <li className="willco__nav-links-mobile">
            <Link>Home</Link>
          </li>
          <li className="willco__nav-links-mobile">
            <Link>Services</Link>
          </li>
          <li className="willco__nav-links-mobile">
            <Link>Training</Link>
          </li>
        </ul>
      )}

      {user && !user.displayName && (
        <div className="willco__user-profile-container">
          <img src={repProfilePicture} alt="rep-profile-photo" className="willco__rep-profile-photo" onClick={showProfileModalClick}/>
          {showProfile && (
            <RepProfile />
          )}
        </div>
      )}

      {user && user.displayName && (
        <div className="willco__user-profile-container">
          <img src={user.photoURL} alt="profile-photo" className="willco__user-photo" onClick={showProfileModalClick}/>
          {showProfile && (
            <ProfileModal />
          )}
        </div>
      )}

      {!user && (
        <button className="willco__chat-button" onClick={chatWithUsClick}>
        Chat with a us
      </button>
      )}
    </nav>
  );
};

export default Navbar;
