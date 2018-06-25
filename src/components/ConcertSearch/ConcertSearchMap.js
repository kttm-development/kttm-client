import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

import '../styles/ConcertSearchResults.css';


const ConcertSearchMap = withScriptjs(withGoogleMap((props) => {
    return (
        <GoogleMap
            zoom={6}
            center={props.mapCenter}
        >
            {props.concerts.map((item, index) => <Marker key={index} position={{ lat: item.coords.lat, lng: item.coords.lng }} />)}
        </GoogleMap>
    );
}));




export default ConcertSearchMap;