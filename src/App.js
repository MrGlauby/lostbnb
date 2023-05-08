import './App.css';

import './styles/StageTwo.css'

import './styles/StageOne.css';

import './styles/TravellersSection.css';

import StageOne from './components/StageOne.js';
import StageTwo from './components/StageTwo';
import TravellersSection from './components/TravellersSection';
import Header from './components/Header';
import Footer from './components/Footer';


import PlaceGallery from './components/PlaceGallery.js';

function App() {
  return (
    <div className="App">

    <Header />
    <PlaceGallery />
    <StageOne />
    <StageTwo />
    <TravellersSection/>
    <Footer />
    </div>
  );
}

export default App;
