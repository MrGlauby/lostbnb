import './App.css';
import './styles/StageTwo.css'
import './styles/TravellersSection.css';

import StageOne from './components/StageOne.js';
import StageTwo from './components/StageTwo';
import TravellersSection from './components/TravellersSection';

import PlaceGallery from './components/PlaceGallery.js';

function App() {
  return (
    <div className="App">
    <PlaceGallery />

    <StageOne />
    <StageTwo />
    <TravellersSection />
    </div>
  );
}

export default App;
