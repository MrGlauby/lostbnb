import React from 'react'

export default function PlacePreview() {
  const placeHeadline = "";
  const location = "";
  const rating = "";
  const price = "";
  
  return (
    <>
      <div className="previewWrapper">
        <div className="previewPicture">
          <img src="PLACEHOLDER" alt="Place Preview Picture" />
        </div>
        <div className="placeInfo">
          <h3>{placeHeadline}</h3>
          <p>{location}</p>
          <p>* {rating}</p>
        </div>
        <div className="price">
          <h3 className="priceTag">{price}</h3>
          <p>per night</p>
        </div>
      </div>
    </>
  )
}
