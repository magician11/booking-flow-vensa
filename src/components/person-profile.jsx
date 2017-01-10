import React from 'react';

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
      <p className={styling.about}>{person.about}</p>
      <hr />
      <div className={styling.heading}>Languages spoken</div>
      <ul className={styling.languages}>
        {person.languages.map(language => <li>{language}</li>)}
      </ul>
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
