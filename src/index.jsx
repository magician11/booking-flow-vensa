import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import BookingApp from './components/index';
import People from './components/health-professionals';
import PersonProfile from './components/person-profile';
import NoMatch from './components/unknown';

// remove margins
document.body.style.margin = 0;

ReactDOM.render((<Router history={hashHistory}>
  <Route path="/" component={BookingApp}>
    <IndexRoute component={People} />
    <Route path="/health-professional/:personId" component={PersonProfile} />
    <Route path="*" component={NoMatch} />
  </Route>
</Router>
), document.getElementById('app'));
