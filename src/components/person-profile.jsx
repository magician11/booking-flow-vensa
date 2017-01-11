import React from 'react';

import Footer from './footer';
import LocationPin from '../svgs/location';
import CloseIcon from '../svgs/close';

import styling from '../styling/main.scss';

const PersonProfile = (props) => {
  const person = props.personData;

  return (
    <div className={styling['person-profile']}>
      <div className={styling.center}>
        <div className={styling.image}>
          <img src={person.image} alt={person.name} />
        </div>
        <div className={styling.name}>
          {person.name}
        </div>
        <div className={styling.title}>
          {person.title}
        </div>
        <button onClick={() => props.onCloseModal()}>Book an Appointment</button>
      </div>
      <p className={styling.text}>{person.about}</p>
      <hr />
      <div className={styling.heading}>Languages spoken</div>
      <ul className={styling.languages}>
        {person.languages.map(language => <li>{language}</li>)}
      </ul>
      <hr />
      <div className={styling.heading}>Education</div>
      <p className={styling.text}> - {person.education}</p>
      <hr />
      <div className={styling.heading2}>Mission Bay Doctors</div>
      <p className={styling.text}><LocationPin /> {person.location}</p>
      <iframe className={styling.map} src={`https://www.google.com/maps/embed/v1/place?q=${person.location}&zoom=15&key=AIzaSyCpVb6nJ7JCJwHvRUBWCZrOWBU54qc6JuU`} />
      <Footer />
      <CloseIcon className={styling.close} onClick={() => props.onCloseModal()} />
    </div>
  );
};

/* eslint-disable react/no-unused-prop-types */
PersonProfile.propTypes = {
  personData: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    image: React.PropTypes.string.isRequired,
  }),
  onCloseModal: React.PropTypes.func.isRequired,
};

export default PersonProfile;
