import React from 'react';
import ReactDOM from 'react-dom';
import BookingApp from './components/index';

// remove margins
document.body.style.margin = 0;

ReactDOM.render(<BookingApp />, document.getElementById('app'));
