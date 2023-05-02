import './App.css';
import './styles/StageOne.css';
import './styles/StageTwo.css'
import './styles/TravellersSection.css';

import PlaceFeatures from './components/PlaceFeatures.js'
import BookingCalender from './components/BookingCalender.js'


import './styles/BookingCalender.css';
import './styles/PlaceFeatures.css';


import StageOne from './components/StageOne.js';
import StageTwo from './components/StageTwo';
import TravellersSection from './components/TravellersSection';

function App() {
  return (
    <div className="App">
      <PlaceFeatures />
      <BookingCalender />
    <StageOne />
    <StageTwo />
    <TravellersSection/>
    </div>
  );
}

export default App;
