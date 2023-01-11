import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFavorites, getFavorites } from '../../favorites';
import FavoriteIndexItem from './FavoriteIndexItem';
import './FavIndex.css';

const FavoriteIndex = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(getFavorites);
  const sessionUser = useSelector(state => state.session.user);
  console.log(favorites)

  useEffect(()=>{
    dispatch(fetchFavorites(sessionUser));
  }, [sessionUser, dispatch])

  return (
    <div className='favorites-container'>
      {favorites.map(favorite => <FavoriteIndexItem key={favorite.id} favorite={favorite} />)}
    </div>
  )
}

export default FavoriteIndex