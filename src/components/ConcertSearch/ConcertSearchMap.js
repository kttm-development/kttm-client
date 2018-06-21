import React from 'react';
import {connect} from 'react-redux';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';


const ConcertSearchMap = withScriptjs(withGoogleMap((props) => {
    return (
        <GoogleMap
            defaultZoom={6}
            defaultCenter={props.mapCenter}
        >
            {props.concerts.map((item, index) => <Marker key={index} position={{ lat: item.coords.lat, lng: item.coords.lng }} />)}
        </GoogleMap>
    );
}));

const mapStateToProps = state => ({
    concerts: state.ticketmaster.concerts,
    mapCenter: state.ticketmaster.mapCenter
});

export default connect(mapStateToProps)(ConcertSearchMap);