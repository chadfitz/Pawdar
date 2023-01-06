import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMeetAndGreet } from '../../meetAndGreets';
import { getAnimal, fetchAnimal } from '../../animals';

const MeetAndGreetIndexItem = ({ meetAndGreet }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);

  const animal = useSelector(getAnimal(meetAndGreet.animalId));
  console.log(meetAndGreet.animalId); // returns the id
  console.log(animal); // returns undefined?

  useEffect(() => {
    dispatch(fetchAnimal);
  }, [dispatch])

  return (
    <div className='meet-and-greet'>
      {/* <h1>Meeting with {animal.name}</h1> */}
      <Link to={`/user/profile/meetAndGreets/${meetAndGreet.id}/edit`}>Edit</Link>
      <button onClick={()=>dispatch(deleteMeetAndGreet(sessionUser, meetAndGreet.id))}>Delete</button>
    </div>
  )
}

export default MeetAndGreetIndexItem;