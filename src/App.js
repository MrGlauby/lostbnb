import './App.css';
import './styles/StageOne.css';
import './styles/StageTwo.css'

import StageOne from './components/StageOne.js';
import StageTwo from './components/StageTwo';
import TravellersSection from './components/TravellersSection';

function App() {
  return (
    <div className="App">
    <StageOne />
    <StageTwo />
    <TravellersSection/>
    </div>
  );
}

export default App;
