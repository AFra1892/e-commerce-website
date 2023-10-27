import Navbar from './components/header/Navbar';
import Trend from './components/main/Trend';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='shoe__header'></div>
      <Trend/>
    </div>
  );
}

export default App;
