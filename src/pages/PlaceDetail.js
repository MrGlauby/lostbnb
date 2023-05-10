import React from 'react'
import PlaceFeatures from '../components/PlaceFeatures';
import BookingCalender from '../components/BookingCalender';
import { useParams } from 'react-router-dom';
import {useEffect, useState} from 'react';

import '../styles/BookingCalender.css'
import '../styles/PlaceFeatures.css'
import { fetchEntry, fetchAsset } from '../utils/contentfulApi';

export default function PlaceDetail() {
  const {placeID} = useParams();
  const [fetchedPlace, setFetchedPlace] = useState(null);
  const [placeLocation, setPlaceLocation] = useState(null);
  const [assets, setAssets] = useState([]);
  const [reviews, setReviews] = useState([]);
  // let assets = [];
  // let reviews = [];
  const [place, setPlace] = useState(null);
  const [finishedLoading, setFinishedLoading] = useState(false);
  // let finishedLoading = false;
  let placeData = null;

  useEffect(() => {
    // console.log(typeof(placeID), placeID);
    fetchEntry(placeID).then((response) => {
      setFetchedPlace(response);
    })
  }, [])

  useEffect(() => {
    if(fetchedPlace) {
      let doneLoading = false;
      console.log("DETAIL FetchedPlace: ", fetchedPlace);
      //clear previous place
      // setPlace([]);
      //clear previous assets
      setAssets([]);
      //clear previous reviews
      setReviews([]);
      //dot notation to get to the properties we need to iterate
      const galleryPictures = fetchedPlace.fields.galleryPictures;
      const reviewPath = fetchedPlace.fields.reviews;

      const promises = [];

      //fetch Main Picture and push it into assets array
      promises.push(fetchAsset(fetchedPlace.fields.mainPicture.sys.id)
      .then((response) => {
        setAssets((prev) => [...prev, response.fields.file.url])
      }));

      console.log("DETAIL assets array: ", assets);
      //fetching all picture paths of the gallery pics of this place and pushing them into assets array
      galleryPictures.map((galleryPic) => {
        promises.push(fetchAsset(galleryPic.sys.id)
        .then((response) => {
          setAssets((prev) => [...prev, response.fields.file.url])
        }));
        // console.log("DETAIL gallery: ", assets);
      })

      //fetching all reviews of this place
      reviewPath.map((reviewLink) => {
        promises.push(fetchEntry(reviewLink.sys.id)
        .then((response) => {
          // console.log("REVIEW response: ", response)
          const review = {
            title: response.fields.reviewTitle,
            postingTime: response.fields.postingTime,
            rating: response.fields.reviewerRating,
            text: response.fields.reviewText.content[0].content[0].value
          }
          setReviews((prev) => {
            return [...prev, review ]
          })
          // console.log("REVIEW ARRAY: ", reviews)
        }));
      })

      promises.push(fetchEntry(fetchedPlace.fields.location?.sys?.id)
      .then((response) => {
        // console.log("location Response: ", response)
        setPlaceLocation({
          id: response.sys.id,
          street: response.fields.street,
          zip: response.fields.zip,
          city: response.fields.city,
          country: response.fields.country
        })
        console.log(placeLocation);
      }));

      Promise.all(promises).then(() => {
        console.warn('finished loading');

        setFinishedLoading(true);
      });
    }  
  }, [fetchedPlace])

  // if(reviews !== [] && assets !== [] && placeLocation !== null) {
  //   setFinishedLoading(true);
  //   // console.log("Finished Loading: ", finishedLoading);
  // }

//declaring a new place Data object for better usability of the properties
  useEffect(() => {
    console.log(finishedLoading, placeLocation, assets.length, reviews.length);

    if(!finishedLoading) {
      console.log("Not done yet.");

      return;
    }

    placeData =
    {
      id: fetchedPlace.sys.id,
      createdAt: fetchedPlace.sys.createdAt,
      name: fetchedPlace.fields.name,
      pictures: assets,
      description: fetchedPlace.fields.description.content[0].content[0].value,
      rating: fetchedPlace.fields.rating,
      price: fetchedPlace.fields.price,
      location: placeLocation,
      reviews: reviews
    }
    setPlace(placeData);
    console.log("Place Data: ", placeData);
    // console.log("Place STATE: ", place);
  }, [finishedLoading])

  place && console.log("OUTSIDE use effect Place: ", place);
  // const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    console.log("Place State: ", place);
    // setIsLoading(false);
  }, [place])
  // let isLoading = true;

  // if (isLoading) return <div>Loading...</div>

  return (
    <>
    {/* {place.pictures.map((pic) => {
      return (<img src={pic} alt="Gallery Picture" />)
    })} */}
    <PlaceFeatures />
    <BookingCalender />
    </>
  )
}
