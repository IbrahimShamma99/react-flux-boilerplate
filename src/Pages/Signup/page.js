import React, { useState , useEffect } from "react";
import Routes from "../../routes";
import { ReCAPTCHA_Key, DELAY } from "../../constants";
import ReCAPTCHA from "react-google-recaptcha";
import LoadingIndicator from '../../components/LoadingIndicator/index';
import "../../styles/bootstrap.css";
import "../../styles/mdb.min.css";
import "./style.css";

const Signup = ({ submit, message }) => {
  const [userData, setUserData] = useState({
    company_name: "",
    email: "",
    password: "",
    confirm_password: "",
    username: "",
    department: "",
    title: "",
  });
  const [validationErrors, setValidationErrors] = useState({
      missingFields:false,
      wrongEmailFormat:false,
      shortPassword:false,
      passwordConfirmation:false
  });
  const [showLoadingIndicator,setShowLoadingIndicator] = useState(false);

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
    if(expired === "true"){
      setVerified(false);
    }
  },[expired]);

  useEffect(() => {
    if(message){
      setShowLoadingIndicator(false);
    }
  },[message]);

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

    const errors= {};
    var isValid = true;
    // if(!isEmail(userData.email)){ 
    //   errors.wrongEmailFormat = true;
    // }
    // if(!validatePasswordLength(userData.password.length)){ 
    //   errors.shortPassword = true;
    // }
    // if(!validatePasswordMatch(userData.password,userData.confirm_password)){
    //   errors.passwordConfirmation = true;
    // }
    if([...Object.keys(errors)].length > 0){    
      isValid = false;
      setShowLoadingIndicator(false);  
    }
    setValidationErrors({
      ...errors
    });
    
    return isValid;
  };

  const onChangeHandler = (event, name) => {
    event.preventDefault();
    setUserData({
      ...userData,
      [name]: event.target.value,
    });
  };
  return (
    <>
     {
          showLoadingIndicator ? 
          <div style={{position:"absolute",right:"50%",height:"20px",width:"20px",zIndex:"1",transform:"translate(-50%,-50%)"}}>
          <LoadingIndicator/>
          </div>:null
        }
    <div className="body-login">  
      <div className="card card-login" style={{ borderRadius: "20px" }}>
        <div className="card-header login-title text-center py-0">
          <p
            className="text-center font-weight-bold mt-3 mb-4"
            style={{ fontSize: "24px" }}
          >
            Sign Up
          </p>       
        </div>
        <div className="card-body px-lg-5 pt-0">   
          <div className="text-center mt-3">
            <span className="txt1">
              You are now registering your business profile. You will be the
              Admin user for your business.
            </span>
          </div>
          <p className="error-message">{message && !showLoadingIndicator ? message : null}</p>
          {
            validationErrors.missingFields ? 
            <p className="error-message">You should fill all requested fields</p>:
            null
          }
          <form className="text-center" style={{ color: "#757575" }}>      
            <div className="md-form mt-5">
              <input
                type="text"
                id="ComapanyName"
                className="form-control"
                // onFocus={() => inputFocus("CompanyLabel")}
                // onBlur={(e) => inputBulr("CompanyLabel", e.target.value)}
                onChange={(e) => onChangeHandler(e, "company_name")}
              />
              <label id="CompanyLabel" htmlFor="ComapanyName">
                Company Name
              </label>
            </div>

            <div className="form-row">
              <div className="col">
              
                <div className="md-form">
                  <input
                    type="text"
                    id="Email"
                    className={`form-control ${validationErrors.wrongEmailFormat ? "form-control-error":null}`}
                    // onFocus={() => inputFocus("EmailLabel")}
                    // onBlur={(e) => inputBulr("EmailLabel", e.target.value)}
                    onChange={(e) => onChangeHandler(e, "email")}
                  />
                  <label id="EmailLabel" htmlFor="Email">
                    Email
                  </label>
                  {
                    validationErrors.wrongEmailFormat ?
                    <small
                    id="PasswordHelpBlock"
                    className="form-text text-muted mb-0"
                    style={{ color: "red !important" }}
                  >
                    Wrong Email Format
                  </small>:null
                  }            
                </div>       
              </div>
              <div className="col">
                <div className="md-form">
                  <input
                    type="text"
                    id="Name"
                    className="form-control"
                    // onFocus={() => inputFocus("NameLabel")}
                    // onBlur={(e) => inputBulr("NameLabel", e.target.value)}
                    onChange={(e) => onChangeHandler(e, "username")}
                  />
                  <label id="NameLabel" htmlFor="Name">
                    Name
                  </label>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="col">
                <div className="md-form mt-0">
                  <input
                    type="email"
                    id="Department"
                    className="form-control"
                    // onFocus={() => inputFocus("DepartmentLabel")}
                    // onBlur={(e) => inputBulr("DepartmentLabel", e.target.value)}
                    onChange={(e) => onChangeHandler(e, "department")}
                  />
                  <label id="DepartmentLabel" htmlFor="Department">
                    Department
                  </label>
                </div>
              </div>
              <div className="col">
                <div className="md-form mt-0">
                  <input
                    type="tel"
                    id="Title"
                    className="form-control"
                    // onFocus={() => inputFocus("TitleLabel")}
                    // onBlur={(e) => inputBulr("TitleLabel", e.target.value)}
                    onChange={(e) => onChangeHandler(e, "title")}
                  />
                  <label id="TitleLabel" htmlFor="Title">
                    Title
                  </label>
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="col">
                <div className="md-form mt-0">
                  <input
                    type="password"
                    id="Password"
                    className={`form-control ${validationErrors.shortPassword ? "form-control-error":null}`}
                    aria-describedby="PasswordHelpBlock"
                    // onFocus={() => inputFocus("PasswordLabel")}
                    // onBlur={(e) => inputBulr("PasswordLabel", e.target.value)}
                    onChange={(e) => onChangeHandler(e, "password")}
                  />
                  <label htmlFor="Password" id="PasswordLabel">
                    Password
                  </label>
                  {
                    validationErrors.shortPassword ?
                    <small
                    id="PasswordHelpBlock"
                    className="form-text text-muted mb-0"
                    style={{ color: "red !important" }}
                  >
                   At least 8 characters and 1 digit
                  </small>:null
                  }
                 
                </div>
              </div>
              <div className="col">
                <div className="md-form mt-0">
                  <input
                    type="password"
                    id="ConfirmPassword"
                    className={`form-control ${validationErrors.passwordConfirmation ? "form-control-error":null}`}
                    // onFocus={() => inputFocus("ConfirmPasswordLabel")}
                    // onBlur={(e) =>
                    //   inputBulr("ConfirmPasswordLabel", e.target.value)
                    // }
                    onChange={(e) => onChangeHandler(e, "confirm_password")}
                  />
                  <label id="ConfirmPasswordLabel" htmlFor="ConfirmPassword">
                    Confirm Password
                  </label>
                  {
                    validationErrors.passwordConfirmation?
                    <small
                    id="PasswordHelpBlock"
                    className="form-text text-muted mb-0"
                    style={{ color: "red !important" }}
                  >
                   Please make sure your passwords match
                  </small>:null
                  }
                </div>
              </div>
            </div>
            <div style={{display:"flex",justifyContent:"center",width:"100%"}}>
              <ReCAPTCHA
                style={{ display: "inline-block" }}
                theme="dark"
                ref={_reCaptchaRef}
                sitekey={ReCAPTCHA_Key}
                onChange={handleChange}
                asyncScriptOnLoad={asyncScriptOnLoad}
              />
            </div>
            <button
              disabled = {
                !verified ||
                !load
              }
              onClick={(e) => {
                e.preventDefault();
                setShowLoadingIndicator(true);
                if(validateBeforeSubmit()){
                  submit(userData);
                }        
              }}
              className="buttons btn-turquoise btn-rounded btn-block my-0 waves-effect z-depth-0"
            >
              Register
            </button>
            <div className="text-center mt-3">
              <span className="txt1">Do you have an account?</span>
              &nbsp;
              <a className="txt2" href={Routes.login}>
                Sign In now
              </a>
            </div>
            <hr />
            <p>
              By clicking &nbsp;
              <em>
                <b>Register</b>
              </em>{" "}
              &nbsp; you agree to our &nbsp;
              <a href="/terms-service">terms of service</a>
            </p>
          </form>
        </div>
      </div>{" "}
    </div>
    </>
  );
};

export default Signup;
