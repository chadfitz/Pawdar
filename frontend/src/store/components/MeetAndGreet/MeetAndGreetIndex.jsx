import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MeetAndGreetIndexItem from './MeetAndGreetIndexItem';
import { getMeetAndGreets, fetchMeetAndGreets } from '../../meetAndGreets';
import './MnGIndex.css';

const MeetAndGreetIndex = () => {
  const dispatch = useDispatch();
  const meetAndGreets = useSelector(getMeetAndGreets);
  const sessionUser = useSelector(state => state.session.user);

  meetAndGreets.sort((a, b)=> (a.date > b.date) ? 1: -1 )

  useEffect(()=>{
    dispatch(fetchMeetAndGreets(sessionUser));
  }, [dispatch, sessionUser])

  return (
    <div className='meet-and-greets-container'>
      {meetAndGreets.map(meetAndGreet => <MeetAndGreetIndexItem key={meetAndGreet.id} meetAndGreet={meetAndGreet} />)}
    </div>
  )
}

export default MeetAndGreetIndex;