import axios from "axios";
import React, { createContext, useState } from "react";
import { BASE_URL } from "../config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const login = (email, password) => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/auth/login`, {
        email,
        password,
      })
      .then((res) => {
        setUserInfo(res.data.user);
        setUserToken(res.data.token);
      })
      .catch((e) => {
        console.log(e);
      });
    setIsLoading(false);
  };

  const register = (username, email, password) => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/auth/register`, {
        name: username,
        email: email.toLowerCase(),
        password,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
    setIsLoading(false);
  };
  return (
    <AuthContext.Provider
      value={{ login, register, userToken, isLoading, userInfo, setIsLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
