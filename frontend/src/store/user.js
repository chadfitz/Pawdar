// ACTION CONSTANTS:
export const RECEIVE_USERS = 'users/RECEIVE_USERS';
export const RECEIVE_USER = 'users/RECEIVE_USER';

// ACTION CREATORS:
export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
});

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
})

export const getUsers = (state) => {
  return state?.users ? Object.values(state.users) : [];
}

export const getUser = (userId) => (state) => {
  return state?.users ? state.users[userId] : null;
}

// THUNK ACTION CREATORS:
export const fetchUsers = () => async (dispatch) => {
  const res = await fetch('/api/users');
  if (res.ok){
    const users = await res.json();
    dispatch(receiveUsers(users));
  }
}

export const fetchUser = (userId) => async (dispatch) => {
  const res = await fetch(`/api/users/${userId}`);
  if (res.ok) {
    const user = await res.json();
    dispatch(receiveUser(user));
  }
}

// USERS REDUCER
const usersReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = {...state};
  switch(action.type){
    case RECEIVE_USERS:
      return {...newState, ...action.users};
    case RECEIVE_USER:
      return {...newState, [action.user.user.id]: action.user.user};
    default:
      return state;
  }
}

export default usersReducer;