import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteReview } from '../../reviews';
import ReviewEditForm from './ReviewEditForm';
import { FaStar } from 'react-icons/fa';
import './Review.css';

const Review = ({ review, organization }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user)

  const [edit, setEdit] = useState(false);

  return(
    <div className='review-container'>
      {!edit && (
        <>
          <div className='review-user-and-rating'>
          <p>{review.user.username}&nbsp;</p>
            {[...Array(5)].map((star, i) => { 
              const ratingValue = i + 1
              return (
                <p key={i}>
                  <FaStar key={i} className='star' color={ratingValue <= review.rating ? "var(--primary-color)" : "var(--text-color)" } />
                </p>
              )
            })}
          </div>
          <div className='review-body'>
            <li>{review.body}</li>
          </div>
          {/* someone is logged in and that person is the current user */}
          {sessionUser && (sessionUser.id === review.userId) && (
            <div className='review-buttons-container'>
                <button onClick={()=>setEdit(true)}>EDIT</button>
                <button onClick={()=>dispatch(deleteReview(review.user, review.id))}>DELETE</button>
            </div>
          )}
        </>
      )}
      {edit && (
        <>
          <ReviewEditForm key={review.id} review={review} organization={organization} setEdit={setEdit} />
        </>
      )}
    </div>
  )
}

export default Review;