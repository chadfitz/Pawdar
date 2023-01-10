import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchAnimal, getAnimal } from '../../animals';
import { deleteFavorite } from '../../favorites';

const FavoriteIndexItem = ({ favorite }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const animal = useSelector(getAnimal(favorite.animalId));

  useEffect(()=>{
    dispatch(fetchAnimal(favorite.animalId));
  }, [favorite.animalId, dispatch])

  return (
    <div className='favorite-content'>
      <div className='favorite-top'>
        {/* {animal && (<img src={animal.photoUrl} alt="" />)} */}
        {animal && (
          <h2>{animal.name}</h2>
        )}
      </div>
      <div className='favorite-bottom'>
        <button onClick={()=>dispatch(deleteFavorite(sessionUser, favorite.id))}>DELETE</button>
      </div>
    </div>
  )
}

export default FavoriteIndexItem