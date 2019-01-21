import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import ServerPage from './containers/ServerPage';
import TablesPage from './containers/TablesPage';

export default () => (
  // <App>
  //   <Switch>
  //     <Route path={routes.SERVER} component={ServerPage} />
  //     <Route exact path={routes.TABLES} component={TablesPage} />
  //   </Switch>
  // </App>
  <App>
    <Switch>
      <Route exact path={routes.TABLES} component={TablesPage} />
      <Route exact path={routes.HOME} component={ServerPage} />
    </Switch>
  </App>
);
