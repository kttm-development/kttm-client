import {
    FAVORITE_CONCERT_SUCCESS
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
    console.log('new state', state)
    return state;
}