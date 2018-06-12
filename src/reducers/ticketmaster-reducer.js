import {
    SENDING_TICKETMASTER_INFO,
    TICKETMASTER_INFO_SUCCESS
} from '../actions/ticketmaster-actions';

const initialState = {
    loading: false,
    concerts: {}
};

export default function reducer(state=initialState, action) {
    if (action.type === SENDING_TICKETMASTER_INFO) {
        return Object.assign({}, state, {
            loading: true
        });
    }
    else if (action.type === TICKETMASTER_INFO_SUCCESS) {
        return Object.assign({}, state, {
            concerts:action.concerts,
            loading: false
        });
    }
    
    return state;
}
