import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReview, updateReview } from '../../reviews';
import { FaStar } from 'react-icons/fa';
import './ReviewEdit.css';

const ReviewEditForm = ({ review, organization, setEdit }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);

  const [body, setBody] = useState(review.body);
  const [rating, setRating] = useState(review.rating);
  const [hover, setHover] = useState(null);

  useEffect(()=>{
    if (review.id) dispatch(fetchReview(organization, review.id))
  },[review.id, sessionUser, organization, dispatch])

  const handleSubmit = e => {
    e.preventDefault();
    let newReview = {body, rating, organizationId: organization.id, id: review.id}
    dispatch(updateReview(newReview));
    setEdit(false);
  }

  return (
    <form onSubmit={handleSubmit} className='review-edit-form'>
      <h1 className='review-edit-header'>Edit</h1>
      <div className='edit-star-rating-container'>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label key={i}>
              <input className='radio-input'
                key={i+1}
                type="radio" 
                name="rating" 
                value={ratingValue} 
                onClick={()=>setRating(ratingValue)}
              />
              <FaStar className='star' 
                key={i+2}
                color={ratingValue <= (hover || rating) ? "var(--primary-color)" : "var(--text-color)"}
                onMouseEnter={()=>setHover(ratingValue)}
                onMouseLeave={()=>setHover(null)}
              />
            </label>
          );
        })}
      </div>
      <textarea value={body} onChange={(e)=>setBody(e.target.value)} ></textarea>
      <button>EDIT</button>
    </form>
  )
}

export default ReviewEditForm