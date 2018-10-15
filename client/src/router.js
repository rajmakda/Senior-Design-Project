import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import App from './App';
import Schedule from './Schedule';
import Login from './components/login';
import Signup from './components/signup';
import timesheet from './components/timesheet';
import DisplayTimesheets from './components/timesheet/DisplayTimesheets';
import { Provider } from 'react-redux';
import store from './store';

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
        <Provider store={ store }>
            <Switch>
            <Route path='/schedule' component={Schedule} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Signup} />
                <PrivateRoute path='/timesheet' component={timesheet} />
                <PrivateRoute path='/display-timesheet' component={DisplayTimesheets}/>
                <Route path='/' component={App} />
            </Switch>
        </Provider>
    </main>
)

export default Router;
