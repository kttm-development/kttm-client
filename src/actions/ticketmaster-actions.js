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

export const STORE_CURRENT_CONCERT = 'STORE_CURRENT_CONCERT';
export const storeCurrentConcert = (currentConcertObj) => ({
    type: STORE_CURRENT_CONCERT,
    currentConcertObj
});

export const SET_PAGE_NUMBER = 'SET_PAGE_NUMBER';
export const setPageNumber = (pageNumber) => ({
    type: SET_PAGE_NUMBER,
    pageNumber
});

export const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS';
export const setSearchResults = (searchResults) => ({
    type: SET_SEARCH_RESULTS,
    searchResults
});

export const SET_IS_LAST_PAGE = 'SET_IS_LAST_PAGE';
export const setIsLastPage = (isLastPage) => ({
    type: SET_IS_LAST_PAGE,
    isLastPage
});

export const fetchTicketmasterConcerts = (location, genre, page) => dispatch => {
    dispatch(sendingTicketmasterInfo)
    return fetch(`${API_BASE_URL}/concerts/${location}/${genre}/${page}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        }
    }).then(res => {
        return res.json();
    })
    .then(results => {
        console.log(results.concerts);
        if(results.message){
           return dispatch(ticketmasterInfoError(results.message));
        }
        else{
        dispatch(setIsLastPage(results.isLastPage));
        return dispatch(ticketmasterInfoSuccess(results.concerts));
        }
    })
    .catch(err => dispatch(ticketmasterInfoError(err.message)));
};