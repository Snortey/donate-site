// AuthContext.js
import React, { createContext, useContext, useState } from "react";
import { Authentication } from "../Authentication/Authentication"; // Import your authentication service

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const isAuthenticated = Authentication.isAuthenticated();

  const login = async (email, password) => {
    const { success, message } = await Authentication.login(email, password);

    if (success) {
      // Set user data or token in localStorage if needed.
      localStorage.setItem("token", "your-token-here");

      // Set the user state.
      setUser({ email });
    }

    return { success, message };
  };

  const logout = async () => {
    // Call your logout function from AuthService if needed.
    await Authentication.logout();

    // Clear user data or token from localStorage.
    localStorage.removeItem("token");

    // Clear the user state.
    setUser(null);
  };

  const register = async (fullName, email, password) => {
    const { success, message } = await Authentication.register(
      fullName,
      email,
      password
    );

    return { success, message };
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, logout, register }}
    >
      {children}
    </AuthContext.Provider>
  );
};
