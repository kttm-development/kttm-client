import React from 'react';
import {API_BASE_URL} from '../../config';
import {storeCurrentConcert} from '../../actions/ticketmaster-actions'
import { connect } from 'react-redux';

export function ConcertSearchItem({
  city,
  state,
  date,
  id,
  name,
  image,
  time,
  venue,
  url,
  attraction,
  dispatch
}) {
  return (
    <span className="search-results">
    <div className="concert-container row">
      <div className="concert-details">
        <div className="pic-info col-4">
          <img src={image} alt="concert" className="concert-search-image" />
        </div>
        <div className="concert-search-about col-8">
          <label className="info-label">Name:</label>
          <label className="concert-label">{name}</label>
          <label className="info-label">Venue:</label>
          <label className="concert-label">{venue}</label>
          <label className="info-label">Date:</label>
          <label className="concert-label">{date}</label>
          <label className="info-label">Time:</label>
          <label className="concert-label">{time}</label>
          {/* <label className="info-label">Description:</label>
          <label className="concert-label">{description}</label> */}
        </div>
          <a href={`http://localhost:3000/concert-about`}>
            <button 
              className="hotels-button"
              onClick={()=> {
                const currentConcertObj={
                  city,
                  state,
                  date,
                  id,
                  name,
                  image,
                  time,
                  venue,
                  url,
                  attraction
                  }
                  console.log(currentConcertObj)
                dispatch(storeCurrentConcert(currentConcertObj))
              }}
            >
              More Details
            </button></a>
      </div>
    </div>
    </span>
  );
}

export default connect()(ConcertSearchItem);
