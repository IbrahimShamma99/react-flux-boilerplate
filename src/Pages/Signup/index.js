import Signup from "./page";
import { connect } from "react-redux";
import * as actionTypes from "../../Store/User/user.actions";

const mapStateToProps = (state) => {
  return {
    message: state.UserState.message,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    submit: (userRegisterInfo) =>
      dispatch({ type: actionTypes.REGISTER, userRegisterInfo }),
    ExternalError: (value) =>
      dispatch({ type: actionTypes.EXTERNAL_ERROR, message: value }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
