import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import MeetAndGreetForm  from './MeetAndGreetForm';
import MeetAndGreetIndexItem from './MeetAndGreetIndexItem';
import { getMeetAndGreets, fetchMeetAndGreets } from '../../meetAndGreets';

const MeetAndGreetIndex = () => {
  const dispatch = useDispatch();
  const meetAndGreets = useSelector(getMeetAndGreets);
  const sessionUser = useSelector(state => state.session.user);
  console.log(meetAndGreets);

  useEffect(()=>{
    dispatch(fetchMeetAndGreets(sessionUser));
  }, [dispatch, sessionUser])

  return (
    <>
      <div>test</div>
      <ul>
        {meetAndGreets.map(meetAndGreet => <MeetAndGreetIndexItem key={meetAndGreet.id} meetAndGreet={meetAndGreet} />)}
      </ul>
    </>
  )
}

export default MeetAndGreetIndex;