import {
    SENDING_TICKETMASTER_INFO,
    TICKETMASTER_INFO_SUCCESS,
    TICKETMASTER_INFO_ERROR
} from '../actions/ticketmaster-actions';

const initialState = {
    loading: false,
    error: null,
    concerts:[],
    empty: true
};

export default function reducer(state=initialState, action) {
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
            empty: false
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
    
    return state;
}
