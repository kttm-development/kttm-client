import React from 'react';
import { compose, withProps, withStateHandlers } from 'recompose';
import { Link } from 'react-router-dom'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import {storeCurrentConcert} from '../../actions/ticketmaster-actions'


const ConcertSearchMap = compose(
    withStateHandlers(() => ({
      isOpen: false,
    }), {
      onToggleOpen: ({ isOpen }) => () => ({
        isOpen: !isOpen,
      })
    }),
    withScriptjs,
    withGoogleMap
  )(props =>
    <GoogleMap
            zoom={6}
            center={props.mapCenter}
        >
            {props.concerts.map((item, index) => {
                const {city,
                    state,
                    date,
                    id,
                    name,
                    image,
                    time,
                    venue,
                    url,
                    attraction,
                    description} = item;
                return (
                <Marker key={index} position={{ lat: item.coords.lat, lng: item.coords.lng }} onClick={props.onToggleOpen}>
                {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
                  <Link to='/concert-about' onClick={() => {
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
                  props.dispatch(storeCurrentConcert(currentConcertObj))
                }}
              >{item.name}</Link>
                    </InfoWindow>}
                </Marker>
                )
            })}
        </GoogleMap>
    );




export default ConcertSearchMap;