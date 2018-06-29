import {
    FAVORITE_CONCERT_SUCCESS, CLEAR_FAVORITES, ADD_FAVORITE_SUCCESS, FAVORITE_CONCERT_ERROR
} from '../actions/favorite-actions';

const initialState = {
    error:null,
    favorites: [{
        name: null, 
        image: null, 
        city: null, 
        state: null, 
        id: null, 
        date:null,
        time: null,
        venue: null,
        url: null,
        attraction: null,
        description:null 
    }],
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
    else if (action.type === ADD_FAVORITE_SUCCESS) {
        return Object.assign({}, state, {
            error: null,
            favorites: [...state.favorites, action.newFavorite]
        });
    }
    else if (action.type === FAVORITE_CONCERT_ERROR) {
        return Object.assign({}, state, {
            error: action.error,
            favorites: []
        });
    }
    return state;
}