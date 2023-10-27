import React from "react";
import { useAuth } from "./AuthContext"; // Import the useAuth hook
import Navbar from "./Navbar"; // Your normal navbar component
import LoginNavbar from "./LoginNavbar"; // Your login navbar component

const AuthRenderer = () => {
  const { isAuthenticated } = useAuth(); // Get the isAuthenticated state

  return isAuthenticated ? <LoginNavbar /> : <Navbar />;
};

export default AuthRenderer;
