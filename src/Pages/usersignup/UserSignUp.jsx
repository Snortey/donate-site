import React from "react";
import { Link } from "react-router-dom";
import { BiSolidUser } from "react-icons/bi";
import { BiSolidLockAlt } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { BsApple } from "react-icons/bs";
import { BiCheckDouble } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import "./UserSignUp.css";

const UserSignUp = () => {
  return (
    <section className="signup_container">
      <Link to={"/"} className="dona">
        Dona.te
      </Link>
      <form action="" className="form_container">
        <div className="signup_header">
          <h3 class="signup_title">Sign up</h3>
          <div className="title_bottom">
            <h4>Already existing user / organization?</h4>
            <Link to={"/signin"} class="create">
              Sign in
            </Link>
          </div>
        </div>
        <div className="signup_content">
          <div class="input_field2">
            <BiSolidUser />
            <input type="text" placeholder="Full name" />
          </div>
          <div class="input_field2">
            <MdEmail />
            <input type="text" placeholder="Email" />
          </div>
          <div class="input_field2">
            <BiSolidLockAlt />
            <input type="password" placeholder="Password" />
          </div>
          <div class="input_field2">
            <BiCheckDouble />
            <input type="password" placeholder="Confirm Password" />
          </div>
          <Link to={"/"} className="btn btn-primary">
            Sign up
          </Link>
        </div>
        <div className="social_content">
          <div className="continue">
            <span className="dash"></span>
            <h4>or continue with</h4>
            <span className="dash"></span>
          </div>
          <div className="social_icons">
            {/* import social_icons here google facebook apple*/}
            <FcGoogle className="google" />
            <BsFacebook className="facebook" />
            <BsApple className="apple" />
          </div>
        </div>
        <div className="signup_footer">
          <h4>Need help signing in?</h4>
          <Link to={"/"} className="contactUs">
            Contact us
          </Link>
        </div>
      </form>
    </section>
  );
};

export default UserSignUp;

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { BiSolidUser } from "react-icons/bi";
// import { BiSolidLockAlt } from "react-icons/bi";
// import { FcGoogle } from "react-icons/fc";
// import { BsFacebook } from "react-icons/bs";
// import { BsApple } from "react-icons/bs";
// import { BiCheckDouble } from "react-icons/bi";
// import { MdEmail } from "react-icons/md";
// import "./UserSignUp.css";
// import { useAuth } from "../../Components/Authentication/AuthContext"; // Import the AuthContext

// const UserSignUp = () => {
//   const { login } = useAuth(); // Get the login function from the AuthContext
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSignUp = async (e) => {
//     e.preventDefault();

//     // Implement your sign-up logic here.
//     // Send the formData to your backend to create a new user.

//     // For example, you can use fetch or an API library to make a POST request to your server.
//     // const response = await fetch('/api/signup', {
//     //   method: 'POST',
//     //   body: JSON.stringify(formData),
//     //   headers: {
//     //     'Content-Type': 'application/json',
//     //   },
//     // });

//     // If the sign-up is successful (e.g., response.status === 200), then you can log in the user.
//     // After successful registration, you may want to redirect the user or show a success message.
//     // Replace this with your actual logic.
//     login();

//     // Redirect the user to the home page or any other appropriate page.
//     navigate("/");
//   };

//   return (
//     <section className="signup_container">
//       <Link to={"/"} className="dona">
//         Dona.te
//       </Link>
//       <form onSubmit={handleSignUp} className="form_container">
//         <div className="signup_header">
//           <h3 className="signup_title">Sign up</h3>
//           <div className="title_bottom">
//             <h4>Already an existing user / organization?</h4>
//             <Link to={"/signin"} className="create">
//               Sign in
//             </Link>
//           </div>
//         </div>
//         <div className="signup_content">
//           <div className="input_field2">
//             <BiSolidUser />
//             <input
//               type="text"
//               name="fullName"
//               placeholder="Full name"
//               value={formData.fullName}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="input_field2">
//             <MdEmail />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
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
//           <div className="input_field2">
//             <BiCheckDouble />
//             <input
//               type="password"
//               name="confirmPassword"
//               placeholder="Confirm Password"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button type="submit" className="btn btn-primary">
//             Sign up
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
//         <div className="signup_footer">
//           <h4>Need help signing up?</h4>
//           <Link to={"/"} className="contactUs">
//             Contact us
//           </Link>
//         </div>
//       </form>
//     </section>
//   );
// };

// export default UserSignUp;
