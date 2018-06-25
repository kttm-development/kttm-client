import React from 'react';
import {deleteContact} from '../../actions/contacts-actions'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'


export function Contacts({
  name,
  id,
  email,
  dispatch
}) {
  return (
    <span className="search-results">
    <div className="concert-container row">
      <div className="concert-details">
        <div className="pic-info col-4">
          <button 
            className="blue push_button"
            onClick={() => {
              dispatch(deleteContact(id))
            }
            }>Remove</button>
        </div>
        <div className="concert-search-about col-8">
          <label className="info-label">Name:</label>
          <label className="concert-label">{name}</label>
          <label className="info-label">Email Address:</label>
          <label className="concert-label">{email}</label>
        </div>
      </div>
      </div>
    </span>
  );
}

export default connect()(Contacts);
