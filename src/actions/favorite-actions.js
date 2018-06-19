// ===post favorite actions=== \\

export const FAVORITE_CONCERT_REQUEST = 'FAVORITE_CONCERT_REQUEST';
export const favoriteRequest = () => {
  return {
    type: FAVORITE_CONCERT_REQUEST
  };
};

export const FAVORITE_CONCERT_SUCCESS = 'FAVORITE_CONCERT_SUCCESS';
export const favoriteSuccess = (newFavorite) => {
  return {
    type: FAVORITE_CONCERT_SUCCESS,
    newFavorite
  };
};

export const FAVORITE_CONCERT_ERROR = 'FAVORITE_CONCERT_ERROR';
export const favoriteError = (error) => {
  return {
    type: FAVORITE_CONCERT_ERROR,
    error
  };
};

// ===delete favorite actions=== \\

export const DELETE_FAVORITE_CONCERT_REQUEST = 'DELETE_FAVORITE_CONCERT_REQUEST';
export const deleteFavoriteRequest = () => {
  return {
    type: DELETE_FAVORITE_CONCERT_REQUEST
  };
};

export const DELETE_FAVORITE_CONCERT_SUCCESS = 'DELETE_FAVORITE_CONCERT_SUCCESS';
export const deleteFavoriteSuccess = (favorite) => {
  return {
    type: DELETE_FAVORITE_CONCERT_SUCCESS,
    favorite
  };
};

export const DELETE_FAVORITE_CONCERT_ERROR = 'DELETE_FAVORITE_CONCERT_ERROR';
export const deleteFavoriteError = (error) => {
  return {
    type: DELETE_FAVORITE_CONCERT_ERROR,
    error
  };
};

// ===async post requests=== \\

export const newFavorite = (id) => dispatch => {
  dispatch(favoriteRequest)
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
      return dispatch(favoriteSuccess(favorite));
    })
    .catch(err => dispatch(favoriteError(err.message)));
};

// ===async delete requests=== \\

export const deleteFavorite = (id) => dispatch => {
  dispatch(DeleteFavoriteRequest)
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
      return dispatch(deleteFavoriteSuccess(favorite));
    })
    .catch(err => dispatch(deleteFavoriteError(err.message)));
};