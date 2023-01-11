import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAnimal, fetchAnimal } from '../../animals';
import MeetAndGreetCreateForm from '../MeetAndGreet/MeetAndGreetCreateForm'
import { getOrganization, fetchOrganization } from '../../organizations';
import { BsHeart, BsFillHeartFill } from 'react-icons/bs';
import { createFavorite, deleteFavorite, fetchFavorites, getFavorites } from '../../favorites';
import './AnimalShow.css';

const AnimalShow = () => {
  const {animalId} = useParams();
  const dispatch = useDispatch();
  const animal = useSelector(getAnimal(animalId));
  const organization = useSelector(getOrganization(animal?.organizationId));
  const sessionUser = useSelector(state => state.session.user);
  const favorites = useSelector(getFavorites);
  
  const [favorited, setFavorited] = useState(false);

  const findFavoriteId = () => {
    let favoriteId = null;
    favorites.map(favorite => {
      if (animal && favorite.animalId === animal.id) {
        favoriteId = favorite.id;
      }
    })
    return favoriteId;
  }
  const favoriteId = findFavoriteId();
  
  useEffect(()=>{
    dispatch(fetchAnimal(animalId));
  }, [animalId, dispatch])
  
  useEffect(()=>{
    if (animal) setFavorited(animal.liked)
  }, [animal])
  
  useEffect(()=>{
    if (animal) dispatch(fetchOrganization(animal.organizationId));
  }, [animal, dispatch])

  useEffect(()=>{
    if (sessionUser) dispatch(fetchFavorites(sessionUser));
  }, [dispatch, sessionUser])

  const handleFavorite = () => {
    if (!favoriteId){
      let favorite = {animalId, userId: sessionUser.id}
      dispatch(createFavorite(favorite))
      setFavorited(true);
    } else {
      dispatch(deleteFavorite(sessionUser, favoriteId))
      setFavorited(false);
    }
  }
  
  if (!animal) return null;
  
  return(
    <div className='animal-show-window'>
      <div className='animal-image-container'>
        {/* <img src={animal.photoUrl} alt="" /> */}
      </div>
      <div className='animal-show-container'>
        <div className='animal-show-left'>
          <div className='animal-show-top-section'>
            <div className='animal-show-top-left'>
              <h1>{animal.name}</h1>
              <p>{animal.breed}</p>
            </div>
            <div className='animal-show-top-right'>
              {!favorited && (<BsHeart className='animal-show-heart' onClick={handleFavorite}/>)}
              {favorited && (<BsFillHeartFill className='animal-show-heart-favorite' onClick={handleFavorite}/>)}
            </div>
          </div>
          <div className='animal-show-middle-section'>
            <ul>
              <li>{animal.age}</li>
              <li className='not-first'>{animal.gender}</li>
              <li className='not-first'>{animal.size}</li>
              <li className='not-first'>{animal.color}</li>
            </ul>
          </div>
          <div className='animal-show-bottom-section'>
            <h2>About</h2>
            <h3>COAT LENGTH</h3>
            <p>{animal.coat}</p>
            <h3>STATUS</h3>
            <p>{animal.status}</p>
            <h3>ENVIRONMENT</h3>
            <p>{animal.environment}</p>
          </div>
        </div>
        <div className='animal-show-right'>
          <div className='animal-show-upper-right'>
            <MeetAndGreetCreateForm />
          </div>
          <div className='animal-show-lower-right'>
            {(organization) && (
              <div className='animal-show-org-content'>
                <h1 className='animal-show-org-header'>{animal.name} is a member of:</h1>
                <NavLink exact to={`/organizations/${organization.id}`} className='animal-show-org-name'>{organization.name}</NavLink>
                <p className='animal-show-org-location'>Located at {organization.location}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimalShow;