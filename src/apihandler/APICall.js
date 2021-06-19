import { createBrowserHistory } from "history";
import { logout } from "../reducers/globalReducer";

let apiInstance = null;

export default class APICall {
  post = async (url, data = {}, header = {}) => {
    const token = localStorage.getItem("loggedInUser");
    const response = await fetch(`${process.env.REACT_APP_LOCAL_BK}/${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Token: token,
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const responseJSON = await response.json();

      return Promise.resolve(responseJSON);
    } else {
      const err = await response.json();
      if (err.status === "logout") {
        localStorage.clear();
        createBrowserHistory().push(`${process.env.PUBLIC_URL}/login`);
      }
      return Promise.reject(response);
    }
  };
  get = async (url, header = {}) => {
    const token = localStorage.getItem("loggedInUser");
    const response = await fetch(`${process.env.REACT_APP_LOCAL_BK}/${url}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Token: token,
      },
    });
    if (response.ok) {
      const myHeader = new Headers();
      myHeader.set("Cross-Origin-Embedder-Policy", "require-corp");
      const responseJSON = await response.json();
      return Promise.resolve(responseJSON);
    } else {
      const err = await response.json();
      if (err.status === "logout") {
        localStorage.clear();
        createBrowserHistory().push(`${process.env.PUBLIC_URL}/login`);
      }
      return Promise.reject(response);
    }
  };
  delete = async (url, data, _id, header = {}) => {
    const token = localStorage.getItem("loggedInUser");

    const response = await fetch(
      `${process.env.REACT_APP_LOCAL_BK}/${url}/${_id}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          Token: token,
        },
        body: JSON.stringify(data),
      }
    );
    if (response.ok) {
      const responseJSON = await response.json();
      return Promise.resolve(responseJSON);
    } else {
      const err = await response.json();
      if (err.status === "logout") {
        localStorage.clear();
        createBrowserHistory().push(`${process.env.PUBLIC_URL}/login`);
      }
      return Promise.reject(response);
    }
  };
  put = async (url, data, _id, header = {}) => {
    const token = localStorage.getItem("loggedInUser");

    const response = await fetch(
      `${process.env.REACT_APP_LOCAL_BK}/${url}/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          Token: token,
        },
        body: JSON.stringify(data),
      }
    );
    if (response.ok) {
      const responseJSON = await response.json();
      return Promise.resolve(responseJSON);
    } else {
      const err = await response.json();
      if (err.status === "logout") {
        localStorage.clear();
        createBrowserHistory().push(`${process.env.PUBLIC_URL}/login`);
      }
      return Promise.reject(response);
    }
  };
}

export function getAPIInstance() {
  if (apiInstance === null) {
    apiInstance = new APICall();
  }
  return apiInstance;
}
