import {API_BASE_URL} from '../config';
import {SubmissionError} from 'redux-form';

export const SENDING_TICKETMASTER_INFO = 'SENDING_TICKETMASTER_INFO';
export const sendingTicketmasterInfo = user => ({
    type: SENDING_TICKETMASTER_INFO
});

export const TICKETMASTER_INFO_SUCCESS = 'TICKETMASTER_INFO_SUCCESS';
export const ticketmasterInfoSuccess = concerts => ({
    type: TICKETMASTER_INFO_SUCCESS,
    concerts
});

export const fetchTicketmasterConcerts = (location, genre) => dispatch => {
    dispatch(sendingTicketmasterInfo)
    return fetch(`${API_BASE_URL}/ticketmaster/location/genre`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        }
    }).then(res => {
        if (!res.ok) {
            if (res.headers.has('content-type') &&
                res.headers.get('content-type').startsWith('application/json')) {
                return res.json().then(err => Promise.reject(err));
            }
            else {
                return Promise.reject({
                    code: res.status,
                    message: res.statusText
                });
            }
        }

        return res.json();
    })
    .then(concerts => {
        dispatch(ticketmasterInfoSuccess(concerts));
    })
    .catch(err => {
        const {reason, message, location} = err;
        if (reason === 'ValidationError') {
            return Promise.reject(new SubmissionError({
                [location]: message
            }));
        }
    });
};