import NewPassword from "./page";
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
      dispatch({ type: actionTypes.SET_PASSWORD, userInfo }),
    ExternalError: (value) =>
      dispatch({ type: actionTypes.EXTERNAL_ERROR, message: value }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPassword);
