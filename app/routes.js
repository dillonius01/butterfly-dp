import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import { onMainEnter } from './hooks';
import App from './components/App'
import Home from './containers/Home'


export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} onEnter={onMainEnter} />
    </Route>
  </Router>
);
