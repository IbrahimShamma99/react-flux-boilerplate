import React, { useState } from "react";
import Routes from "../../routes";
import { assetsUrl } from "../../constants";
import useStoreQuery from "../../components/storeQuery";
import "../../styles/bootstrap.css";
import "../../styles/mdb.min.css";
import "../Login/main.css";
import "../Login/util.css";
import "../Login/select2.css";
import "../Login/animate.css";
import "../Login/login.css";
import "../Login/more.css";
import "../Login/select.min.css";

const NewPassword = ({ submit, message }) => {
  const [password, setPassword] = useState("");
  var user_id = useStoreQuery("user_id");
  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="overlay"></div>
        <div className="wrap-login100">
          <div className="login100-pic js-tilt" data-tilt>
            <img src={assetsUrl.concat("Logo.png")} alt="IMG" />
          </div>
          <form
            className="login100-form validate-form p-lg-5 py-5 px-4"
            action="ForgetPasswordSubmission.html"
          >
            <span className="login100-form-title">Reset your password?</span>

            <div
              className="wrap-input100 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <input
                className="input100"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true"></i>
              </span>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <input
                className="input100"
                type="password"
                name="password"
                placeholder="Confirm Password"
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fas fa-check" aria-hidden="true"></i>
              </span>
            </div>
            <div className="container-login100-form-btn">
              <button
                onClick={() => submit({ password, user_id })}
                type="button"
                className="login100-form-btn"
              >
                Submit
              </button>
            </div>
            <div className="text-center p-t-30">
              <a className="txt2" href={Routes.login}>
                do you remember your password?
                <i className="fas fa-long-arrow-alt-right m-l-5"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
