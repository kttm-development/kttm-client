import {API_BASE_URL} from '../config';

// ===post favorite actions=== \\

export const FAVORITE_CONCERT_REQUEST = 'FAVORITE_CONCERT_REQUEST';
export const favoriteConcertRequest = () => {
  return {
    type: FAVORITE_CONCERT_REQUEST
  };
};

export const FAVORITE_CONCERT_SUCCESS = 'FAVORITE_CONCERT_SUCCESS';
export const favoriteConcertSuccess = (newFavorite) => {
  return {
    type: FAVORITE_CONCERT_SUCCESS,
    newFavorite
  };
};

export const FAVORITE_CONCERT_ERROR = 'FAVORITE_CONCERT_ERROR';
export const favoriteConcertError = (error) => {
  return {
    type: FAVORITE_CONCERT_ERROR,
    error
  };
};



// ===async post requests=== \\

export const getFavorites = () => (dispatch, getState) => {
  dispatch(favoriteConcertRequest)
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/favorites`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${authToken}`
    }
  }).then(res => {
    return res.json();
  })
    .then(favorites => {
      console.log('get favorites', favorites)
      return dispatch(favoriteConcertSuccess(favorites));
    })
    .catch(err => dispatch(favoriteConcertError(err.message)));
};

export const newFavorite = (id, newFavoriteObj) => (dispatch, getState) => {
  dispatch(favoriteConcertRequest)
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/favorites`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify(newFavoriteObj)
  }).then(res => {
    return res.json();
  })
    .then(favorites => {
      console.log(favorites)
      return dispatch(favoriteConcertSuccess(favorites));
    })
    .catch(err => dispatch(favoriteConcertError(err.message)));
};

// ===async delete requests=== \\

export const deleteFavorite = (id) => (dispatch, getState) => {
  dispatch(favoriteConcertRequest)
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/favorites/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${authToken}`
    }
  }).then(res => {
    return res.json();
  })
    .then(favorites => {
      console.log(favorites)
      return dispatch(favoriteConcertSuccess(favorites));
    })
    .catch(err => dispatch(favoriteConcertError(err.message)));
};