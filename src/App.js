import './App.css';
import {useState, useEffect} from "react";
// import testApi, { testApiFetchType } from "./utils/testApi";
import { fetchContentTypeAll } from './utils/contentfulApi';

function App() {
//////// API FETCH TESTING AREA /////////
const [allPlaces, setPlaces] = useState("");
useEffect(() => {
  fetchContentTypeAll("places").then((response) => setPlaces(response));
  
}, [])
let placeName = "Place Loading..."
if(allPlaces !== ""){
  placeName = allPlaces.items[0].fields.name;
}
//////// API FETCH TESTING AREA /////////
  return (
    <>
      <div>LostBnB App.js return statement</div>
      <p>{placeName}</p>
    </>
  );
}

export default App;
