export const FAVORITE_CONCERT_SUCCESS = 'FAVORITE_CONCERT_SUCCESS';
export const favorite = (newFavorite) => {
  return {
    type: FAVORITE_CONCERT_SUCCESS,
    newFavorite
  };
};