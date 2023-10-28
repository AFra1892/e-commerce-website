import React from 'react'
import PopulraCard from './PopulraCard'
import './popular.css'
import first from '../../assets/airJordan/Nike Air Force 1 Low Utility Black White.jpg'
import second from '../../assets/airJordan/Nike Air Force 1 Low Utility White Black (GS).jpg'
import third from '../../assets/airJordan/13.jpg'
const Popular = () => {
  return (
        <div class="shoe__popular section__padding">
            <PopulraCard img={first} name="Nike Air" price="200$"/>        
            <PopulraCard img={second} name="Nike Air" price="200$"/>        
            <PopulraCard img={third} name="Nike Air" price="200$"/>        
            <PopulraCard img={first} name="Nike Air" price="200$"/>        
        </div>
  )
}

export default Popular