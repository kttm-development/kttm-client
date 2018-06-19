import React from 'react';
import { storeCurrentConcert } from '../../actions/ticketmaster-actions'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { favoriteConcertSuccess } from '../../actions/favorite-actions'

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
  dispatch,
  description
}) {
  return (
    <span className="search-results">
      <div className="concert-container row">
        <div className="concert-details">
          <div className="pic-info col-4">
            <img src={image} alt="concert" className="concert-search-image" />
            <button onClick={() => {
              const newFavorite = { city, state, date, id, name, image, time, venue, url, attraction, description }
              console.log(newFavorite)
              dispatch(favoriteConcertSuccess(newFavorite))
            }
            }>Favorite</button>
            <Link to='/concert-about'>
              <button
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
                  console.log('current Obj', currentConcertObj)
                  dispatch(storeCurrentConcert(currentConcertObj))
                }}
              >More Details</button></Link>
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
        </div>
      </div>
    </span>
  );
}

export default connect()(ConcertSearchItem);
