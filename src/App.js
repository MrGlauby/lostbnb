import './App.css';
import {useState, useEffect} from "react";
import testApi from "./utils/testApi";

function App() {
//////// API FETCH TESTING AREA /////////
useEffect(() => {
  testApi();
}, [])
//////// API FETCH TESTING AREA /////////
  return (
    <div>LostBnB App.js return statement</div>
  );
}

export default App;
