import ForgotPassword from "./page";
import { connect } from "react-redux";
import * as actionTypes from "../../Store/User/user.actions";

const mapStateToProps = (state) => {
  return {
    message: state.UserState.message,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    submit: (userInfo) =>
      dispatch({ type: actionTypes.FORGOT_PASSWORD, userInfo }),
    ExternalError: (value) =>
      dispatch({ type: actionTypes.EXTERNAL_ERROR, message: value }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
