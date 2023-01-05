import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MeetAndGreetForm  from './MeetAndGreetForm';
import MeetAndGreetIndexItem from './MeetAndGreetIndexItem';
import { getMeetAndGreets, fetchMeetAndGreets } from '../../meetAndGreets';

const MeetAndGreetIndex = () => {
  const dispatch = useDispatch();
  const meetAndGreets = useSelector(getMeetAndGreets);

  useEffect(()=>{
    dispatch(fetchMeetAndGreets());
  }, [])

  return (
    <>
      <ul>
        {meetAndGreets.map(meetAndGreet => <MeetAndGreetIndexItem key={meetAndGreet.id} meetAndGreet={meetAndGreet} />)}
      </ul>
      <MeetAndGreetForm />
    </>
  )
}

export default MeetAndGreetIndex;