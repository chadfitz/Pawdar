import { useDispatch, useSelector } from 'react-redux';
import { updateReview, deleteReview } from '../../reviews';
import { FaStar } from 'react-icons/fa';
import './Review.css';

const Review = ({ review}) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user)

  return(
    <div className='review-container'>
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
      {sessionUser && (sessionUser.id === review.userId) && (
        <div className='review-buttons-container'>
            <button>EDIT</button>
            <button onClick={()=>dispatch(deleteReview(review.user, review.id))}>DELETE</button>
        </div>
      )}
      <div className='review-edit-form-container'>

      </div>
    </div>
  )
}

export default Review;