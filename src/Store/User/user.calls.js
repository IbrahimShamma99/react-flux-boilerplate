import * as api from "../../apis/user.api";
import * as actionTypes from "./user.actions";
import {
  postLogin,
  postLogout,
  postNewPassword,
} from "../../helper/post.process";

export const LoginCall = (action) =>
  api.login(action.userLoginInfo).then((data) => {
    console.log("DATA", data.company);
    if (data.message) {
      action.asyncDispatch({
        type: actionTypes.LOGIN_ERROR,
        message: data.message,
      });
    } else {
      action.asyncDispatch({
        type: actionTypes.LOGIN_SUCCESS,
        user: data.user,
        message: "Logged successfully",
      });

      postLogin(data.user.token);
    }
  });

export const RegisterCall = (action) =>
  api.register(action.userRegisterInfo).then((data) => {
    if (data.message) {
      action.asyncDispatch({
        type: actionTypes.REGISTER_ERROR,
        message: data.message,
      });
    } else {
      action.asyncDispatch({
        type: actionTypes.REGISTER_SUCCESS,
        //user: data.user, NOTE in case of login then verify rather than the opposite
        message: "registration was done successfully",
      });
    }
  });

export const LogoutCall = (data) => {
  api.logout(data).then(() => {
    postLogout();
  });
};

export const ForgotCall = (action) =>
  api.forgot(action.userInfo).then((data) => {
    console.log("data", data);
    action.asyncDispatch({
      type: actionTypes.REGISTER_SUCCESS,
      message: data.message,
    });
  });

export const NewPasswordCall = (action) => {
  api.setPassword(action.userInfo).then((data) => {
    action.asyncDispatch({
      type: actionTypes.REGISTER_SUCCESS,
      message: data.message,
    });
    postNewPassword();
  });
};
