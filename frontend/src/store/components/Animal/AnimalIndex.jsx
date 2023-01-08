import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AnimalIndexItem from './AnimalIndexItem';
import { getAnimals, fetchAnimals } from '../../animals';
import './AnimalIndex.css';

const AnimalIndex = () => {
  const dispatch = useDispatch();
  const animals = useSelector(getAnimals);

  useEffect(()=>{
    dispatch(fetchAnimals());
  }, [dispatch])

  return (
    <div className='animal-index-container'>
      <h1 className='animal-index-header'>Future Pets</h1>
      <ul className='animal-index-list'>
        {animals.map(animal => <AnimalIndexItem key={animal.id} animal={animal} />)}
      </ul>
    </div>
  )
}

export default AnimalIndex;