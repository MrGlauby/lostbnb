import React from 'react'
import { useState, useEffect } from 'react';
import { fetchEntry, fetchAsset } from '../utils/contentfulApi';
import { Link } from 'react-router-dom';

export default function PlacePreview({place}) {
  const [mainPicture, setMainPicture] = useState();
  const [location, setLocation] = useState();
  useEffect(() => {
    fetchAsset(place.pic).then((response)=>setMainPicture({
      picture: response.fields.file.url,
      title: response.fields.title
    }))
    fetchEntry(place.location).then((response) => 
    {
      setLocation({
        street: response.fields.street,
        zip: response.fields.zip,
        city: response.fields.city,
        country: response.fields.country
  })})
  }, [])

  const placeHeadline = place.name;
  const rating = place.rating;
  const price = place.price;
  
  if(!mainPicture || !location) return <div>Loading...</div>
  
  return (
    <>
    <Link to={`/places/${place.id}`}>
      <div className="previewWrapper">
        <div className="previewPicture">
          <img src={mainPicture.picture} alt={mainPicture.title} width="300" height="auto"/>
        </div>
        <div className="placeInfo">
          <h3>{placeHeadline}</h3>
          <p>{location.street}</p>
          <p>* {rating}</p>
        </div>
        <div className="price">
          <h3 className="priceTag">{price}</h3>
          <p>per night</p>
          <br />
        </div>
      </div>
      </ Link>
    </>
  )
}
