import React, { Component } from 'react';
import { DayPicker } from 'react-dates';
import Modal from 'react-modal';
import moment from 'moment';

import 'react-dates/lib/css/_datepicker.css';
import styling from '../styling/main.scss';

import BackArrow from '../svgs/back-arrow';
import CalendarIcon from '../svgs/calendar';
import VensaLogo from '../svgs/vensa-logo';

// to be able to click directly on the calendar bar
/* eslint-disable jsx-a11y/no-static-element-interactions */

// eslint-disable-next-line no-alert
const showClick = msg => alert(msg);

const customStyles = {
  overlay: {
    bottom: '33%',
  },
  content: {
    top: '11%',
    left: '5%',
    right: '5%',
    padding: '5px',
  },
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment(),
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.updateDate = this.updateDate.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  updateDate(date) {
    this.setState({
      date,
      modalIsOpen: false,
    });
  }

  render() {
    return (
      <div className={styling.header}>
        <div className={styling.topbar}>
          <BackArrow className={styling['back-arrow']} onClick={(e) => { e.preventDefault(); showClick('going back...'); }} />
          <VensaLogo className={styling['vensa-logo']} />
          <a href="/help" onClick={(e) => { e.preventDefault(); showClick('getting help...'); }}>HELP</a>
        </div>
        <div className={styling['calendar-bar']} onClick={this.openModal}>
          <div className={styling.month}>{this.state.date.format('dddd, Do MMM YYYY')}</div>
          <CalendarIcon />
        </div>
        <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} contentLabel={'Date Selector'} style={customStyles}>
          <DayPicker
            id="date_input"
            date={this.state.date}
            onDayClick={this.updateDate}
          />
        </Modal>
      </div>
    );
  }
}

export default Header;
