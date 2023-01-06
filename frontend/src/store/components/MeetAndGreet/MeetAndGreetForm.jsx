import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMeetAndGreet, fetchMeetAndGreet, createMeetAndGreet, updateMeetAndGreet } from '../../meetAndGreets';
import './Form.css';

const MeetAndGreetForm = () => {
  const dispatch = useDispatch();
  const {meetAndGreetId} = useParams();
  const formType = meetAndGreetId ? "Update Meet & Greet!" : "Create Meet & Greet!";
  let meetAndGreet = useSelector(getMeetAndGreet(meetAndGreetId));
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  if (formType === "Create Meet & Greet!"){
    meetAndGreet = {
      startTime: "",
      date: ""
    }
  }

  const [startTime, setStartTime] = useState(meetAndGreet.startTime);
  const [date, setDate] = useState(meetAndGreet.date);

  useEffect(()=>{
    if (meetAndGreetId) dispatch(fetchMeetAndGreet(meetAndGreetId));
  }, [meetAndGreetId, dispatch])

  const handleSubmit = (e) => {
    e.preventDefault();
    meetAndGreet = {...meetAndGreet, startTime, date}
    if (formType === "Create Meet & Greet!"){
      dispatch(createMeetAndGreet(meetAndGreet));
    } else {
      dispatch(updateMeetAndGreet(meetAndGreet));
    }
  }

  return(
    <form onSubmit={handleSubmit} className='meet-and-greet-form'>
      <h1 className='form-header'>{formType}</h1>
      <label>Start Time between 9am and 5pm
        <input type="time" min="9:00" max="17:00" value={startTime} onChange={(e)=>setStartTime(e.target.value)} required />
      </label>
      <label>Date starting tomorrow
        <input type="date" min={tomorrow} value={date} onChange={e=>setDate(e.target.value)} required />
      </label>
      <button className='meet-and-greet-form-button'>{formType.toUpperCase()}</button>
    </form>
  )
}

export default MeetAndGreetForm;