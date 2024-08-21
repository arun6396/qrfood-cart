// StarRating.js

import React, { useState } from "react";


const StarRating = ({ totalStars }) => {
  const [rating, setRating] = useState(0);

  const handleClick = (star) => {
    setRating(star);
  };

  return (
    <div>
      
        <h3 className="d-flex justify-content-center align-items-center">
          QR Restaurant Ratings
        </h3>
      
      {[...Array(totalStars)].map((_, index) => (
        
          <span
            className="d-flex justify-content-center align-items-center"
            key={index}
            onClick={() => handleClick(index + 1)}
            style={{
              cursor: "pointer",
              color: index < rating ? "gold" : "gray",
            }}
          >
            &#9733;
          </span>
       
      ))}
      
        <p className="d-flex justify-content-center align-items-center">
          {rating} out of {totalStars}
        </p>
     
    </div>
  );
};

export default StarRating;
