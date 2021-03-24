const auth = {
  isAuthenticated() {
    if (typeof window === "undefined") return false;

    if (localStorage.getItem("token")) return localStorage.getItem("token");
    return false;
  },
  authenticate(jwt, cb) {
    if (typeof window !== "undefined") localStorage.setItem("token", jwt);
    setTimeout(() => {
      cb();
    }, 300);
  },
  getHeaderToken() {
    if (this.isAuthenticated()) {
      return "Token ".concat(localStorage.getItem("token"));
    }
    return undefined;
  },
};

export default auth;
