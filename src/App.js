import './App.css';
import './styles/StageTwo.css'
import './styles/StageOne.css';
import './styles/TravellersSection.css';

import StageOne from './components/StageOne.js';
import StageTwo from './components/StageTwo';
import PlacesSection from './components/PlacesSection';
import TravellersSection from './components/TravellersSection';
import Header from './components/Header';
import Footer from './components/Footer';
import PlaceDetail from './pages/PlaceDetail'
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
        <div>
          <Header />
          <StageOne />
          <StageTwo />
          <PlacesSection />
          <TravellersSection/>
          <Footer />
        </div>} />

        <Route path="/places/:placeID" element={<PlaceDetail />} />
      </Routes>

    </div>
  );
}

export default App;
