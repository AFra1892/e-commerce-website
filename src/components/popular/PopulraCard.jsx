import React from 'react'
import './popular.css'

const PopulraCard = (props) => {
  return (
    <div class="card">
        <img src={props.img}/>
        <div class="card-content">
            <h3>{props.name}</h3>
            <p className='card-dec'>Men's Road Running Shoes</p>
            <p>{props.price}</p>
        </div>
    </div>
  )
}

export default PopulraCard