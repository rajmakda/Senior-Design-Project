import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './App';
import Schedule from './Schedule';

const Router = () => (
    <main>
        <Switch>
          <Route path='/schedule' component={Schedule} />
            <Route path='/' component={App} />
        </Switch>
    </main>
)

export default Router;
