import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './pages/home';

function RouterConfig({ history }) { // eslint-disable-line
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={IndexPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
