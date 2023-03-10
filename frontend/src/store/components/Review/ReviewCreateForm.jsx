import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createReview } from '../../reviews';
import { FaStar } from 'react-icons/fa';
import './ReviewCreateForm.css';

const ReviewCreateForm = () => {
  const dispatch = useDispatch();
  const { organizationId } = useParams();
  const sessionUser = useSelector(state => state.session.user)

  const [showForm, setShowForm] = useState(true);
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [body, setBody] = useState("");
  const [ratingErrors, setRatingErrors] = useState(false);
  const [bodyErrors, setBodyErrors] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    let review = {rating, body, organizationId}
    if (sessionUser) {
      if (review.rating === null) {setRatingErrors(true)} else {setRatingErrors(false)}
      if (review.body.length === 0) {setBodyErrors(true)} else {setBodyErrors(false)}
      if (review.rating !== null && review.body.length !== 0) {
        dispatch(createReview(review));
        setShowForm(false);
      }
    } else {
      setLoginError(true);
    }
  }

  useEffect(()=>{
    if (sessionUser) setLoginError(false);
  },[sessionUser])

  return (
    <>
      {showForm && (
        <form onSubmit={handleSubmit} className="review-create-form">
          <h2 className='review-create-form-header'>Rate your experience</h2>
          {ratingErrors && (<div className='review-create-form-errors'>Please enter a rating</div>)}
          <div className='star-rating-container'>
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
          <h2 className='review-create-form-header'>Describe your experience</h2>
          {bodyErrors && (<div className='review-create-form-errors'>Please enter a description</div>)}
          <textarea className='review-create-form-body' rows='10' onChange={e=>setBody(e.target.value)} ></textarea>
          <button className='review-create-form-button'>REVIEW</button>
            {loginError && (<p className='review-create-form-login-error'>Log in to review</p>)}
        </form>
      )}
      {!showForm && (<p className='review-thanks'>Thanks for your review!</p>)}
    </>
  )
}

export default ReviewCreateForm