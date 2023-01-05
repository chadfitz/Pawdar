import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAnimal, fetchAnimal } from '../../animals';
import './AnimalShow.css';

const AnimalShow = () => {
  const {animalId} = useParams();
  const dispatch = useDispatch();
  const animal = useSelector(getAnimal(animalId));

  useEffect(()=>{
    dispatch(fetchAnimal(animalId));
  }, [animalId, dispatch])

  if (!animal){
    return null;
  }

  return(
    <div className='animal-show-window'>
      <div className='animal-image-container'>
        <img src={animal.photoUrl} alt="" />
      </div>
      <div className='animal-show-container'>
        <div className='animal-show-left'>
          <div className='animal-show-top-section'>
            <h1>{animal.name}</h1>
            <p>{animal.breed}</p>
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
            <p>{animal.coat}</p>
            <p>{animal.status}</p>
            <p>{animal.environment}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimalShow;