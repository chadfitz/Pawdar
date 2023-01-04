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

// export const removeAnimal = (animalId) => ({
//   type: REMOVE_ANIMAL,
//   animalId
// })

export const getAnimals = (state) => {
  return state?.animals ? Object.values(state.animals) : [];
}

export const getAnimal = (animalId) => (state) => {
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
  const res = await fetch(`/api/animals/${animalId}`);
  if (res.ok) {
    const animal = await res.json();
    dispatch(receiveAnimal(animal));
  }
}

// export const createAnimal = (animal) => async(dispatch) => {
//   const res = await fetch(`/api/animals`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//     },
//     body: JSON.stringify(post)
//   });
//   if (res.ok){
//     const newAnimal = await res.json();
//     dispatch(receiveAnimal(newAnimal));
//   }
// }

// export const updateAnimal = (animal) => async (dispatch) => {
//   const res = await fetch(`/api/animals/${animal.id}`, {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//     },
//     body: JSON.stringify(animal)
//   });
//   if (res.ok){
//     const newAnimal = await res.json();
//     dispatch(receiveAnimal(newAnimal));
//   }
// }

// export const deleteAnimal = (animalId) => async (dispatch) => {
//   const res = await fetch(`/api/animals/${animalId}`, {
//     method: "DELETE"
//   });
//   if (res.ok) {
//     dispatch(removeAnimal(animalId));
//   }
// };

// ANIMALS REDUCER
const animalsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = {...state};

  switch(action.type){
    case RECEIVE_ANIMALS:
      return {...newState, ...action.animals};
    case RECEIVE_ANIMAL:
      return {...newState, [action.animal.id]: action.animal};
    // case REMOVE_POST:
    //   delete newState[action.postId];
    //   return newState;
    default:
      return state;
  }
}

export default animalsReducer;