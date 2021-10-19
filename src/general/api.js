import axios from "axios";
import { errorAlert } from "./alert";

let SERVICE_IP = "http://localhost:5000";
// let token = "";
// if (process.browser) {
//     token = localStorage.getItem("token");
// }

let getDataAsync = ({ url }) => {
  let token = localStorage.getItem("token");

  return axios.get(SERVICE_IP + url, {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  });
};

let postDataAsync = ({ url, data }) => {
  let token = localStorage.getItem("token");

  return axios.post(SERVICE_IP + url, data, {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  });
};

let getData = async (path, successCallback, errorCallback) => {
  let token = localStorage.getItem("token");

  try {
    const res = await axios.get(SERVICE_IP + path, {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    });
    if (res.data.isSuccess == true) {
      if (typeof successCallback == "function") {
        successCallback(res.data);
      }
    } else {
      if (typeof errorCallback == "function") {
        errorCallback(res.data);
        errorAlert(res.data.error);
      }
    }
  } catch (error) {
    if (typeof errorCallback == "function") {
      errorAlert("loi");
    }
  }
};
let postData = async (path, payload, successCallback, errorCallback) => {
  let token = localStorage.getItem("token");

  try {
    const res = await axios.post(SERVICE_IP + path, payload, {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    });
    if (res.data.isSuccess == true) {
      if (typeof successCallback == "function") {
        successCallback(res.data);
      }
    } else {
      if (typeof errorCallback == "function") {
        errorCallback(res.data);
        errorAlert(res.data.error);
      }
    }
  } catch (error) {
    if (typeof errorCallback == "function") {
      errorCallback(error);
    }
  }
};

export { getData, postData, getDataAsync, postDataAsync };
