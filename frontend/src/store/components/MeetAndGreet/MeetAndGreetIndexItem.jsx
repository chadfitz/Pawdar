import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMeetAndGreet } from '../../meetAndGreets';
import { getAnimal, fetchAnimal } from '../../animals';
import MeetAndGreetEditForm from './MeetAndGreetEditForm';

const MeetAndGreetIndexItem = ({ meetAndGreet }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const animal = useSelector(getAnimal(meetAndGreet.animalId));
  
  const [showEditForm, setShowEditForm] = useState(false);

  const dateConvert = (date) => {
    let splitDate = date.split("-");
    return splitDate[1] + "-" + splitDate[2] + "-" + splitDate[0];
  }

  const timeConvert = (startTime) => {
    let splitTime = startTime.split(":");
    if (splitTime[0] < 12) return startTime + " AM";
    return splitTime[0]-12 + ":" + splitTime[1] + " PM";
  }

  useEffect(() => {
    dispatch(fetchAnimal(meetAndGreet.animalId));
  }, [meetAndGreet.animalId, dispatch])


  const editMeetAndGreet = (e) => {
    if (showEditForm) return;
    setShowEditForm(true);
  }
  
  return (
    <div className='meet-and-greet'>
      {!showEditForm && (<div className='meet-and-greet-inner-container'>
        <div className='meet-and-greet-top'>
          <div className='meet-and-greet-top-image'>
            {animal && (<img src={animal.photoUrl} alt="" />)}
          </div>
          {animal && (
          <h1 className='meeting-header'>Meeting with<br/>
            {animal.name}
          </h1>
          )}
          <div className='meeting-details'>
            <p>Date: {dateConvert(meetAndGreet.date)}</p>
            <p>Time: {timeConvert(meetAndGreet.startTime)}</p>
          </div>
        </div>
        <div className='meet-and-greet-bottom'>
          <button onClick={editMeetAndGreet}>Edit</button>
          <button onClick={()=>dispatch(deleteMeetAndGreet(sessionUser, meetAndGreet.id))}>Delete</button>
        </div>
      </div>)}
      {showEditForm && (
        <MeetAndGreetEditForm meetAndGreetId={meetAndGreet.id} />
      )}
    </div>
  )
}

export default MeetAndGreetIndexItem;