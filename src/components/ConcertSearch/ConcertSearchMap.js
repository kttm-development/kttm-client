import React from 'react';
import { compose, withProps, withStateHandlers } from 'recompose';
import { Link } from 'react-router-dom'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import {storeCurrentConcert} from '../../actions/ticketmaster-actions'


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
                return (
                <Marker key={index} position={{ lat: item.lat, lng: item.lng }} onClick={() => props.onOpen(index)}>
                {props.isOpen.includes(index) && <InfoWindow onCloseClick={() => props.onClose(index)}>
                <span>helloss</span>
                  {/* {item.name.map(event => {
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
                        // <Link to='/concert-about' onClick={() => {
                        //     const currentConcertObj = {
                        //       city,
                        //       state,
                        //       date,
                        //       id,
                        //       name,
                        //       image,
                        //       time,
                        //       venue,
                        //       url,
                        //       attraction,
                        //       description
                        //     }
                        //     props.dispatch(storeCurrentConcert(currentConcertObj))
                        //   }}
                        // >{item.name}</Link>
                        name
                      );
                  })} */}
                    </InfoWindow>}
                </Marker>
                )
            })}
        </GoogleMap>
    );




export default ConcertSearchMap;