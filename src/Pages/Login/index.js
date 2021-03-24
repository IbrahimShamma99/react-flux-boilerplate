import Login from "./login";
import { connect } from "react-redux";
import * as actionTypes from "../../Store/User/user.actions";

const mapStateToProps = (state) => {
  return {
    message: state.UserState.message,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    submit: (userLoginInfo) =>
      dispatch({ type: actionTypes.LOGIN, userLoginInfo }),
    ExternalError: (value) =>
      dispatch({ type: actionTypes.EXTERNAL_ERROR, message: value }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
