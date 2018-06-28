import {
    FETCH_GENRE_SUCCESS, FETCH_GENRE_ERROR

} from '../actions/genre-actions';

const initialState = {
    error:null,
    genres: [{genre:''}]
};

export default function reducer(state=initialState, action) {
    if (action.type === FETCH_GENRE_SUCCESS) {
        return Object.assign({}, state, {
            error: null,
            genres: action.genres
        });
    }
    else if (action.type === FETCH_GENRE_ERROR) {
        return Object.assign({}, state, {
            error: action.error,
            genres: [{genre:''}]
        });
    }
    
    return state;
}
