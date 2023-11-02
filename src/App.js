import Trend from './components/main/Trend';
import './App.css';
import Popular from './components/popular/Popular';
import Footer from './components/footer/Footer';
import NewNav from './components/header/NewNav';


function App() {
  return (
    <div className="App">
      <NewNav/>
      <div className='shoe__header'></div>
      <Trend/>
      <Popular/>
      <Footer/>
    </div>
  );
}

export default App;
