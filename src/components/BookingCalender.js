import React from 'react'
import {useState, useEffect } from 'react';
import Calendar from 'react-calendar'; 

import { fetchContentTypeAll, fetchAsset, fetchEntry } from '../utils/contentfulApi';


export default function BookingCalender() {

//////// API FETCH TESTING AREA /////////
const [allPlaces, setPlaces] = useState("");
const [placePictureObj, setPlacePictureObj] = useState("");
const [entry, setEntry] = useState("");

useEffect(() => {
    //// fetch all of one content type. Returns a Promise 
    //// -> Then chaining and setting your useState with the result will make the useState accessible as an object. 
    //// Types are: "location", "places", "reviews", "user".
  fetchContentTypeAll("places").then((response) => setPlaces(response));

    //// Fetch ONE asset by asset ID you got from the content type for example. same procedure with then chaining.  
  fetchAsset("5p3r1771NgHyTvG2TXQo35").then((responsePic) => setPlacePictureObj(responsePic));

 //// Fetch ONE Entry by ID. same procedure with then chaining.
  fetchEntry("Llh5RBFBTHeEQEXMvr7qP").then((response) => setEntry(response));
  
}, [])
let placeName = "Place Loading..."  //defines the Place Name used in the JSX/HTML on the website BEFORE it is fetched
let placePic = "Picture Loading..." //defines the Picture used in the JSX/HTML on the website BEFORE it is fetched
let fetchedEntry = "Entry Loading..." // defines the Entry Name used in the JSX/HTML on the website BEFORE it is fetched

// prevents setting the variable before the content is fetched.
if(allPlaces !== ""){
  placeName = allPlaces.items[0].fields.name;
}

// prevents setting the variable before the content is fetched.
if(placePictureObj !== "") {
  placePic = placePictureObj.fields.file.url
  console.log("Place Pic: ", placePic);
}

// prevents setting the variable before the content is fetched.
if(entry !== "") {
  fetchedEntry = entry.fields.name;
}

//////// API FETCH TESTING AREA /////////



    const [date, setDate] = useState(new Date())

  return (
    <>
    <h1 className='bookingCalender-header'>Choose when and how long you want to be lost in the {placeName}</h1>
    <br/>
    <br/>
    <div className="react-calendar">
     <Calendar onChange={setDate} value={date} selectRange={true}/>
   </div>
   {date.length > 0 ? (
   <p>
     <span>Start:</span>{' '} {date[0].toDateString()}
     &nbsp; to &nbsp;
     <span>End:</span> {date[1].toDateString()}
   </p>
        ) : (
   <p>
     <span>Selected date:</span>{' '} {date.toDateString()}
   </p>
        )}
    </>
  )
}

