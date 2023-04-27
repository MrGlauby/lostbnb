import './App.css';
import {useState, useEffect} from "react";
import testApi from "./utils/testApi";

function App() {
useEffect(() => {
  testApi();
}, [])  
  return (
    <div>emptyness</div>
  );
}

export default App;
