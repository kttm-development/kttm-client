import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const coords = [
    {
    "lng": -122.417473,
    "lat": 37.778479
    },
    {
        "lng": -122.2555418,
        "lat": 37.8740742
    }
]

const ConcertSearchMap = withScriptjs(withGoogleMap(() => {
    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{  lat: 37.778479, lng: -122.417473 }}
        >
            {coords.map((item, index) => <Marker key={index} position={{ lat: item.lat, lng: item.lng }} />)}
        </GoogleMap>
    );
}));

export default ConcertSearchMap;