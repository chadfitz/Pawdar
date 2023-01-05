import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteMeetAndGreet } from '../../meetAndGreets';

const MeetAndGreetIndexItem = ({ meetAndGreet }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <Link to={`/user/profile/meetAndGreets/${meetAndGreet.id}`}>Meet & Greet</Link>
      <Link to={`/user/profile/meetAndGreets/${meetAndGreet.id}/edit`}>Edit</Link>
      <button onClick={()=>dispatch(deleteMeetAndGreet(meetAndGreet.id))}>Delete</button>
    </li>
  )
}

export default MeetAndGreetIndexItem;