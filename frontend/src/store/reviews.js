import csrfFetch from "./csrf";

export const RECEIVE_REVIEWS = 'reviews/RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'reviews/RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'reviews/REMOVE_REVIEW';

// ACTION CREATORS
export const receiveReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review
})

export const removeReview = (reviewId) => ({
  type: REMOVE_REVIEW,
  reviewId
})

export const getReviews = (state) => {
  return state?.reviews ? Object.values(state.reviews) : [];
}

export const getReview = (reviewId) => (state) => {
  return state?.reviews ? state.reviews[reviewId] : null;
}

// THUNK ACTION CREATORS
export const fetchReviews = (organization) => async (dispatch) => {
  const res = await csrfFetch(`/api/organizations/${organization.id}/reviews`);
  if (res.ok){
    const reviews = await res.json();
    dispatch(receiveReviews(reviews));
  }
}

export const fetchReview = (organization, reviewId) => async (dispatch) => {
  const res = await fetch(`/api/organizations/${organization.id}/reviews/${reviewId}`);
  if (res.ok) {
    const review = await res.json();
    dispatch(receiveReview(review));
  }
}

export const createReview = (review) => async(dispatch) => {
  const res = await csrfFetch(`/api/reviews`, {
    method: 'POST',
    body: JSON.stringify({review:review})
  });
  if (res.ok){
    const newReview = await res.json();
    dispatch(receiveReview(newReview));
  }
}

export const updateReview = (review) => async (dispatch) => {
  const res = await csrfFetch(`/api/reviews/${review.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({ review })
  });
  if (res.ok){
    const newReview = await res.json();
    dispatch(receiveReview(newReview));
  }
}

export const deleteReview = (user, reviewId) => async (dispatch) => {
  const res = await csrfFetch(`/api/users/${user.id}/reviews/${reviewId}`, {
    method: "DELETE"
  });
  if (res.ok) {
    dispatch(removeReview(reviewId));
  }
};

// REDUCER
const reviewsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = {...state};

  switch(action.type){
    case RECEIVE_REVIEWS:
      return {...newState, ...action.reviews};
      // return {...action.reviews}
    case RECEIVE_REVIEW:
      return {...newState, [action.review.id]: action.review};
    case REMOVE_REVIEW:
      delete newState[action.reviewId];
      return newState;
    default:
      return state;
  }
}

export default reviewsReducer;