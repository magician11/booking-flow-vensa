import React from 'react';

import styling from '../styling/main.scss';

const BookingApp = props =>
(
  <div className={styling['booking-app']}>
    {props.children}
  </div>
);

BookingApp.propTypes = {
  children: React.PropTypes.node,
};

export default BookingApp;
