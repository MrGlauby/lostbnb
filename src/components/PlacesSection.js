import React from 'react';
import { useEffect, useState } from 'react';
import PlacePreview from './PlacePreview';
import { fetchContentTypeAll } from '../utils/contentfulApi';
import '../styles/PlacesSection.css'

export default function PlacesSection() {
  const [fetchedPlaces, setFetchedPlaces] = useState(null);
  const [places, setPlaces] = useState(null);
  
  useEffect(() => {
    fetchContentTypeAll('places')
    .then((response) => {
      setFetchedPlaces(response);
    })
  }, [])
  
useEffect(() => {
  if(fetchedPlaces) {
    // console.log("fetchedPlaces FUNCTION: ", fetchedPlaces)
    const allPlaces = fetchedPlaces.items.map((data) => {
      const placesObject = 
        {
          id: data.sys.id,
          createdAt: data.sys.createdAt,
          name: data.fields.name,
          pic: data.fields.mainPicture.sys.id,
          description: data.fields.description.content[0].content[0].value,
          rating: data.fields.rating,
          price: data.fields.price,
          // entryGallery: data.fields.galleryPictures.sys.id,
          location: data.fields.location?.sys?.id
          // entryReviews: data.fields.reviews.sys.id
        };
        console.log("Places Object: ", placesObject);
    
        return placesObject
    })

    setPlaces(allPlaces)
    console.log(allPlaces)
  }
}, [fetchedPlaces])

  // if(fetchedPlaces){
  //   console.log("fetchedPlaces: ", fetchedPlaces);
  //   };

  return (
    <>
      <div className="PlacesHeader">
        <div className="placesHead">
          <h3>Tour Packages</h3>
          <h1>Our amazing lost places in Germany</h1>
        </div>
        <div className="placeSlider">
        {/* <div className="sliderButtons">
          <button className='sliderBtn prvBtn'>&#60;</button>
          <button className='sliderBtn nxtBtn'>&#62;</button>
        </div> */}
        <div className="placePreviews">
          {places ?
            places.map((place) => {
              return( 
              <div className="singlePlace">
              <PlacePreview place={place}/>
              </div>
              )
            }) : <div>Loading</div>
          }
        </div>
        </div>
      </div>
    </>
  )
}