import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReview } from '../../reviews';
import { getUser, fetchUser } from '../../user';
import './Review.css';

const Review = ({ review, organization }) => {
  const dispatch = useDispatch();
  const user = useSelector(getUser(review.userId))
  
  useEffect(()=>{
    dispatch(fetchReview(organization, review.id))
  }, [review.userId, dispatch])

  return(
    <div className='review-container'>
      <div className='review-user'>
        {user && (
        <li>{user.username}</li>
        )}
      </div>
      <div className='rating'>
        {review.rating}
      </div>
      <div className='review-body'>
        <li>{review.body}</li>
      </div>
      <div className='review-edit-form-container'>
        
      </div>
    </div>
  )
}

export default Review;