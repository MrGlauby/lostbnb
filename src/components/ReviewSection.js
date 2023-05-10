import React from 'react'
import OneReview from './OneReview'

export default function ReviewSection({place}) {
  return (
    <div>
      <br/>
      <br/>
      <br/>
      <br/>
      <h1 className= "reviewHeader">Reviews:</h1>
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
        <br />
        <br />
        <br />
        <br />
        </div>
    </div>
  );
}
