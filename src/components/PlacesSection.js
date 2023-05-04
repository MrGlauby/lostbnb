import React from 'react';
import { useEffect, useState } from 'react';
import PlacePreview from './PlacePreview';
import { fetchContentTypeAll } from '../utils/contentfulApi';

export default function PlacesSection() {
  const [fetchedPlaces, setFetchedPlaces] = useState([])
  const [places, setPlaces] = useState([])
  function createPlaceObj(data) {
    const placesObject = 
        {
          entryID: data.sys.id,
          entryCreatedAt: data.sys.createdAt,
          entryName: data.fields.name,
          entryPic: data.fields.mainPicture.id,
          entryDescription: data.fields.description.content.content.value,
          entryRating: data.fields.rating,
          entryGallery: data.fields.galleryPictures.sys.id,
          entryLocation: data.fields.location.id,
          entryReviews: data.fields.reviews.sys.id
        }
        setPlaces((prev) => {return [...prev, placesObject]})
    }
  

  useEffect(() => {
    fetchContentTypeAll('places')
    .then((response) => {
      setFetchedPlaces(response);
    })
    .then(()=> {
      console.log("fetchedPlaces: ", fetchedPlaces);
      fetchedPlaces.map((place) => {
        createPlaceObj(place);
      })
    })
    .then(()=> console.log('New Places Object: ', places));
  }, [])

  return (
    <>
      <div className="PlacesHeader">
        <div className="placesHead">
          <h3>Tour Packages</h3>
          <h1>Our amazing lost places in Germany</h1>
        </div>
        <div className="sliderButtons">
          <button className='sliderBtn prvBtn'>&#60;</button>
          <button className='sliderBtn nxtBtn'>&#62;</button>
        </div>
        <PlacePreview />
      </div>
    </>
  )
}
