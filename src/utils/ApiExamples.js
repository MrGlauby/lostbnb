import {useState, useEffect} from "react";
import { fetchContentTypeAll, fetchAsset, fetchEntry } from './contentfulApi';

export default function ApiExamples(){
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
  return (
    <>
      <div>_________________</div>
      <h2>Fetched with fetchContentTypeAll .items[0].fields.name</h2>
      <h1>{placeName}</h1>
      <img src={placePic} alt="Place Picture" width="600" height ="500"/>
      <h2>Fetched with fetchEntry .fields.name </h2>
      <h1>{fetchedEntry}</h1>
    </>
  );

}