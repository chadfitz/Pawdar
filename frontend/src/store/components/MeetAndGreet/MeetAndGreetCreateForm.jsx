import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createMeetAndGreet } from '../../meetAndGreets';
import './MnGCreateForm.css';

const MeetAndGreetCreateForm = () => {
  const dispatch = useDispatch();
  const {animalId} = useParams();

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const [showForm, setShowForm] = useState(true);
  const [startTime, setStartTime] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let meetAndGreet = {animalId, startTime, date};
    dispatch(createMeetAndGreet(meetAndGreet));
    setShowForm(false);
  }

  const dateFormat = (dateObj) => {
    let month = dateObj.getMonth() + 1;
    let year = dateObj.getFullYear();
    let date = dateObj.getDate();
    if (date < 10) {
        date = "0" + date;
      }
      if (month < 10) {
        month = "0" + month;
      }
    return (`${year}-${month}-${date}`)
  }

  return(
    <>
      {showForm && (
      <form onSubmit={handleSubmit} className='meet-and-greet-form'>
        <h1 className='form-header'>Meet & Greet</h1>
        <label className='time-container'>Start Time between <br/> 9am and 5pm
          <input type="time" min="09:00" max="17:00" step="900" value={startTime} onChange={(e)=>setStartTime(e.target.value)} required />
          <span className="validity"></span>
        </label>
        <label>Date starting tomorrow
          <input type="date" min={dateFormat(tomorrow)} value={date} onChange={e=>setDate(e.target.value)} required />
          <span className="validity"></span>
        </label>
        <button className='meet-and-greet-form-button'>SCHEDULE</button>
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