import React, { Component } from 'react';
import Modal from 'react-modal';

import PersonProfile from './person-profile';

import styling from '../styling/main.scss';

// to be able to click directly on the image
/* eslint-disable jsx-a11y/no-static-element-interactions */

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

    return (
      <div className={styling.person}>
        <div className={styling.row}>
          <div className={styling['photo-container']}>
            <img src={person.image} alt={person.name} onClick={this.openModal} />
          </div>
          <div>
            <div className={styling.name}>{person.name}</div>
            <div className={styling.title}>{person.title}</div>
          </div>
        </div>
        <div className={styling.row}>
          <div className={styling.panel}>
            No appointment available for this date.
          </div>
        </div>
        <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} contentLabel={`Profile for ${person.name}`}>
          <PersonProfile personData={person} />
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
