import React from 'react';

import Person from './person';

import styling from '../styling/main.scss';

const HealthProfessionals = (props) => {
  const people = props.people.map(person =>
    <Person name={person.name} title={person.title} image={person.image} />
  );

  return (
    <div className={styling['health-professionals']}>
      { people }
    </div>
  );
};

HealthProfessionals.propTypes = {
  people: React.PropTypes.arrayOf(React.PropTypes.object),
};

export default HealthProfessionals;
