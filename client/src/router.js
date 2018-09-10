import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './App';
import Login from './components/login';
import Signup from './components/signup';

const Router = () => (
    <main>
        <Switch>
            <Route path='/login' component={Login} />
            <Route path='/register' component={Signup} />
            <Route path='/' component={App} />
        </Switch>
    </main>
)

export default Router;
