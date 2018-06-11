import {
    FETCH_CURRENT_USER_SUCCESS,
    SET_CREDENTIALS,
    SET_LOGGED_IN
} from './actions';

const initialState = {
    loggedIn: false
};

export default function reducer(state=initialState, action) {
    if (action.type === SET_CREDENTIALS) {
        return Object.assign({}, state, {
            username: action.username,
            password: action.password
        });
    }
    else if (action.type === FETCH_CURRENT_USER_SUCCESS) {
        return Object.assign({}, state, action.user);
    }
    else if (action.type === SET_LOGGED_IN) {
        return Object.assign({}, state, {
            loggedIn: action.loggedIn
        });
    }
    return state;
}
