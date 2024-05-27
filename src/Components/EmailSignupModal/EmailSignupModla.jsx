import "./EmailSignupModal.css";
import { useLoginModalContext } from "../../Context/modalContext";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { emailSignIn, signUpWithEmail } from "../../Authentication/Auth";
import { db } from "../../Config/firebase-config";
import { getDocs, collection } from "firebase/firestore";

const EmailSignupModal = () => {
  const [emailSignInModal, setEmailSignInModal] = useState(false);
  const {setShowModal} = useLoginModalContext();
  const [employeeData, setEmployeeData] = useState(null);

  // Initial value of the sign up form
  const [formDetails, setFormDetails] = useState({
    email: "",
    password: "",
  });

  // Initial value of the login form
  const [loginFormDetails, setLoginFormDetails] = useState({
    email: "",
    password: ""
  })

  const navigate = useNavigate();

  // Reference of the employee data.
  const employeeCollectionRef = collection(db, "employee-data");

  // Function to get the contents of the employee data
  const getEmployeeData = async () => {
    try {
      const data = await getDocs(employeeCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
      }));
      setEmployeeData(filteredData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEmployeeData();
  }, []);

  // Onchange function
  const handleChange = (e) => {
    setFormDetails({
      ...formDetails,
      [e.target.name]: e.target.value,
    });
  };

  // Onsubmit function
  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      getEmployeeData();

      // If employeeData is true
      if (employeeData) {
        // find the user whose email is equal the email the user entered
        const user = employeeData.find(
          (emp) => emp.email === formDetails.email
        );

        // If the user exists
        if (user) {
          // and if the user password collected from the database is equal to the password entered
          if (user.password === formDetails.password) {
            await signUpWithEmail(formDetails.email, formDetails.password);
            console.log("Login successful");
            setShowModal(false);
            navigate("/rep-chat");
            return;
          } else {
            console.log("Incorrect password");
          }
        } else {
          console.log("User does not exist");
        }
      } else {
        console.log("Employee data not loaded");
      }
      // Clear formDetails regardless of the outcome
      setFormDetails({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Show the sign up modal
  const showSignUpModal = () => {
    setEmailSignInModal(false)
  }

  // Show the sign in modal
  const showSignInModal = () => {
    setEmailSignInModal(true);
  };

  // Login submit function
  const loginSubmit = async (e) => {
    e.preventDefault()
    setLoginFormDetails({
      email: "",
      password: ""
    })
    
    try {
      await emailSignIn(loginFormDetails.email, loginFormDetails.password)
      navigate("/rep-chat")
      setShowModal(false);
      console.log('Congratulation')
    } catch(error) {
      console.log(error)
      throw error
    }
  }

  // Onchange function form the login form
  const loginOnchangeFuntion = (e) => {
    setLoginFormDetails({
      ...loginFormDetails,
      [e.target.name]: e.target.value 
    })
  }

  return (
    <>
      {!emailSignInModal && (
        <form onSubmit={formSubmit}>
          <h1>Sign up</h1>
          <label>
            Email
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              value={formDetails.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Password
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formDetails.password}
              onChange={handleChange}
              required
            />
          </label>

          <button  className="email-submit">
            Submit
          </button>

          <p className="login-prompt">
            Already have an account? <span className="login" onClick={showSignInModal}>Login</span>
          </p>
        </form>
      )}

      {emailSignInModal && (
        <form onSubmit={loginSubmit}>
          <h1>Login</h1>
          <label>
            Email
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              value={loginFormDetails.email}
              onChange={loginOnchangeFuntion}
              required
            />
          </label>

          <label>
            Password
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={loginFormDetails.password}
              onChange={loginOnchangeFuntion}
              required
            />
          </label>

          <button className="email-submit">
            Submit
          </button>

          <p className="sign-prompt">
            Don't have an account? <span className="sign-up" onClick={showSignUpModal}>sign up</span>
          </p>
        </form>
      )}
    </>
  );
};

export default EmailSignupModal;
