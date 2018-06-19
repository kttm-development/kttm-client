import React from 'react';
import { connect } from 'react-redux';

import { favorite } from '../../actions/favorite-actions'

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
            <button onClick={() => {
              // const newFavorite = { city, state, date, id, name, image, time, venue, url, attraction }
              console.log(newFavorite)
              dispatch(favorite(id))
            }
            }>Favorite</button>
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
          </div>
          <a href={`http://localhost:3000/concert-about`} target="_blank"><button className="hotels-button">More Details</button></a>
        </div>
      </div>
    </span>
  );
}

export default connect()(ConcertSearchItem);