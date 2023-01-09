import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, fetchUser } from '../../user';
import './Review.css';

const Review = ({ review }) => {
  const dispatch = useDispatch();
  const user = useSelector(getUser(review.userId))
  // console.log(user);

  useEffect(()=>{
    dispatch(fetchUser(review.userId))
  }, [review.userId, dispatch])

  return(
    <div className='review-container'>
      <div className='review-user'>
        {user && (
        <li>{user.username}</li>
        )}
      </div>
      <div className='review-body'>
        <li>{review.body}</li>
      </div>
    </div>
  )
}

export default Review;