import React, { useState, useEffect } from "react";
import Routes from "../../routes";
import { ReCAPTCHA_Key, DELAY } from "../../constants";
import LoadingIndicator from "../../components/LoadingIndicator/index";
import ReCAPTCHA from "react-google-recaptcha";
import "../../styles/bootstrap.css";
import "../../styles/mdb.min.css";
import "../../styles/forms.css";



const Login = ({ submit, ExternalError, message }) => {
  const [userState, setUserState] = useState({
    email: "",
    password: "",
  });
  const [showLoadingIndicator, setShowLoadingIndicator] = useState(false);
  const [validationErrors, setValidationErrors] = useState({
    missingFields: false,
  });

  const [load, setLoad] = useState(false);
  const [expired, setExpired] = useState("false");
  const [verified, setVerified] = useState(false);

  const _reCaptchaRef = React.createRef();

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, DELAY);
  }, []);

  useEffect(() => {
    if (expired === "true") {
      setVerified(false);
    }
  }, [expired]);

  useEffect(() => {
    if (message) {
      setShowLoadingIndicator(false);
    }
  }, [message]);

  const handleChange = (value) => {
    console.log("Captcha value:", value);
    setVerified(true);
    // if value is null recaptcha expired
    if (value === null) setExpired("true");
  };

  const asyncScriptOnLoad = () => {
    console.log("LOADED");
  };

  const validateBeforeSubmit = () => {
    const errors = {};
    var isValid = true;
    // if(!isAllFilled(userState)){
    //   errors.missingFields = true;
    // }
    if ([...Object.keys(errors)].length > 0) {
      isValid = false;
      setShowLoadingIndicator(false);
    }
    setValidationErrors({
      ...errors,
    });

    return isValid;
  };

  return (
    <>
      {showLoadingIndicator ? (
        <div
          style={{
            position: "absolute",
            right: "50%",
            height: "20px",
            width: "20px",
            zIndex: "1",
            transform: "translate(-50%,-50%)",
          }}
        >
          <LoadingIndicator />
        </div>
      ) : null}
      <div className="limiter">
        <div className="container-login100">
          <div className="overlay"></div>
          <div className="wrap-login100">
            <div className="login100-pic js-tilt" data-tilt>
            </div>
            <form
              className="login100-form validate-form p-lg-5 py-5 px-4"
              // action="InnerSystem.html"
            >
              <span className="login100-form-title">Member Login</span>
              <p className="error-message">
                {message && !showLoadingIndicator ? message : null}
              </p>
              {validationErrors.missingFields && !showLoadingIndicator ? (
                <p className="error-message">
                  You should fill all requested fields
                </p>
              ) : null}
              <div
                className="wrap-input100 validate-input"
                //data-validate="Valid email is required: ex@abc.xyz"
              >
                <input
                  className="input100"
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={userState.email}
                  onChange={(e) =>
                    setUserState({
                      email: e.target.value,
                      password: userState.password,
                    })
                  }
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </span>
              </div>

              <div
                className="wrap-input100 validate-input"
                //data-validate="Password is required"
              >
                <input
                  className="input100"
                  type="password"
                  name="pass"
                  value={userState.password}
                  placeholder="Password"
                  onChange={(e) =>
                    setUserState({
                      email: userState.email,
                      password: e.target.value,
                    })
                  }
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-lock" aria-hidden="true"></i>
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <ReCAPTCHA
                  style={{ display: "inline-block" }}
                  theme="dark"
                  ref={_reCaptchaRef}
                  sitekey={ReCAPTCHA_Key}
                  onChange={handleChange}
                  asyncScriptOnLoad={asyncScriptOnLoad}
                />
              </div>

              <div className="container-login100-form-btn">
                <button
                  disabled={!verified || !load}
                  onClick={(e) => {
                    e.preventDefault();
                    setShowLoadingIndicator(true);
                    if (validateBeforeSubmit()) {
                      submit(userState);
                    }
                  }}
                  className="login100-form-btn"
                >
                  Login
                </button>
              </div>

              <div className="text-center p-t-12">
                <span className="txt1">Forgot</span>
                &nbsp;
                <a className="txt2" href={Routes.forgot}>
                  Username / Password?
                </a>
              </div>

              <div className="text-center p-t-30">
                <a className="txt2" href={Routes.signup}>
                  Create your Account
                  <i className="fas fa-long-arrow-alt-right m-l-5"></i>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
