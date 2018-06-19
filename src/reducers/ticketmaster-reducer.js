import {
    SENDING_TICKETMASTER_INFO,
    TICKETMASTER_INFO_SUCCESS,
    TICKETMASTER_INFO_ERROR,
    STORE_CURRENT_CONCERT,
    SET_PAGE_NUMBER,
    SET_SEARCH_RESULTS
} from '../actions/ticketmaster-actions';

import { SHOW_CONCERTS_SUCCESS } from '../actions/show-concerts.js';
import concertImg from '../images/concert-bg3.jpg'

const initialState = {
    loading: false,
    error: null,
    concerts:[],
    empty: true,
    currentConcert: {
        city:'',
        state:'',
        date:'',
        id:'',
        name:'Please hit the "expand" button on a concert from the "Concert" tab above',
        image:concertImg,
        time: '',
        venue:'',
        attraction: '',
        url:'http://www.ticketmaster.com',
        description: null
    },
    currentPage: 0,
    currentSearchResults: null
};

export default function reducer(state = initialState, action) {
    if (action.type === SENDING_TICKETMASTER_INFO) {
        return Object.assign({}, state, {
            loading: true,
            error: null,
            concerts: null,
            empty: true
        });
    }
    else if (action.type === TICKETMASTER_INFO_SUCCESS) {
        return Object.assign({}, state, {
            concerts: action.concerts,
            loading: false,
            error:null,
            empty: false,
            //below for testing currentConcert with airbnb before hooking up current Concert
            // currentConcert: action.concerts[0]
        });
    }
    else if (action.type === TICKETMASTER_INFO_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error,
            concerts:null,
            empty: true
        });
    }
    else if (action.type === SHOW_CONCERTS_SUCCESS) {
        return Object.assign({}, state, {
            showConcerts: true,
        });
    }
    else if (action.type === STORE_CURRENT_CONCERT) {
        return Object.assign({}, state, {
            currentConcert: action.currentConcertObj,
            loading: false,
            error:null,
            empty: false
        });
    }
    else if (action.type === SET_PAGE_NUMBER) {
        return Object.assign({}, state, {
            currentPage: action.pageNumber,
        });
    }
    else if (action.type === SET_SEARCH_RESULTS) {
        return Object.assign({}, state, {
            currentSearchResults: action.searchResults,
        });
    }
    return state;
}