// ACTION CONSTANTS:
export const RECEIVE_ANIMALS = 'animals/RECEIVE_ANIMALS';
export const RECEIVE_ANIMAL = 'animals/RECEIVE_ANIMAL';
export const REMOVE_ANIMAL = 'animals/REMOVE_ANIMAL';

// ACTION CREATORS:
export const receiveAnimals = (animals) => ({
  type: RECEIVE_ANIMALS,
  animals
});

export const receiveAnimal = (animal) => ({
  type: RECEIVE_ANIMAL,
  animal
})

export const getAnimals = (state) => {
  return state?.animals ? Object.values(state.animals) : [];
}

export const getAnimal = (animalId) => (state) => {
  debugger;
  return state?.animals ? state.animals[animalId] : null;
}

// THUNK ACTION CREATORS:
export const fetchAnimals = () => async (dispatch) => {
  const res = await fetch('/api/animals');
  if (res.ok){
    const animals = await res.json();
    dispatch(receiveAnimals(animals));
  }
}

export const fetchAnimal = (animalId) => async (dispatch) => {
  debugger;
  const res = await fetch(`/api/animals/${animalId}`);
  if (res.ok) {
    const animal = await res.json();
    dispatch(receiveAnimal(animal));
  }
}

// ANIMALS REDUCER
const animalsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = {...state};
  switch(action.type){
    case RECEIVE_ANIMALS:
      return {...newState, ...action.animals};
    case RECEIVE_ANIMAL:
      return {...newState, [action.animal.animal.id]: action.animal.animal};
    default:
      return state;
  }
}

export default animalsReducer;