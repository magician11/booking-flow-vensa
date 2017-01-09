import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Booking from './components/index';
// import About from './components/about';
// import People from './components/people';
// import Person from './components/person';
// import NoMatch from './components/unknown';
// import Home from './components/home';

// remove margins
document.body.style.margin = 0;

require('bootstrap/dist/css/bootstrap.css');

ReactDOM.render((<Router history={browserHistory}>
  <Route path="/" component={Booking}>
    {/* <IndexRoute component={Home} />
      <Route path="/health-professional/:personId" component={Person} />
      </Route>
    <Route path="*" component={NoMatch} /> */}
  </Route>
</Router>
), document.getElementById('app'));
