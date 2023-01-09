import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
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
              // required
            />
            <FaStar className='star' 
              key={i+2}
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={()=>setHover(ratingValue)}
              onMouseLeave={()=>setHover(null)}
            />
          </label>
        );
      })}
    </div>
  )
}

export default StarRating;