import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import App from './App';
import Login from './components/login';
import Signup from './components/signup';
import timesheet from './components/timesheet';
import upload from './components/upload';
import schedule from './components/schedule';

const userisAuthenticated = (localStorage.getItem("auth") === 'true');
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        userisAuthenticated
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }} />
    )} />
)

const Router = () => (
    <main>
        <Switch>
            <Route path='/login' component={Login} />
            <Route path='/register' component={Signup} />
            <PrivateRoute path='/timesheet' component={timesheet} />
            <PrivateRoute path='/gia' component={upload} />
            <PrivateRoute path='/schedule' component={schedule} />
            <Route path='/' component={App} />
        </Switch>
    </main>
)

export default Router;
