import './App.css';
import {useState, useEffect} from "react";
import testApi, { testApiFetchType } from "./utils/testApi";

function App() {
//////// API FETCH TESTING AREA /////////
useEffect(() => {
  testApiFetchType("catface");
}, [])
//////// API FETCH TESTING AREA /////////
  return (
    <div>LostBnB App.js return statement</div>
  );
}

export default App;
