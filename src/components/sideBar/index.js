import SideBar from "./sidebar";
import { connect } from "react-redux";
import * as actionTypes from "../../Store/SideBar/sidebar.actions";

const mapStateToProps = (state) => {
  return {
    user_id: state.UserState.user.user_id,
    recents: state.SideBarState.recents,
    favorites: state.SideBarState.favorites,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    add_favorite: (Info) => dispatch({ type: actionTypes.ADD_FAVORITE, Info }),
    add_recent: (Info) => dispatch({ type: actionTypes.ADD_RECENT, Info }),
    remove_favorite: (Info) =>
      dispatch({ type: actionTypes.DELETE_FAVORITE, Info }),
    remove_recent: (Info) =>
      dispatch({ type: actionTypes.DELETE_RECENT, Info }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
