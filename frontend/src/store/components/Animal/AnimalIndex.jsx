import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AnimalIndexItem from './AnimalIndexItem';
import { getAnimals, fetchAnimals } from '../../animals';

const AnimalIndex = () => {
  const dispatch = useDispatch();
  const animals = useSelector(getAnimals);
    // useSelector takes in a callback and gives that callback the state as an argument

  useEffect(()=>{
    dispatch(fetchAnimals());
  }, [])

  return (
    <>
      <ul>
        {animals.map(animal => <AnimalIndexItem key={animal.id} animal={animal} />)}
      </ul>
    </>
  )
}

export default AnimalIndex;