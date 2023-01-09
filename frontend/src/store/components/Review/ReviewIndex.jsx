import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews, fetchReviews } from '../../reviews';
import './ReviewIndex.css';

const ReviewIndex = () => {
  const dispatch = useDispatch();
  const reviews = useSelector(getReviews);
  const sessionUser = useSelector(state => state.session.user)

  useEffect(()=>{
    dispatch(fetchReviews(organization))
  }, [dispatch])
}

export default ReviewIndex;