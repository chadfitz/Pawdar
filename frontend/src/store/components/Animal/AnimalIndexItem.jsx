import React from 'react';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

const AnimalIndexItem = ({ animal }) => {
  // const dispatch = useDispatch();

  return (
    <li>
      <Link to={`/organizations/${animal.organization_id}/animals/${animal.id}`}>{animal.name}</Link>
    </li>
  )
}

export default AnimalIndexItem;