import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useParams } from 'react-router-dom';
import { getAnimals, fetchSearchAnimals } from '../../animals';
import AnimalIndexItem from '../Animal/AnimalIndexItem';
import './SearchIndex.css';

const SearchIndex = () => {
  const searchAnimals = useSelector(getAnimals);
  const dispatch = useDispatch();

  const { query } = useParams();

  const [searchSuccess, setSearchSuccess] = useState(false);

  useEffect(()=>{
    if (searchAnimals.length > 0) setSearchSuccess(true);
  }, [searchAnimals.length])
  
  useEffect(()=>{
    dispatch(fetchSearchAnimals(query));
  },[dispatch, query])

  useEffect(()=>{
    window.scrollTo(0, 0)
  },[])

  return (
    <ul className='search-index-list'>
        {searchSuccess && searchAnimals.map(animal => <AnimalIndexItem key={animal.id} animal={animal} />)}
        {!searchSuccess && (
          <div className='error-page'>
            <p>Sorry, we did not find any results for your search</p>
            <NavLink to="/" className='error-page-link'>Back to Home</NavLink>
          </div>
        )}
    </ul>
  )
}

export default SearchIndex