import React from 'react';
import { storeCurrentConcert } from '../../actions/ticketmaster-actions'
import { deleteFavorite } from '../../actions/favorite-actions'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'


export function Favorites({
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
  dispatch,
  description
}) {
  return (
    <span className="search-results">
      <div className="concert-container row">
        <div className="concert-details">
          <div className="pic-info col-4">
            <img src={image} alt="concert" className="concert-search-image" />
            <button
              className="un-favorite-button blue push_button"
              onClick={() => {
                dispatch(deleteFavorite(id))
              }}
            >Un-Favorite</button>
            <Link to='/concert-about'>
              <button
                className="more-details-button blue push_button"
                onClick={() => {
                  const currentConcertObj = {
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
                    description
                  }
                  dispatch(storeCurrentConcert(currentConcertObj))
                }}
              >More Details</button></Link>
          </div>
          <div className="concert-search-about col-8">
            <label className="info-label">Title:</label>
            <label className="concert-label">{name}</label>
            <label className="info-label">Venue:</label>
            <label className="concert-label">{venue}</label>
            <label className="info-label">Date:</label>
            <label className="concert-label">{date}</label>
            <label className="info-label">Time:</label>
            <label className="concert-label">{time}</label>
          </div>
        </div>
      </div>
    </span>
  );
}

export default connect()(Favorites);
