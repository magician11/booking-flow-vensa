import React from 'react';

import styling from '../styling/main.scss';

const Person = props =>
(
  <div className={styling.person}>
    <div className={styling.row}>
      <div className={styling['photo-container']}>
        <img src={props.image} alt={props.name} />
      </div>
      <div>
        <div className={styling.name}>{props.name}</div>
        <div className={styling.title}>{props.title}</div>
      </div>
    </div>
    <div className={styling.row}>
      <div className={styling.panel}>
        No appointment available for this date.
      </div>
    </div>
  </div>
);

Person.propTypes = {
  name: React.PropTypes.string,
  title: React.PropTypes.string,
  image: React.PropTypes.string,
};

export default Person;
