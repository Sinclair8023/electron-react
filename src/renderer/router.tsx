import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Layout from './layout';
import Message from './views/message'

function RouterConfig({ history }) { // eslint-disable-line
  return (
    <Router history={history}>
      <Layout>
        <Switch>
          <Route path="/message" component={Message} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default RouterConfig;
