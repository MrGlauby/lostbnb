import React from 'react'

export default function OneReview({review}) {
  return (
    <div>
      <br />
      <br />

      <h3>{review?.title}</h3>
      <br/>
      <p>{review?.postingTime}</p>
      <p>Rating: {review?.rating} / 5</p>
      <br />
      <p>{review?.text}</p>
      <br />
      <br />
      <hr />

    </div>
  )
}
