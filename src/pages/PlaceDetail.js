import React from 'react'
import PlaceFeatures from './components/PlaceFeatures';
import BookingCalender from './components/BookingCalender';
import PlaceGallery from '../components/PlaceGallery';

import './styles/BookingCalender.css'
import './styles/PlaceFeatures.css'


export default function PlaceDetail() {
  return (
    <>
    <PlaceFeatures />
    <BookingCalender />
    <PlaceGallery />
    </>
  )
}
