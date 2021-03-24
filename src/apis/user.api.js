import { serverURL } from "../constants";
import {
  createPostJSON,
  // createGetJSON,
} from "../helper/customs";

const login = (data) => {
  return fetch(serverURL.concat("/login"), createPostJSON(data))
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

const register = (data) => {
  return fetch(serverURL.concat("/register"), createPostJSON(data))
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

const logout = (data) => {
  return fetch(serverURL.concat("/logout"), createPostJSON(data))
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

const forgot = (data) => {
  return fetch(serverURL.concat("/forgot-password"), createPostJSON(data))
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

const setPassword = (data) => {
  return fetch(serverURL.concat("/new-password"), createPostJSON(data))
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export { login, register, logout, forgot, setPassword };
