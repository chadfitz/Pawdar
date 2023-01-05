import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMeetAndGreet, fetchMeetAndGreet, createMeetAndGreet, updateMeetAndGreet } from '../../meetAndGreets';

const MeetAndGreetForm = () => {
  const dispatch = useDispatch();
  const {meetAndGreetId} = useParams();
  const formType = meetAndGreetId ? "Update Meet & Greet" : "Create Meet & Greet";
  let meetAndGreet = useSelector(getMeetAndGreet(meetAndGreetId));
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  console.log(tomorrow);

  if (formType === "Create Meet & Greet"){
    meetAndGreet = {
      startTime: "",
      date: ""
    }
  }

  const [startTime, setStartTime] = useState(meetAndGreet.startTime);
  const [date, setDate] = useState(meetAndGreet.date);

  useEffect(()=>{
    if (meetAndGreetId) dispatch(fetchMeetAndGreet(meetAndGreetId));
  }, [meetAndGreetId])

  const handleSubmit = (e) => {
    e.preventDefault();
    meetAndGreet = {...meetAndGreet, startTime, date}
    if (formType === "Create Meet & Greet"){
      dispatch(createMeetAndGreet(meetAndGreet));
    } else {
      dispatch(updateMeetAndGreet(meetAndGreet));
    }
  }

  return(
    <form onSubmit={handleSubmit}>
      <h1>{formType}</h1>
      <label>Start Time between 9am and 5pm
        <input type="time" min="9:00" max="17:00" value={startTime} onChange={(e)=>setStartTime(e.target.value)} />
      </label>
      <label>Date starting tomorrow
        <input type="date" min={tomorrow} value={date} onChange={e=>setDate(e.target.value)} />
      </label>
      <button>{formType}</button>
    </form>
  )
}

export default MeetAndGreetForm;