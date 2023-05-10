import React from 'react'
import OneReview from './OneReview'

export default function ReviewSection({place}) {
  return (
    <div>
      <div className="reviewWrapper">
        <div className="reviews">
          {place?.reviews.map((review) => {
            return(
              <div className="reviewCard">
            <OneReview  review={review} />
            </div>
            )
          })}
        </div>
        </div>
    </div>
  );
}
