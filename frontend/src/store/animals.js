// ACTION CONSTANTS:
export const RECEIVE_ANIMALS = 'animals/RECEIVE_ANIMALS';
export const RECEIVE_ANIMAL = 'animals/RECEIVE_ANIMAL';
export const CLEAR_ANIMALS = 'animals/CLEAR_ANIMALS';

// ACTION CREATORS:
export const receiveAnimals = (animals) => {
  return {type: RECEIVE_ANIMALS,
  animals}
};

export const receiveAnimal = (animal) => ({
  type: RECEIVE_ANIMAL,
  animal
})

export const clearAnimals = () => ({
  type: CLEAR_ANIMALS
})

export const getAnimals = (state) => {
  return state?.animals ? Object.values(state.animals) : [];
}

export const getAnimal = (animalId) => (state) => {
  return state?.animals ? state.animals[animalId] : null;
}

// export const getSearchAnimals = (query) => (dispatch) => {
//   return fetchSearchAnimals(query)
//     .then(result => dispatch(receiveAnimals(result)))
// }
// export const getSearchAnimals = (query) => (state) => {
//   return state?.animals ? Object.values(state.animals) : [];
// }

// THUNK ACTION CREATORS:
export const fetchAnimals = () => async (dispatch) => {
  const res = await fetch('/api/animals');
  if (res.ok){
    const animals = await res.json();
    dispatch(receiveAnimals(animals));
  }
}

export const fetchAnimal = (animalId) => async (dispatch) => {
  const res = await fetch(`/api/animals/${animalId}`);
  if (res.ok) {
    const animal = await res.json();
    dispatch(receiveAnimal(animal));
  }
}

// SEARCH THUNK ACTION CREATOR:
export const fetchSearchAnimals = (query) => async (dispatch) => {
  const res = await fetch(`/api/animals/search/${query}`);
  if (res.ok){
    const searchRes = await res.json();
    dispatch(receiveAnimals(searchRes));
  } else {
    dispatch(clearAnimals());
  }
}

// ANIMALS REDUCER
const animalsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = {...state};
  switch(action.type){
    case RECEIVE_ANIMALS:
      return {...action.animals};
    case RECEIVE_ANIMAL:
      return {...newState, [action.animal.animal.id]: action.animal.animal};
    case CLEAR_ANIMALS:
      return {}
    default:
      return state;
  }
}

export default animalsReducer;