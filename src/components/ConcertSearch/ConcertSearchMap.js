import React from 'react';
import { compose, withStateHandlers } from 'recompose';
import { Link } from 'react-router-dom'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import {storeCurrentConcert} from '../../actions/ticketmaster-actions'

import redMarker from '../../images/red-dot.png';
import blueMarker from '../../images/blue-dot.png';

import '../styles/ConcertSearchResults.css';


const ConcertSearchMap = compose(
    withStateHandlers(() => ({
      isOpen: [],
    }), {
        onOpen: ({isOpen}) => (index) => {
            return ({
          isOpen: [...isOpen, index],
        })}
      ,
        onClose: ({isOpen}) => (index) => {
            return ({
          isOpen: [...isOpen.filter(item => item !== index)],
        })}
      }
    ),
    withScriptjs,
    withGoogleMap
  )(props =>
    <GoogleMap
            zoom={6}
            center={props.mapCenter}
        >
            {props.markers.map((item, index) => {
                let iconObj = {url: blueMarker};
                if (item.name.length === 1) {
                  iconObj = {
                      url: redMarker
                  }
                }
                return (
                <Marker key={index} 
                        position={{ lat: item.lat, lng: item.lng }} 
                        onClick={() => props.onOpen(index)}
                        icon={iconObj}
                        >
                {props.isOpen.includes(index) && <InfoWindow onCloseClick={() => props.onClose(index)}>
                <span>
                  {item.name.map((event,idx) => {
                    let {
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
                      } = props.concerts[event];
                      console.log(name,'here');
                      return (
                        <Link key={idx} to='/concert-about' onClick={() => {
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
                        >{name}<br/></Link>
                      );
                  })}
                        </span>
                    </InfoWindow>}
                </Marker>
                )
            })}
        </GoogleMap>
    );




export default ConcertSearchMap;