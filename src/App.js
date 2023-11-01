import Navbar from './components/header/Navbar';
import Trend from './components/main/Trend';
import './App.css';
import Popular from './components/popular/Popular';
import Footer from './components/footer/Footer';
import {Menu} from 'antd'
import { StyleProvider } from '@ant-design/cssinjs';


function App() {
  return (
    <div className="App">
      <StyleProvider hashPriority="high">
      <Menu
      className='test-menu'
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
      </StyleProvider>
      <div className='shoe__header'></div>
      <Trend/>
      <Popular/>
      <Footer/>
    </div>
  );
}

export default App;
