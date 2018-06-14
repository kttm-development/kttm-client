import {API_BASE_URL} from '../config';

export const SENDING_TICKETMASTER_INFO = 'SENDING_TICKETMASTER_INFO';
export const sendingTicketmasterInfo = user => ({
    type: SENDING_TICKETMASTER_INFO
});

export const TICKETMASTER_INFO_SUCCESS = 'TICKETMASTER_INFO_SUCCESS';
export const ticketmasterInfoSuccess = concerts => ({
    type: TICKETMASTER_INFO_SUCCESS,
    concerts
});

export const TICKETMASTER_INFO_ERROR = 'TICKETMASTER_INFO_ERROR';
export const ticketmasterInfoError = error => ({
    type: TICKETMASTER_INFO_ERROR,
    error
});

export const fetchTicketmasterConcerts = (location, genre) => dispatch => {
    dispatch(sendingTicketmasterInfo)
    return fetch(`${API_BASE_URL}/concerts/${location}/${genre}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        }
    }).then(res => {
        return res.json();
    })
    .then(concerts => {
        dispatch(ticketmasterInfoSuccess(concerts));
    })
    .catch(err => dispatch(ticketmasterInfoError(err.message)));
};