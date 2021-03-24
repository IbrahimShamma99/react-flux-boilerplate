import React from "react";
import Routes from "../../routes";
import "./style.css";
import { connect } from "react-redux";
import * as actionTypes from "../../Store/User/user.actions";

const Header = ({ logout, admin, user_id }) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-white topbar mb-4  shadow"
      style={{ zIndex: "2" }}
    >
      <button id="sidebarToggleTop" className="navbar-toggler" type="button">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse show"
        id="navbarSupportedContent-4"
        style={{
          backgroundColor: "transparent",
          display: "flex !important",
          flexBasis: "auto",
        }}
      >
        <ul
          className="navbar-nav ml-auto "
          style={{ flexDirection: "row", float: "right" }}
        >
          <li
            className="nav-item"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <a
              className="nav-link waves-effect waves-light notifications"
              href={Routes.alerts}
            >
              <i className="fas fa-bell"></i> &nbsp;Alerts
              <span className="notifications-label">
                <div class="sonar-emitter">
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%,-50%)",
                    }}
                  >
                    {" "}
                    10
                  </div>

                  <div class="sonar-wave sonar-wave1">
                    <div class="sonar-wave sonar-wave2"></div>

                    <div class="sonar-wave sonar-wave3"></div>
                    <div class="sonar-wave sonar-wave4"></div>
                  </div>
                </div>
              </span>
            </a>
          </li>
          {/* <li className="nav-item active">
                    <a className="nav-link waves-effect waves-light" href="#">
                        <i className="fas fa-envelope"></i> Contact
                        <span className="sr-only">(current)</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link waves-effect waves-light" href="#">
                        <i className="fas fa-cog"></i> Settings
                    </a>
                </li> */}

          {user_id ? (
            <li
              className="nav-item dropdown"
              style={{
                height: "4.375rem",
                display: "flex",
                alignItems: "center",
                padding: "0 0.75rem",
              }}
            >
              <a
                className="nav-link dropdown-toggle waves-effect waves-light"
                id="navbarDropdownMenuLink-4"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
              >
                <i className="fas fa-user"></i> &nbsp;Account
              </a>
              <div
                className="dropdown-menu dropdown-menu-right dropdown-info"
                aria-labelledby="navbarDropdownMenuLink-4"
              >
                <a
                  className="dropdown-item waves-effect waves-light"
                  href="/profile"
                >
                  Profile
                </a>
                {admin ? (
                  <a
                    className="dropdown-item waves-effect waves-light"
                    href="/admin"
                  >
                    Admin
                  </a>
                ) : null}
                <a
                  className="dropdown-item waves-effect waves-light"
                  onClick={logout}
                >
                  Log out
                </a>
              </div>
            </li>
          ) : null}
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    user_id: state.UserState.user ? state.UserState.user.user_id : null,
    admin: state.UserState.user ? state.UserState.user.admin : null,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // change: (entity, value) =>
    //   dispatch({ type: actionTypes.MODIFY, entity, value }),
    logout: () => dispatch({ type: actionTypes.LOGOUT }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
