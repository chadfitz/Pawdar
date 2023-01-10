import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMeetAndGreet, fetchMeetAndGreet, updateMeetAndGreet } from '../../meetAndGreets';
import './MnGEdit.css';


const MeetAndGreetEditForm = ({ meetAndGreetId, setEdit }) => {
  const dispatch = useDispatch();
  let meetAndGreet = useSelector(getMeetAndGreet(meetAndGreetId));
  const sessionUser = useSelector(state => state.session.user);

  const [startTime, setStartTime] = useState(meetAndGreet.startTime);
  const [date, setDate] = useState(meetAndGreet.date);

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

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

  useEffect(()=>{
    if (meetAndGreetId) dispatch(fetchMeetAndGreet(sessionUser, meetAndGreetId));
  }, [meetAndGreetId, sessionUser, dispatch])


  const handleSubmit = (e) => {
    let newMeet = {startTime, date, id: meetAndGreetId}
    e.preventDefault();
    dispatch(updateMeetAndGreet(newMeet));
    setEdit(false);
  }

  return(
    <form className='MnG-edit-form' onSubmit={handleSubmit}>
      <h1 className='MnG-edit-header'>Edit</h1>
      <label>Start Time between 9am and 5pm
        <input className='MnG-edit-time-input' type="time" min="09:00" max="17:00" step="900" value={startTime} onChange={(e)=>setStartTime(e.target.value)} required />
        <span className="validity"></span>
      </label>
      <label>Date starting tomorrow
        <input className='MnG-edit-date-input' type="date" min={dateFormat(tomorrow)} value={date} onChange={e=>setDate(e.target.value)} required />
        <span className="validity"></span>
      </label>
      <button className='MnG-edit-button'>Finish</button>
    </form>
  )
}

export default MeetAndGreetEditForm;