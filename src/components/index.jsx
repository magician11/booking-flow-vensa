import React, { Component } from 'react';

import Header from './header';
import HealthProfessionals from './health-professionals';
import styling from '../styling/main.scss';

class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          name: 'Dr. John Smith',
          title: 'General Practitioner',
          image: '',
        },
        {
          name: 'Dr. Mary Aniston',
          title: 'General Practitioner',
          image: '',
        },
        {
          name: 'Dr. Mary Aniston',
          title: 'General Practitioner',
          image: '',
        },
      ],
    };
  }

  render() {
    return (
      <div className={styling['booking-app']}>
        <Header />
        <HealthProfessionals people={this.state.people} />
      </div>
    );
  }
}

export default Booking;
