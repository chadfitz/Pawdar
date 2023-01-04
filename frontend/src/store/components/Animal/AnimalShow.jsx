import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAnimal, fetchAnimal } from '../../animals';

const AnimalShow = () => {
  const {animalId} = useParams();
  const dispatch = useDispatch();
  const animal = useSelector(getAnimal(animalId));

  useEffect(()=>{
    dispatch(fetchAnimal(animalId));
  }, [animalId])

  if (!animal){
    return null;
  }

  return(
    <>
      <h2>{animal.name}</h2>
      <p>{animal.breed}</p>
      <p>{animal.size}</p>
      <p>{animal.gender}</p>
      <p>{animal.age}</p>
      <p>{animal.color}</p>
      <p>{animal.coat}</p>
      <p>{animal.status}</p>
      <p>{animal.environment}</p>
      <Link to="/animals">Animal Index</Link>
    </>
  )
}

export default AnimalShow;