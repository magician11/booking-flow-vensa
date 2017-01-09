import React, { Component } from 'react';

class HealthProfessionals extends Component {

  render() {
    const people = this.props.people.map(person =>
      (
        <div>
          <p>{person.name}</p>
          <p>{person.title}</p>
        </div>
      )
    );

    return (
      <div>
        { people }
      </div>
    );
  }
}

HealthProfessionals.propTypes = {
  people: React.PropTypes.arrayOf(React.PropTypes.object),
};

export default HealthProfessionals;
