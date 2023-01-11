import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMeetAndGreet } from '../../meetAndGreets';
import { getAnimal, fetchAnimal } from '../../animals';
import MeetAndGreetEditForm from './MeetAndGreetEditForm';
import { useState } from 'react';

const MeetAndGreetIndexItem = ({ meetAndGreet }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const animal = useSelector(getAnimal(meetAndGreet.animalId));
  const [edit, setEdit] = useState(false);
  
  const dateConvert = (date) => {
    let splitDate = date.split("-");
    return splitDate[1] + "-" + splitDate[2] + "-" + splitDate[0];
  }

  const timeConvert = (startTime) => {
    let splitTime = startTime.split(":");
    if (splitTime[0] < 12) return startTime + " AM";
    if (splitTime[0] > 12) return splitTime[0]-12 + ":" + splitTime[1] + " PM";
    return startTime + " PM";
  }

  useEffect(() => {
    dispatch(fetchAnimal(meetAndGreet.animalId));
  }, [meetAndGreet.animalId, dispatch])
  
  return (
    <div className='meet-and-greet'>
      {!edit && (
      <div className='meet-and-greet-inner-container'>
        <div className='meet-and-greet-top'>
          <div className='meet-and-greet-top-image-container'>
            {/* {animal && (<img src={animal.photoUrl} alt="" />)} */}
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
          <button onClick={()=>setEdit(true)}>Edit</button>
          <button onClick={()=>dispatch(deleteMeetAndGreet(sessionUser, meetAndGreet.id))}>Delete</button>
        </div>
      </div>
      )}
      {edit && (
      <div className='MnG-edit-form-container'>
        <MeetAndGreetEditForm meetAndGreetId={meetAndGreet.id} setEdit={setEdit} />
      </div>
      )}
    </div>
  )
}

export default MeetAndGreetIndexItem;