import React from 'react'
import './trend.css'
import firstImg from '../../assets/trendd/An Error Has Occured(1).jpg'
import secImg from '../../assets/trendd/Click To Buy Purchase Jordan 1 Low Retro Shoes Cheap Air Jordan 1 Low For Sale.jpg'
import thirdImg from '../../assets/trendd/Nike Blazer Mid ’77 VNTG.jpg'
const Trend = () => {
  return (
        <div class="shoe__trend section__padding">
                <div class="shoe__trend-content">
                    <h3>TRENDING PRODUCTS</h3>
                    <h1>MOST POPULAR PRODUCTS</h1>
                    <button>See More</button>
                </div>
                <div className='shoe__trend-cards'>
                    <div class="shoe__trend-cards_card">
                        <img src={firstImg} alt='first'/>
                        <div class="hover-text">
                            <p>shop now</p>
                        </div>
                    </div>
                    <div class="shoe__trend-cards_card">
                        
                            <img src={secImg} alt='second'/>
                            <div class="hover-text">
                                <p>shop now</p>
                            </div>
                        
                    </div>
                    <div class="shoe__trend-cards_card">
                        
                            <img src={thirdImg} alt='third'/>
                            <div class="hover-text">
                                <p>shop now</p>
                            </div>
                        </div>
                </div>
            </div>
  )
}

export default Trend