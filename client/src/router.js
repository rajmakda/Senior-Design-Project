import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './App';

const Router = () => (
    <main>
        <Switch>
            <Route path='/' component={App} />
        </Switch>
    </main>
)

export default Router;
