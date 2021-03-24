import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Routes from "./routes";
import LoadingIndicator from "./components/LoadingIndicator/index";

const Login = lazy(() => import("./Pages/Login/index"));
const Signup = lazy(() => import("./Pages/Signup/index"));
const Home = lazy(() => import("./Pages/Home/index"));
const ForgotPassword = lazy(() => import("./Pages/ForgotPassword/index"));
const ResetPassword = lazy(() => import("./Pages/ResetPassword/index"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={LoadingIndicator}>
        <Router>
          <Switch>
            <Route path={Routes.login} component={Login}></Route>
            <Route path={Routes.signup} component={Signup}></Route>
            <Route path={Routes.forgot} component={ForgotPassword}></Route>
            <Route path={Routes.resetPassword} component={ResetPassword}></Route>
            <Route path={Routes.home} component={Home}></Route>
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
