import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./components/home";
import Login from './components/login';
import Signup from './components/signup';
import timesheet from './components/timesheet';
import upload from './components/upload';
import schedule from './components/schedule';
import DisplayTimesheets from './components/timesheet/DisplayTimesheets';
import { Provider } from 'react-redux';
import store from './store';

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

const userisAdmin = userisAuthenticated && JSON.parse(localStorage.getItem("user")).typeofuser == "admin";
const AdminRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      userisAdmin ? (
        <Component {...props} />
      ) : (
          <Redirect
            to={{
              pathname: "/unauthorized",
              state: { from: props.location }
            }}
          />
        )
    }
  />
);

const Router = () => (
    <main>
        <Provider store={ store }>
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/register' component={Signup} />
                <PrivateRoute path='/timesheet' component={timesheet} />
                <AdminRoute path='/gia' component={upload} />
                <AdminRoute path='/schedule' component={schedule} />
                <AdminRoute path='/display-timesheet' component={DisplayTimesheets}/>
                <Route path='/' component={Home} />
            </Switch>
        </Provider>
    </main>
)

export default Router;
