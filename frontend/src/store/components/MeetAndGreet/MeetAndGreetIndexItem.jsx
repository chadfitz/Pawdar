import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMeetAndGreet } from '../../meetAndGreets';
import { getAnimal, fetchAnimal } from '../../animals';
import MeetAndGreetEditForm from './MeetAndGreetEditForm';

const MeetAndGreetIndexItem = ({ meetAndGreet }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const animal = useSelector(getAnimal(meetAndGreet.animalId));

  useEffect(() => {
    dispatch(fetchAnimal(meetAndGreet.animalId));
  }, [meetAndGreet.animalId, dispatch])

  const [showEditForm, setShowEditForm] = useState(false);

  const editMeetAndGreet = (e) => {
    if (showEditForm) return;
    setShowEditForm(true);
  }
  
  return (
    <div className='meet-and-greet'>
      {animal && (<h1>Meeting with {animal.name}</h1>)}
      <p>{meetAndGreet.date}</p>
      <p>{meetAndGreet.startTime}</p>
      {/* <NavLink to={`/user/meetAndGreets/${meetAndGreet.id}/edit`}>Edit</NavLink> */}
      <button onClick={editMeetAndGreet}>Edit</button>
      {showEditForm && (
        <MeetAndGreetEditForm meetAndGreetId={meetAndGreet.id} />
      )}
      <button onClick={()=>dispatch(deleteMeetAndGreet(sessionUser, meetAndGreet.id))}>Delete</button>
    </div>
  )
}

export default MeetAndGreetIndexItem;