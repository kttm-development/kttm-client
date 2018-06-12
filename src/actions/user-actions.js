import {API_BASE_URL} from '../config';
import {SubmissionError} from 'redux-form';

export const SET_CREDENTIALS = 'SET_CREDENTIALS';
export const setCredentials = (username, password) => ({
    type: SET_CREDENTIALS,
    username,
    password
});

export const SET_LOGGED_IN = 'SET_LOGGED_IN';
export const setLoggedIn = loggedIn => ({
    type: SET_LOGGED_IN,
    loggedIn
});

export const FETCH_CURRENT_USER_SUCCESS = 'FETCH_CURRENT_USER_SUCCESS';
export const fetchCurrentUserSuccess = user => ({
    type: FETCH_CURRENT_USER_SUCCESS,
    user
});

export const fetchCurrentUser = () => (dispatch, getState) => {
    const {currentUser: {username, password}} = getState();
    const token = btoa(`${username}:${password}`);

    return fetch(`${API_BASE_URL}/users/me`, {
        headers: {
            Authorization: `Basic ${token}`
        }
    }).then(res => {
        if (!res.ok) {
            if (res.headers.has('content-type') &&
                res.headers.get('content-type').startsWith('application/json')) {
                return res.json().then(err => Promise.reject(err));
            }
            else {
                return Promise.reject({
                    code: res.status,
                    message: res.statusText
                });
            }
        }

        return res.json();
    })
    .then(user => dispatch(fetchCurrentUserSuccess(user)))
    .catch(err => {
        const {code} = err;
        if (code === 401) {
            return Promise.reject(new SubmissionError({
                _error: 'Incorrect username or password'
            }));
        }
    });
};

export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const registerUserSuccess = user => ({
    type: REGISTER_USER_SUCCESS,
    user
});

export const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR';
export const registerUserError = error => ({
    type: REGISTER_USER_ERROR,
    error
});

export const registerUser = user => dispatch => {
    return fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(user)
    }).then(res => {
        if (!res.ok) {
            if (res.headers.has('content-type') &&
                res.headers.get('content-type').startsWith('application/json')) {
                return res.json().then(err => Promise.reject(err));
            }
            else {
                return Promise.reject({
                    code: res.status,
                    message: res.statusText
                });
            }
        }

        return res.json();
    })
    .then(user => {
        dispatch(fetchCurrentUserSuccess(user));
        dispatch(setLoggedIn(true));
    })
    .catch(err => {
        const {reason, message, location} = err;
        if (reason === 'ValidationError') {
            return Promise.reject(new SubmissionError({
                [location]: message
            }));
        }
    });
};
