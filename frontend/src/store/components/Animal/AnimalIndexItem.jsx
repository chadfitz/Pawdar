import React from 'react';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import './AnimalIndex.css';

const AnimalIndexItem = ({ animal }) => {
  // const dispatch = useDispatch();

  return (
    <Link to={`/animals/${animal.id}`} className="animal-link">
      <div className='animal-container'>
        <li>
          <img src={animal.photoUrl} alt="" />
          <div className='animal-name'>{animal.name}</div>
        </li>
      </div>
    </Link>
  )
}

export default AnimalIndexItem;