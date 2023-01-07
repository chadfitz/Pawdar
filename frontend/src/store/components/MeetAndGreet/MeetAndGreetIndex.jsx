import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MeetAndGreetIndexItem from './MeetAndGreetIndexItem';
import { getMeetAndGreets, fetchMeetAndGreets } from '../../meetAndGreets';

const MeetAndGreetIndex = () => {
  const dispatch = useDispatch();
  const meetAndGreets = useSelector(getMeetAndGreets);
  const sessionUser = useSelector(state => state.session.user);

  useEffect(()=>{
    dispatch(fetchMeetAndGreets(sessionUser));
  }, [dispatch, sessionUser])

  return (
    <div className='meet-and-greets-container'>
      {/* <h1 className='meet-and-greets-header'>My Meet & Greets</h1> */}
      {meetAndGreets.map(meetAndGreet => <MeetAndGreetIndexItem key={meetAndGreet.id} meetAndGreet={meetAndGreet} />)}
    </div>
  )
}

export default MeetAndGreetIndex;