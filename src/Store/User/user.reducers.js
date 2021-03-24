import * as actionTypes from "./user.actions";
import UserState from "./user.state";
import * as UserCalls from "./user.calls";
// import { PURGE } from "redux-persist";

const intialState = {
  user: UserState,
};

const reducers = (state = intialState, action) => {
  console.log("STATE", state);
  switch (action.type) {
    case actionTypes.LOGIN:
      UserCalls.LoginCall(action);
      return { ...state, message: undefined };
    case actionTypes.LOGIN_SUCCESS:
      return { user: action.user };
    case actionTypes.LOGIN_ERROR:
      return { user: action.user, message: action.message };
    case actionTypes.REGISTER:
      UserCalls.RegisterCall(action);
      return { ...state, message: undefined };
    case actionTypes.REGISTER_SUCCESS:
      return { message: action.message };
    case actionTypes.FORGOT_PASSWORD:
      UserCalls.ForgotCall(action);
      return { ...state, message: undefined };
    case actionTypes.SET_PASSWORD:
      UserCalls.NewPasswordCall(action);
      return { ...state, message: undefined };
    case actionTypes.REGISTER_ERROR:
      return { user: action.user, message: action.message };
    case actionTypes.LOGOUT:
      UserCalls.LogoutCall({ user_id: state.user.user_id });
      return {};

    default:
      return {
        ...state,
      };
  }
};

export default reducers;
