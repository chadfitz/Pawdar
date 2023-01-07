import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMeetAndGreet, fetchMeetAndGreet, updateMeetAndGreet } from '../../meetAndGreets';


const MeetAndGreetEditForm = ({ meetAndGreetId }) => {
  const dispatch = useDispatch();
  // const {meetAndGreetId} = useParams();
  let meetAndGreet = useSelector(getMeetAndGreet(meetAndGreetId));
  const sessionUser = useSelector(state => state.session.user);

  const [startTime, setStartTime] = useState(meetAndGreet.startTime);
  const [date, setDate] = useState(meetAndGreet.date);
  // const [startTime, setStartTime] = useState("");
  // const [date, setDate] = useState("");

  useEffect(()=>{
    if (meetAndGreetId) dispatch(fetchMeetAndGreet(sessionUser, meetAndGreetId));
  }, [meetAndGreetId, sessionUser, dispatch])

  const handleSubmit = (e) => {
    debugger;
    let newMeet = {startTime, date, id: meetAndGreetId}
    e.preventDefault();
    dispatch(updateMeetAndGreet(newMeet));
  }

  return(
    <form onSubmit={handleSubmit}>
      <h1>Edit Date & Time</h1>
      <label>Start Time between 9am and 5pm
        <input type="time" min="9:00" max="17:00" value={startTime} onChange={(e)=>setStartTime(e.target.value)} required />
      </label>
      <label>Date starting tomorrow
        <input type="date" value={date} onChange={e=>setDate(e.target.value)} required />
      </label>
      <button>Finish Edit</button>
    </form>
  )
}

export default MeetAndGreetEditForm;