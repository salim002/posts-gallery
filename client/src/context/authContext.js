import axios from "axios";
import {createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  const login = async (inputs) => {
    const res = await axios.post("https://posts-gallery-mdsalim.onrender.com/api/auth/login", inputs);
    // console.log(res.data);
    // console.log(res.data.token);
    // console.log(res.data.other);
    setCurrentUser(res.data.other);
    setToken(res.data.token);
  };

  const logout = async (inputs) => {
    setCurrentUser(null);
    setToken(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
    localStorage.setItem("token", token);
  }, [currentUser, token]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};