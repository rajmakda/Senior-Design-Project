import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import App from "./App";
import Login from "./components/login";
import Signup from "./components/signup";
import timesheet from "./components/timesheet";

// async function isAuthenticated() {
//     if (localStorage.getItem("token") !== null) {
//         let authenticated = await fetch('/api/auth/verifyToken', {
//             headers: {
//                 "x-access-token": localStorage.getItem("token")
//             }
//         }).then(res => {
//             return res.json();
//         }).catch(err => console.log(err))
//             // console.log(res);
//             .then(res => {
//                 if (res.auth === true) {
//                     localStorage.setItem("auth", true);
//                     return true;
//                 } else {
//                     localStorage.setItem("auth", false);
//                     localStorage.setItem("token", null);
//                     return false;
//                 }
//             }).catch(err => console.log(err))
//             alert(authenticated);
//             return authenticated;
//     } else {
//         localStorage.setItem("auth", false);
//         localStorage.setItem("token", null);
//         alert(false);
//         return false;
//     }
// }

const userisAuthenticated = localStorage.getItem("auth") === "true";
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      userisAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const Router = () => (
  <main>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Signup} />
      <PrivateRoute path="/timesheet" component={timesheet} />
      <Route path="/" component={App} />
    </Switch>
  </main>
);

export default Router;
