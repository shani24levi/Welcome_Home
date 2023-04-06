import React, { Component } from 'react';
import Moment from 'react-moment';

class ProfileCreds extends Component {
  render() {
    const { myReantals } = this.props;

    const expItems = myReantals.map(exp => (
      <li key={exp._id} className="list-group-item">
        <h4>{exp.address}</h4>
        <h4>{exp.city}</h4>
        <p>
          <Moment format="YYYY/MM/DD">{exp.from}</Moment> -
          {exp.to === null ? (
            ' Now'
          ) : (
            <Moment format="YYYY/MM/DD">{exp.to}</Moment>
          )}
        </p>
        <p>
          <strong>Position:</strong> {exp.address}
        </p>
        <p>
          {exp.current === '' ? null : (
            <span>
              <strong>Current Location: </strong> {exp.current}
            </span>
          )}
        </p>
      </li>
    ));
    return (
      <div className="row">
        <div className="col-md-6">
          <h3 className="text-center text-info">MyReantals</h3>
          {expItems.length > 0 ? (
            <ul className="list-group">{expItems}</ul>
          ) : (
            <p className="text-center">No Reantals Listed</p>
          )}
        </div>
      </div>
    );
  }
}

export default ProfileCreds;
