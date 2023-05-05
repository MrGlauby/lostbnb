import React from 'react';
import { useEffect, useState } from 'react';
import PlacePreview from './PlacePreview';
import { fetchContentTypeAll } from '../utils/contentfulApi';

export default function PlacesSection() {
  const [fetchedPlaces, setFetchedPlaces] = useState([])
  const [places, setPlaces] = useState([])
  function createPlaceObj(data) {
    // const reviews = data.fields.reviews.map()
    console.log("create Places data: ", data);
    const placesObject = 
        {
          id: data.sys.id,
          createdAt: data.sys.createdAt,
          name: data.fields.name,
          pic: data.fields.mainPicture.sys.id,
          description: data.fields.description.content[0].content[0].value,
          rating: data.fields.rating,
          // entryGallery: data.fields.galleryPictures.sys.id,
          location: data.fields.location.sys.id,
          // entryReviews: data.fields.reviews.sys.id
        }
        setPlaces((prev) => {[...prev, placesObject]});
        if (places !== []){
        console.log("New Places Function:", places)
        }
    }
  
  useEffect(() => {
    fetchContentTypeAll('places')
    .then((response) => {
      setFetchedPlaces(()=> {return response});
      console.log("fetchedPlaces: ", fetchedPlaces);
      response.items.map((place) => {
        console.log("map Place: ", place);
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
