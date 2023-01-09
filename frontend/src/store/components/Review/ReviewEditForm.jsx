import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReview, fetchReview } from '../../reviews';

const ReviewEditForm = ({ reviewId }) => {
  const dispatch = useDispatch();
  let review = useSelector(getReview(reviewId));
  const sessionUser = useSelector(state => state.session.user);

  useEffect(()=>{
    if (reviewId) dispatch(fetchReview())
  },[])

  return (
    <div>ReviewEditForm</div>
  )
}

export default ReviewEditForm