import Navbar from './components/header/Navbar';
import Trend from './components/main/Trend';
import './App.css';
import Popular from './components/popular/Popular';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='shoe__header'></div>
      <Trend/>
      <Popular/>
      <Footer/>
    </div>
  );
}

export default App;
