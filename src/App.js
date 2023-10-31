import Navbar from './components/header/Navbar';
import Trend from './components/main/Trend';
import './App.css';
import Popular from './components/popular/Popular';
import Footer from './components/footer/Footer';

import {Menu} from 'antd'

<>
    <p><a href='/'>Home</a></p>
    <p><a href='/menu'>Menu</a></p>
    <p><a href='/about'>About</a></p>
    <p><a href='#gallery'>Gallery</a></p>
    <p><a href='#contact'>Contact</a></p>
    <i class='bx bx-shopping-bag' ></i>
  </>

function App() {
  return (
    <div className="App">
      <Menu
      mode='horizontal'
        items={
          [
            {
              label:"Home",
              key:"Home",
              
            },
            {
              label:"Men",
              key:"Men",
              children:[
                {
                  label:"Shoe",
                  key:"Shoe"
                },
                {
                  label:"T-shirt",
                  key:"T-shirt"
                }
              ]
            },
            {
              label:"Women",
              key:"Women"
            },
            {
              label:"About",
              key:"About"
            }
          ]
        }
      >

      </Menu>
      <div className='shoe__header'></div>
      <Trend/>
      <Popular/>
      <Footer/>
    </div>
  );
}

export default App;
