const assetsUrl =
  "";

const serverURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5003/api"
    : "";


const ReCAPTCHA_Key = "FILL";
const DELAY = 1500;

export { assetsUrl, serverURL, ReCAPTCHA_Key, DELAY };
