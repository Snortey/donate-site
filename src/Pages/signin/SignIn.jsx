import React, { useState } from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";
import { BiSolidUser } from "react-icons/bi";
import { BiSolidLockAlt } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { BsApple } from "react-icons/bs";

const SignIn = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <section className="signin_container">
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay">
            <div className="modal_content ">
              <div className="modal_top">
                <h3>Sign up</h3>
                <h4>What category do you want to sign up as?</h4>
              </div>
              <div className="modal_bottom">
                <Link to={"/usersignup"} className="btn btn-primary">
                  Sign up as User
                </Link>
                <Link to={"/organizationsignup"} className="btn">
                  Sign up as Organization
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      <Link to={"/"} className="dona">
        Dona.te
      </Link>
      <form action="" className="form_container-signin">
        <div className="signin_header">
          <h3 className="signin_title">Sign in</h3>
          <div className="title_bottom">
            <h4>New user / organization?</h4>
            <Link onClick={toggleModal} className="create">
              Create an Account
            </Link>
          </div>
        </div>
        <div className="signin_content">
          <div className="input_field2">
            <BiSolidUser />
            <input type="text" placeholder="Email / Organization email" />
          </div>
          <div className="input_field2">
            <BiSolidLockAlt />
            <input type="password" placeholder="Password" />
          </div>
          <Link to={"/"} className="btn btn-primary">
            Sign in
          </Link>
        </div>
        <div className="social_content">
          <div className="continue">
            <span className="dash"></span>
            <h4>or continue with</h4>
            <span className="dash"></span>
          </div>
          <div className="social_icons">
            <FcGoogle className="google" />
            <BsFacebook className="facebook" />
            <BsApple className="apple" />
          </div>
        </div>
        <div className="signin_footer">
          <h4>Need help signing in?</h4>
          <Link to={"/"} className="contactUs">
            Contact us
          </Link>
        </div>
      </form>
    </section>
  );
};

export default SignIn;

// import React, { useState } from "react";
// import "./SignIn.css";
// import { Link, useNavigate } from "react-router-dom";
// import { BiSolidUser } from "react-icons/bi";
// import { BiSolidLockAlt } from "react-icons/bi";
// import { FcGoogle } from "react-icons/fc";
// import { BsFacebook } from "react-icons/bs";
// import { BsApple } from "react-icons/bs";
// import { useAuth } from "../../Components/Authentication/AuthContext"; // Import the AuthContext

// const SignIn = () => {
//   const { login } = useAuth(); // Get the login function from the AuthContext
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const toggleModal = () => {
//     // Implement your modal logic here (if needed).
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSignIn = async (e) => {
//     e.preventDefault();

//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     const { success, message } = await login(email, password);

//     if (success) {
//       // Redirect the user or perform other actions upon successful login.
//     } else {
//       // Handle login failure (e.g., show an error message).
//       console.error(message);
//     }

//     login();

//     // Redirect the user to the home page or any other appropriate page.
//     navigate("/");
//   };

//   return (
//     <section className="signin_container">
//       <Link to={"/"} className="dona">
//         Dona.te
//       </Link>
//       <form onSubmit={handleSignIn} className="form_container">
//         <div className="signin_header">
//           <h3 className="signin_title">Sign in</h3>
//           <div className="title_bottom">
//             <h4>New user / organization?</h4>
//             <Link onClick={toggleModal} className="create">
//               Create an Account
//             </Link>
//           </div>
//         </div>
//         <div className="signin_content">
//           <div className="input_field2">
//             <BiSolidUser />
//             <input
//               type="text"
//               name="email"
//               placeholder="Email / Organization email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="input_field2">
//             <BiSolidLockAlt />
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button type="submit" className="btn btn-primary">
//             Sign in
//           </button>
//         </div>
//         <div className="social_content">
//           <div className="continue">
//             <span className="dash"></span>
//             <h4>or continue with</h4>
//             <span className="dash"></span>
//           </div>
//           <div className="social_icons">
//             <FcGoogle className="google" />
//             <BsFacebook className="facebook" />
//             <BsApple className="apple" />
//           </div>
//         </div>
//         <div className="signin_footer">
//           <h4>Need help signing in?</h4>
//           <Link to={"/"} className="contactUs">
//             Contact us
//           </Link>
//         </div>
//       </form>
//     </section>
//   );
// };

// export default SignIn;
