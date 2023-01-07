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

  const [showForm, setShowForm] = useState(true);
  const [startTime, setStartTime] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    // if (date < tomorrow) flash errors return;
    e.preventDefault();
    let meetAndGreet = {animalId, startTime, date};
    dispatch(createMeetAndGreet(meetAndGreet));
  }

  const renderSuccess = () => {
    setShowForm(false);
  }

  return(
    <>
      {showForm && (
      <form onSubmit={handleSubmit} className='meet-and-greet-form'>
        <h1 className='form-header'>Meet & Greet</h1>
        <label>Start Time between 9am and 5pm
          <input min="09:00" max="17:00" type="time" step="900" value={startTime} onChange={(e)=>setStartTime(e.target.value)} required />
        </label>
        <label>Date starting tomorrow
          <input type="date" min={tomorrow} value={date} onChange={e=>setDate(e.target.value)} required />
        </label>
        <button className='meet-and-greet-form-button' onClick={renderSuccess}>SCHEDULE</button>
      </form>
      )}
      {!showForm && (
        <div className='success-display'>
          <h1>Success!</h1>
        </div>
      )}
    </>
  )
}

export default MeetAndGreetCreateForm;