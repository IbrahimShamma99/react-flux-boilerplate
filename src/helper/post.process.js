import auth from "./auth";

const postLogin = (token) => {
  auth.authenticate(token, () => {
    window.location.pathname = "/bot";
  });
};

const postLogout = () => {
  setTimeout(() => {
    window.location.pathname = "/";
    localStorage.removeItem("persist:user");
  }, 300);
};

const postNewPassword = () => {
  setTimeout(() => {
    window.location.pathname = "/login";
  }, 300);
};

export { postLogin, postLogout, postNewPassword };
