import React from 'react'
import './newNavbar.css'
const NavItem = ({name}) => {
  return (
    <>
    <li class="dropdown dropdown-9">
        {name}
        <ul class="dropdown_menu dropdown_menu--animated dropdown_menu-9">
            <ul className='outter-menu'>
                <ul className='inner-menu'>
                    <li>Lifestyle</li>
                    <li>Jordan</li>
                    <li>Air Max</li>
                    <li>Air Force 1</li>
                    <li>Dunks & Blazers</li>
                    <li>Training & Gym</li>
                    <li>Basketball</li>
                    <li>Running</li>
                    <li>Nike SB</li>
                    <li>Sandals & Slides</li>
                    <li>Shoes $100 & Under</li>
                    <li>NEW:Nike Refurbished</li>
                </ul>
                <ul className='inner-menu'>
                    <li>Jordan</li>
                    <li>Matching Sets</li>
                    <li>Big & Tall</li>
                    <li>Basketball</li>
                    <li>Fitness</li>
                    <li>Tops & T-Shirts</li>
                    <li>Shorts</li>
                    <li>Hoodies & Sweatshirts</li>
                    <li>Outerwear & Jackets</li>
                    <li>Pants & Tights</li>
                    <li>Underwear</li>
                    <li>Socks</li>
                    <li>Clothing $50 & Under</li>
                </ul>
                <ul className='inner-menu'>
                    <li>Basketball</li>
                    <li>Golf</li>
                    <li>Soccer</li>
                    <li>Running</li>
                    <li>Tennis</li>
                    <li>Baseball</li>
                    <li>Football</li>
                    <li>Traning & Gym</li>
                    <li>Wrestling</li>
                    <li>Yoga</li>
                </ul>
            </ul>
        </ul>  
    </li>
    </>
  )
}

export default NavItem