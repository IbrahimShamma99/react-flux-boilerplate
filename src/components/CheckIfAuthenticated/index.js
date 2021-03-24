import { useState, useEffect } from "react";
import auth from "../../helper/auth";

function useAuthentication() {
  const [isAuth, _] = useState(auth.isAuthenticated());

  useEffect(() => {
    if (!isAuth) {
      window.location.pathname = "/login";
    }

    return () => {
      //NOTE In case of Unmount
    };
  });

  return isAuth;
}
export default useAuthentication;
