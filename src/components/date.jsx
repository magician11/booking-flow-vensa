import React from 'react';
import moment from 'moment';

import styling from '../styling/main.scss';

// to be able to click directly on the dates
/* eslint-disable jsx-a11y/no-static-element-interactions */

const Date = (props) => {
  const selected = (props.selected) ? styling.selected : '';

  return (
    <div className={selected} onClick={() => props.dateSelected()}>
      <div className={styling.date}>{props.date.format('DD')}</div>
      <div className={styling.day}>{props.date.format('ddd')}</div>
    </div>
  );
};

Date.propTypes = {
  date: React.PropTypes.instanceOf(moment).isRequired,
  selected: React.PropTypes.bool,
  dateSelected: React.PropTypes.func,
};

export default Date;
