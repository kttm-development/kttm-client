import {
    FAVORITE_CONCERT_SUCCESS, CLEAR_FAVORITES
} from '../actions/favorite-actions';

const initialState = {
    error:null,
    favorites: [],
};

export default function reducer(state=initialState, action) {
    if (action.type === FAVORITE_CONCERT_SUCCESS) {
        return Object.assign({}, state, {
            error: null,
            favorites: action.newFavorite
        });
    }
    else if (action.type === CLEAR_FAVORITES) {
        return Object.assign({}, state, {
            error: null,
            favorites: []
        });
    }
    console.log('new state', state)
    return state;
}