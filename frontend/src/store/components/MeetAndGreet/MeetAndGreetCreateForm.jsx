import { useCallback, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createMeetAndGreet } from '../../meetAndGreets';
import './MnGCreateForm.css';
import { useEffect } from 'react';

const MeetAndGreetCreateForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {animalId} = useParams();
  const sessionUser = useSelector(state => state.session.user)
  
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  const [showForm, setShowForm] = useState(true);
  const [startTime, setStartTime] = useState("");
  const [date, setDate] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  
  const findExistingMnG = useCallback(()=> {
    let meetAndGreetId;
    sessionUser.meetAndGreets.map(meetAndGreet => {
      if (animalId && meetAndGreet.animal_id === parseInt(animalId)) {
        meetAndGreetId = meetAndGreet.id;
      }
      return meetAndGreetId;
    })
    return meetAndGreetId;
  }, [animalId, sessionUser])

  useEffect(()=>{
    const existingMnG = findExistingMnG();
    if (sessionUser && existingMnG) setShowForm(false);
  }, [sessionUser, findExistingMnG])

  const handleSubmit = (e) => {
    e.preventDefault();
    let meetAndGreet = {animalId, startTime, date};
    if (sessionUser) {
      dispatch(createMeetAndGreet(meetAndGreet));
      setShowForm(false);
      setShowLogin(false);
    } else {
      setShowLogin(true);
    }
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
      {!sessionUser && showLogin && (
        <div className='login-container'>
          <p>Log In to Schedule</p>
        </div>
      )}
      {!showForm && (
        <div className='success-display'>
          <h1>Meet & Greet Scheduled</h1>
          <p onClick={()=>history.push(`/user/profile`)}>Visit your profile to view <br/> meet & greets</p>
        </div>
      )}
    </>
  )
}

export default MeetAndGreetCreateForm;