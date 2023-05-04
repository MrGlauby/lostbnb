import './App.css';
import './styles/StageOne.css';
import './styles/StageTwo.css'
import './styles/TravellersSection.css';

import StageOne from './components/StageOne.js';
import StageTwo from './components/StageTwo';
import TravellersSection from './components/TravellersSection';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Header />
    <StageOne />
    <StageTwo />
    <TravellersSection/>
    <Footer />
    </div>
  );
}

export default App;
