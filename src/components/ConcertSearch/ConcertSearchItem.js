import React from 'react';
import { storeCurrentConcert } from '../../actions/ticketmaster-actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { newFavorite } from '../../actions/favorite-actions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EmailButton from '../../commons/EmailButton'

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
  props,
  description
}) {
  return (
    <span className="search-results">
      <div className="concert-container row">
        <div className="concert-details">
          <div className="pic-info col-4">
            <img src={image} alt="concert" className="concert-search-image" />
            <button
              className="favorite-button blue push_button"
              onClick={() => {
                const newFavoriteObj = {
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
                if (props.loggedIn) {
                  dispatch(newFavorite(newFavoriteObj))
                  toast.success("Concert added to your account's favorites list!", {  
                    className: 'black-background', 
                    bodyClassName: "grow-font-size", 
                    progressClassName: 'fancy-progress-bar' 
                  })
                }
                else {
                  toast.error("Please login or signup to save this concert to  your favorites", {  
                    className: 'black-background', 
                    bodyClassName: "grow-font-size", 
                    progressClassName: 'fancy-progress-bar' 
                  })
                }
              }
              }>Favorite</button>
            <Link className='nav-item' to='/concert-about'>
              <button
                className="details-button blue push_button"
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
              <EmailButton city={city}
                state={state}
                date={date}
                name={name}
                image={image}
                time={time}
                venue={venue}
                url={url}
                attraction={attraction}
                contacts={props.contacts}
                loggedIn={props.loggedIn}
              />
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
