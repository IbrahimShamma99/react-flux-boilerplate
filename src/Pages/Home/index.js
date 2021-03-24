import React, { useState, useEffect } from "react";
import "../../styles/bootstrap.css";
import "../../styles/mdb.min.css";
import "./style.css";
import Routes from "../../routes";
import { assetsUrl, ReCAPTCHA_Key, DELAY } from "../../constants";
//import { contactUS } from "../../apis/contact.api";
import ReCAPTCHA from "react-google-recaptcha";

const Home = (props) => {
  const [contact, setContact] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    subject: "",
    body: "",
  });
  const [load, setLoad] = useState(false);
  const [expired, setExpired] = useState("false");
  const [verified, setVerified] = useState(false);

  const _reCaptchaRef = React.createRef();

  const asyncScriptOnLoad = () => {
    console.log("LOADED");
  };

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

  const handleChange = (value) => {
    console.log("Captcha value:", value);
    setVerified(true);
    // if value is null recaptcha expired
    if (value === null) setExpired("true");
  };

  // const onSendEmail = () => {
  //   contactUS(contact);
  // };
  return <>HOME</>;
};

export default Home;
