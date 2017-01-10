import React from 'react';

import People from './health-professionals';

import styling from '../styling/main.scss';

const BookingApp = () =>
(
  <div className={styling['booking-app']}>
    <People />
  </div>
);

export default BookingApp;
