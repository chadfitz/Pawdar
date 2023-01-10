import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews, fetchReviews } from '../../reviews';
import Review from './Review';
import './ReviewIndex.css';

const ReviewIndex = ({ organization }) => {
  const dispatch = useDispatch();
  const reviews = useSelector(getReviews);

  useEffect(()=>{
    dispatch(fetchReviews(organization))
  }, [organization, dispatch])

  return (
    <ul>
      {reviews.map(review => <Review key={review.id} review={review} organization={organization} />)}
    </ul>

  )
}

export default ReviewIndex;