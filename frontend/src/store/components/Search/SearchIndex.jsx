import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useParams } from 'react-router-dom';
import { getAnimals } from '../../animals';
import AnimalIndexItem from '../Animal/AnimalIndexItem';
import './SearchIndex.css';

const SearchIndex = () => {
  const searchAnimals = useSelector(getAnimals);

  return (
    <ul className='search-index-list'>
        {searchAnimals.map(animal => <AnimalIndexItem key={animal.id} animal={animal} />)}
    </ul>
  )
}

export default SearchIndex