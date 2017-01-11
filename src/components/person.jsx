import React, { Component } from 'react';
import Modal from 'react-modal';

import PersonProfile from './person-profile';

import styling from '../styling/main.scss';

// to be able to click directly on the image
/* eslint-disable jsx-a11y/no-static-element-interactions */

const customStyles = {
  content: {
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    padding: '5px',
    border: 'none',
  },
};

class Person extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const person = this.props.personData;

    let availableTimes;
    if (person.availableTimes) {
      availableTimes = (<div className={styling.times}>{person.availableTimes.map(time => (
        <div className={styling.panel}>{time}</div>
      ))}</div>);
    } else {
      availableTimes = <div className={styling.panel}>No appointment available for this date.</div>;
    }

    return (
      <div className={styling.person}>
        <div className={styling.row}>
          <div className={styling['photo-container']}>
            <img src={person.image} alt={person.name} onClick={this.openModal} />
          </div>
          <div>
            <div className={styling.name} onClick={this.openModal}>{person.name}</div>
            <div className={styling.title}>{person.title}</div>
          </div>
        </div>
        <div className={styling.row}>
          {availableTimes}
        </div>
        <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} contentLabel={`Profile for ${person.name}`} style={customStyles}>
          <PersonProfile personData={person} onCloseModal={this.closeModal} />
        </Modal>
      </div>
    );
  }
}

/* eslint-disable react/no-unused-prop-types */
Person.propTypes = {
  personData: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    image: React.PropTypes.string.isRequired,
  }),
};

export default Person;
