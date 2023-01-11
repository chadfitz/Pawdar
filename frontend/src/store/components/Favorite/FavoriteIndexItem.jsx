import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchAnimal, getAnimal } from '../../animals';
import { deleteFavorite } from '../../favorites';
import { NavLink } from 'react-router-dom';

const FavoriteIndexItem = ({ favorite }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const animal = useSelector(getAnimal(favorite.animalId));

  useEffect(()=>{
    dispatch(fetchAnimal(favorite.animalId));
  }, [favorite.animalId, dispatch])

  return (
    <div className='favorite'>
      {animal && (
        <NavLink to={`/animals/${animal.id}`} className='favorite-top'>
          <div className='favorite-top-image-container'>
            {/* {animal && (<img className='favorite-image' src={animal.photoUrl} alt="" />)} */}
          </div>
          {animal && (
            <h2 className='favorite-name'>{animal.name}</h2>
          )}
        </NavLink>
      )}
      <div className='favorite-bottom'>
        <button onClick={()=>dispatch(deleteFavorite(sessionUser, favorite.id))}>DELETE</button>
      </div>
    </div>
  )
}

export default FavoriteIndexItem