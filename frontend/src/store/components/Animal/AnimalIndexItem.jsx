import React from 'react';
import { Link } from 'react-router-dom';
import './AnimalIndexItem.css';

const AnimalIndexItem = ({ animal }) => {

  return (
    <Link to={`/animals/${animal.id}`} className="animal-link">
      <div className='animal-container'>
        <li>
          {/* <img src={animal.photoUrl} alt="" /> */}
          <div className='animal-name'>{animal.name}</div>
        </li>
      </div>
    </Link>
  )
}

export default AnimalIndexItem;