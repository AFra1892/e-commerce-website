import Navbar from './components/header/Navbar';
import Trend from './components/main/Trend';
import './App.css';
import Popular from './components/popular/Popular';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='shoe__header'></div>
      <Trend/>
      <Popular/>
    </div>
  );
}

export default App;
