import { useEffect, useState } from "react";
import { postData } from "./api";
import { useHistory } from "react-router-dom";
import { getToolbarUtilityClass } from "@mui/material";

const useUserManager = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(false);
  useEffect(() => {
    let token = localStorage.getItem("token");
    let u = localStorage.getItem("userInfo");
    if (token) {
      setIsLoggedIn(true);
      setUserInfo(JSON.parse(u));
    }
  }, []);
  function login(payload, callback) {
    if (!isLoggedIn) {
      // neu chua dang nhap
      postData(
        "/login",
        payload,
        (data) => {
          setIsLoggedIn(true);
          setUserInfo(data.data.userInfo);
          localStorage.setItem("token", data.data.token);
          localStorage.setItem("userInfo", JSON.stringify(data.data.userInfo));
          // console.log(isLoggedIn);
          typeof callback == "function" && callback();
        },
        () => {
          console.log("error");
        }
      );
    }
  }
  function logout() {
    if (isLoggedIn) {
      localStorage.clear();
      setIsLoggedIn(false);
    }
  }
  function register(payload, callback) {
    if (!isLoggedIn) {
      // neu chua dang nhap

      postData(
        "/register",
        payload,
        (data) => {
          setIsLoggedIn(true);
          setUserInfo(data.data.userInfo);
          localStorage.setItem("token", data.data.token);
          localStorage.setItem("userInfo", JSON.stringify(data.data.userInfo));
          typeof callback == "function" && callback();
        },
        () => {
          console.log("error");
        }
      );
    }
  }
  function logout() {
    if (isLoggedIn) {
      localStorage.clear();
      setIsLoggedIn(false);
      setUserInfo(null);
    }
  }

  return { register, login, logout, isLoggedIn, userInfo };
};

function useTextInput(initialState) {
  const [value, setValue] = useState(initialState);
  function onChange(e) {
    setValue(e.target.value);
  }
  return {
    onChange,
    value,
  };
}

function useChangeRoute() {
  let history = useHistory();
  function goToPage(url) {
    history.push(url);
  }
  return { goToPage };
}

export { useUserManager, useTextInput, useChangeRoute };
