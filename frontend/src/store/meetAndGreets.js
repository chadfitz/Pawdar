import csrfFetch from "./csrf";

export const RECEIVE_MEET_AND_GREETS = 'meetAndGreets/RECEIVE_MEET_AND_GREETS';
export const RECEIVE_MEET_AND_GREET = 'meetAndGreets/RECEIVE_MEET_AND_GREET';
export const REMOVE_MEET_AND_GREET = 'meetAndGreets/REMOVE_MEET_AND_GREET';

// ACTION CREATORS
export const receiveMeetAndGreets = (meetAndGreets) => ({
  type: RECEIVE_MEET_AND_GREETS,
  meetAndGreets
});

export const receiveMeetAndGreet = (meetAndGreet) => ({
  type: RECEIVE_MEET_AND_GREET,
  meetAndGreet
})

export const removeMeetAndGreet = (meetAndGreetId) => ({
  type: REMOVE_MEET_AND_GREET,
  meetAndGreetId
})

export const getMeetAndGreets = (state) => {
  return state?.meetAndGreets ? Object.values(state.meetAndGreets) : [];
}

export const getMeetAndGreet = (meetAndGreetId) => (state) => {
  return state?.meetAndGreets ? state.meetAndGreets[meetAndGreetId] : null;
}

// THUNK ACTION CREATORS
export const fetchMeetAndGreets = (user) => async (dispatch) => {
  const res = await csrfFetch(`/api/users/${user.id}/meet_and_greets`);
  if (res.ok){
    const meetAndGreets = await res.json();
    dispatch(receiveMeetAndGreets(meetAndGreets));
  }
}

export const fetchMeetAndGreet = (user, meetAndGreetId) => async (dispatch) => {
  const res = await fetch(`/api/users/${user.id}/meet_and_greets/${meetAndGreetId}`);
  if (res.ok) {
    const meetAndGreet = await res.json();
    dispatch(receiveMeetAndGreet(meetAndGreet));
  }
}

export const createMeetAndGreet = (meetAndGreet) => async(dispatch) => {
  const res = await csrfFetch(`/api/meet_and_greets`, {
    method: 'POST',
    body: JSON.stringify({meetAndGreet:meetAndGreet})
  });
  if (res.ok){
    const newMeetAndGreet = await res.json();
    dispatch(receiveMeetAndGreet(newMeetAndGreet));
  }
}

export const updateMeetAndGreet = (meetAndGreet) => async (dispatch) => {
  const res = await csrfFetch(`/api/meet_and_greets/${meetAndGreet.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({ meetAndGreet })
  });
  if (res.ok){
    const newMeetAndGreet = await res.json();
    dispatch(receiveMeetAndGreet(newMeetAndGreet));
  }
}

export const deleteMeetAndGreet = (user, meetAndGreetId) => async (dispatch) => {
  const res = await csrfFetch(`/api/users/${user.id}/meet_and_greets/${meetAndGreetId}`, {
    method: "DELETE"
  });
  if (res.ok) {
    dispatch(removeMeetAndGreet(meetAndGreetId));
  }
};

// REDUCER
const meetAndGreetsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = {...state};

  switch(action.type){
    case RECEIVE_MEET_AND_GREETS:
      return {...newState, ...action.meetAndGreets};
    case RECEIVE_MEET_AND_GREET:
      return {...newState, [action.meetAndGreet.id]: action.meetAndGreet};
    case REMOVE_MEET_AND_GREET:
      delete newState[action.meetAndGreetId];
      return newState;
    default:
      return state;
  }
}

export default meetAndGreetsReducer;