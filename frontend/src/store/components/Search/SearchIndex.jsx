import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useParams } from 'react-router-dom';
import { getSearchAnimals, fetchSearchAnimals } from '../../animals';
import AnimalIndexItem from '../Animal/AnimalIndexItem';

const SearchIndex = () => {
  const query = useParams();
  const dispatch = useDispatch();
  const searchAnimals = useSelector(getSearchAnimals(query));

  useEffect(()=>{
    dispatch(fetchSearchAnimals(query))
  }, [dispatch])

  return (
    <div>SearchIndex
        {searchAnimals.map(animal => <AnimalIndexItem key={animal.id} animal={animal} />)}
    </div>
  )
}

export default SearchIndex