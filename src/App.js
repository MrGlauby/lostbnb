import './App.css';
import './styles/BookingCalender.css'
import './styles/PlaceFeatures.css'
import './styles/StageTwo.css'

import StageTwo from './components/StageTwo';
import PlaceFeatures from './components/PlaceFeatures';
import BookingCalender from './components/BookingCalender';





function App() {
  return (
    <div className="App">
      <StageTwo />
      <PlaceFeatures />
      <BookingCalender />
    </div>
  );
}

export default App;
