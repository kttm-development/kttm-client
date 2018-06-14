import {
    FETCH_LOCATION_SUCCESS, FETCH_LOCATION_ERROR

} from '../actions/location-actions';

const initialState = {
    error: null,
    locations: []
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_LOCATION_SUCCESS) {
        return Object.assign({}, state, {
            error: null,
            locations: action.locations
        });
    }
    else if (action.type === FETCH_LOCATION_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }

    return state;
}
