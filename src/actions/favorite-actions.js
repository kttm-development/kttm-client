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

// ===delete favorite actions=== \\

export const DELETE_FAVORITE_CONCERT_REQUEST = 'DELETE_FAVORITE_CONCERT_REQUEST';
export const deleteFavoriteConcertRequest = () => {
  return {
    type: DELETE_FAVORITE_CONCERT_REQUEST
  };
};

export const DELETE_FAVORITE_CONCERT_SUCCESS = 'DELETE_FAVORITE_CONCERT_SUCCESS';
export const deleteFavoriteConcertSuccess = (favorite) => {
  return {
    type: DELETE_FAVORITE_CONCERT_SUCCESS,
    favorite
  };
};

export const DELETE_FAVORITE_CONCERT_ERROR = 'DELETE_FAVORITE_CONCERT_ERROR';
export const deleteFavoriteConcertError = (error) => {
  return {
    type: DELETE_FAVORITE_CONCERT_ERROR,
    error
  };
};

// ===async post requests=== \\

export const newFavorite = (id) => dispatch => {
  dispatch(favoriteConcertRequest)
  return fetch(`${API_BASE_URL}/favorites/${id}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    }
  }).then(res => {
    return res.json();
  })
    .then(favorite => {
      console.log(favorite)
      return dispatch(favoriteConcertSuccess(favorite));
    })
    .catch(err => dispatch(favoriteConcertError(err.message)));
};

// ===async delete requests=== \\

export const deleteFavorite = (id) => dispatch => {
  dispatch(DeleteFavoriteConcertRequest)
  return fetch(`${API_BASE_URL}/favorites/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
    }
  }).then(res => {
    return res.json();
  })
    .then(favorite => {
      console.log(favorite)
      return dispatch(deleteFavoriteConcertSuccess(favorite));
    })
    .catch(err => dispatch(deleteFavoriteConcertError(err.message)));
};