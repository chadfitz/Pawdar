import csrfFetch from "./csrf";

export const RECEIVE_FAVORITES = 'favorites/RECEIVE_FAVORITES';
export const RECEIVE_FAVORITE = 'favorites/RECEIVE_FAVORITE';
export const REMOVE_FAVORITE = 'favorites/REMOVE_FAVORITE';

// ACTION CREATORS
export const receiveFavorites = (favorites) => ({
  type: RECEIVE_FAVORITES,
  favorites
});

export const receiveFavorite = (favorite) => ({
  type: RECEIVE_FAVORITE,
  favorite
})

export const removeFavorite = (favoriteId) => ({
  type: REMOVE_FAVORITE,
  favoriteId
})

export const getFavorites = (state) => {
  return state?.favorites ? Object.values(state.favorites) : [];
}

export const getFavorite = (favoriteId) => (state) => {
  return state?.favorites ? state.favorites[favoriteId] : null;
}

// THUNK ACTION CREATORS
export const fetchFavorites = (user) => async (dispatch) => {
  const res = await csrfFetch(`/api/users/${user.id}/favorites`);
  if (res.ok){
    const favorites = await res.json();
    dispatch(receiveFavorites(favorites));
  }
}

export const fetchFavorite = (user, favoriteId) => async (dispatch) => {
  const res = await fetch(`/api/users/${user.id}/favorites/${favoriteId}`);
  if (res.ok) {
    const favorite = await res.json();
    dispatch(receiveFavorite(favorite));
  }
}

export const createFavorite = (favorite) => async(dispatch) => {
  const res = await csrfFetch(`/api/favorites`, {
    method: 'POST',
    body: JSON.stringify({favorite:favorite})
  });
  if (res.ok){
    const newFavorite = await res.json();
    dispatch(receiveFavorite(newFavorite));
  }
}

export const deleteFavorite = (user, favoriteId) => async (dispatch) => {
  const res = await csrfFetch(`/api/users/${user.id}/favorites/${favoriteId}`, {
    method: "DELETE"
  });
  if (res.ok) {
    dispatch(removeFavorite(favoriteId));
  }
};

// REDUCER
const favoritesReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = {...state};

  switch(action.type){
    case RECEIVE_FAVORITES:
      return {...newState, ...action.favorites};
    case RECEIVE_FAVORITE:
      return {...newState, [action.favorite.id]: action.favorite};
    case REMOVE_FAVORITE:
      delete newState[action.favoriteId];
      return newState;
    default:
      return state;
  }
}

export default favoritesReducer;