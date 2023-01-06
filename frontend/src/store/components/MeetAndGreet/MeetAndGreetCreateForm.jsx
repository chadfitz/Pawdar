import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createMeetAndGreet } from '../../meetAndGreets';
import './CreateForm.css';

const MeetAndGreetCreateForm = () => {
  const dispatch = useDispatch();
  const {animalId} = useParams();

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const [startTime, setStartTime] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let meetAndGreet = {animalId, startTime, date};
    dispatch(createMeetAndGreet(meetAndGreet));
  }

  return(
    <form onSubmit={handleSubmit} className='meet-and-greet-form'>
      <h1 className='form-header'>Meet & Greet</h1>
      <label>Start Time between 9am and 5pm
        <input type="time" min="9:00" max="17:00" value={startTime} onChange={(e)=>setStartTime(e.target.value)} required />
      </label>
      <label>Date starting tomorrow
        <input type="date" min={tomorrow} value={date} onChange={e=>setDate(e.target.value)} required />
      </label>
      <button className='meet-and-greet-form-button'>SCHEDULE</button>
    </form>
  )
}

export default MeetAndGreetCreateForm;