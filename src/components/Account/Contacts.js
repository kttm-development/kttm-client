import React from 'react';
import { connect } from 'react-redux';

import { deleteContact } from '../../actions/contacts-actions'

export function Contacts({
  name,
  id,
  email,
  dispatch
}) {
  return (
    <span className="contacts-list">
      <div className="concert-container row">
        <div className="concert-details">
          <div className="contact-details col-8">
            <label className="info-label">Name:</label>
            <label className="concert-label">{name}</label>
            <label className="info-label">Email Address:</label>
            <label className="concert-label">{email}</label>
          </div>
          <div className="col-4">
            <a
              className="remove-contact blue push_button"
              onClick={() => {
                dispatch(deleteContact(id))
              }
              }><i className="fas fa-trash-alt"></i></a>
          </div>
        </div>
      </div>
    </span>
  );
}

export default connect()(Contacts);
