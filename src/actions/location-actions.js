import { API_BASE_URL } from '../config';

export const FETCH_LOCATION_SUCCESS = 'FETCH_LOCATION_SUCCESS';
export const fetchLocationSuccess = locations => ({
    type: FETCH_LOCATION_SUCCESS,
    locations
});

export const FETCH_LOCATION_ERROR = 'FETCH_LOCATION_ERROR';
export const fetchLocationError = error => ({
    type: FETCH_LOCATION_ERROR,
    error
});

export const fetchLocations = () => dispatch => {
    return fetch(`${API_BASE_URL}/locations`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        }
    }).then(res => {
        return res.json();
    })
        .then(locations => {
            console.log(locations)
            dispatch(fetchLocationSuccess(locations));
        })
        .catch(err => dispatch(fetchLocationError(err.message)));
};