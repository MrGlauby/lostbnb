import React, { useCallback } from 'react'
import PlaceFeatures from '../components/PlaceFeatures';
import BookingCalender from '../components/BookingCalender';
import PlaceGallery from '../components/PlaceGallery';
import ReviewSection from '../components/ReviewSection';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import {useEffect, useState} from 'react';

import '../styles/BookingCalender.css'
import '../styles/PlaceFeatures.css'
import { fetchEntry, fetchAsset } from '../utils/contentfulApi';


export default function PlaceDetail() {
  const {placeID} = useParams();
  const [place, setPlace] = useState(null)

  const fetchAssets = useCallback(async (fetchedPlace) => {
    const galleryPictures = fetchedPlace.fields.galleryPictures;
    
    // create array of asset to fetch
    const assetsToFetch = [fetchedPlace.fields.mainPicture, ...galleryPictures]

    // fetch assets for the assets in the array
    const assets = await Promise.all(assetsToFetch.map(async (picture) => {
      const asset = await fetchAsset(picture.sys.id)

      return asset.fields?.file?.url
    }))
    return assets
  }, [])

  const fetchReviews = useCallback(async (fetchedPlace) => {
    // map all reviews to fetchEntry and mapping to our review object
    const reviews = await Promise.all(fetchedPlace.fields.reviews.map(async (review) => {
      const response = await fetchEntry(review.sys.id)

      return {
        title: response.fields.reviewTitle,
        postingTime: response.fields.postingTime,
        rating: response.fields.reviewerRating,
        text: response.fields.reviewText.content[0].content[0].value
      }
    }))

    return reviews
  }, [])

  const fetchPlaceLocation = useCallback(async (fetchedPlace) => {
    const locationResponse = await fetchEntry(fetchedPlace.fields.location?.sys?.id)

    return {
      id: locationResponse.sys.id,
      street: locationResponse.fields.street,
      zip: locationResponse.fields.zip,
      city: locationResponse.fields.city,
      country: locationResponse.fields.country
    }
  }, [])

  const fetchPlace = useCallback(async () => {
    const fetchedPlace = await fetchEntry(placeID)

    const [reviews, assets, placeLocation] = await Promise.all([
      fetchReviews(fetchedPlace),
      fetchAssets(fetchedPlace),
      fetchPlaceLocation(fetchedPlace)
    ])

    setPlace({
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
)
  }, [placeID])

  useEffect(() => {
    // console.log(typeof(placeID), placeID);
    fetchPlace()
  }, [placeID])

  console.log(place)

  return (
    <>
    <Header />
    <PlaceGallery place={place} />
    <PlaceFeatures place={place} />
    <BookingCalender />
    <ReviewSection place={place} />
    <Footer />
    </>
  )
}
