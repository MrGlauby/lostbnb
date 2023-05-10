import React from 'react'

export default function OneReview({review}) {
  return (
    <div>
      <h3>{review?.title}</h3>
      <p>{review?.postingTime}</p>
      <p>{review?.rating}</p>
      <p>{review?.text}</p>
    </div>
  )
}
