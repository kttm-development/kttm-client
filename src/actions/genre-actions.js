import {API_BASE_URL} from '../config';

export const FETCH_GENRE_SUCCESS = 'FETCH_GENRE_SUCCESS';
export const fetchGenreSuccess = genres => ({
    type: FETCH_GENRE_SUCCESS,
    genres
});

export const FETCH_GENRE_ERROR = 'FETCH_GENRE_ERROR';
export const fetchGenreError = error => ({
    type: FETCH_GENRE_ERROR,
    error
});

export const fetchGenres = () => dispatch => {
    return fetch(`${API_BASE_URL}/genres`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        }
    }).then(res => {
        return res.json();
    })
    .then(genres => {
        dispatch(fetchGenreSuccess(genres));
    })
    .catch(err => dispatch(fetchGenreError(err.message)));
};