import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import { onMainEnter, onSuccessEnter, onSuccessLeave } from './hooks';
import App from './components/App'
import Home from './containers/Home'
import Success from './components/Success';


export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} onEnter={onMainEnter} />
      <Route path="/success" component={Success} onEnter={onSuccessEnter} onLeave={onSuccessLeave} />
    </Route>
  </Router>
);
