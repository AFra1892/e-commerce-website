import React from 'react'
import './newNavbar.css'
import NavItem from './NavItem'
import logo from '../../assets/nike-4-logo-pack/nike-4-logo-black-and-white.png'

const NewNav = () => {
  return (
    
<div class="menu-container">
<nav>
    <div className='logo'>
        <img src={logo} alt='logo'/>
    </div>
  <ul class="menu">
    <NavItem name='New & Featured'/>
    <NavItem name='Men'/>
    <NavItem name="Women"/>
    <NavItem name="Accessories"/>
    <NavItem name="Sale"/>
  </ul>
</nav>
</div>

  )
}

export default NewNav






















    // <li class="dropdown dropdown-1">
    //   New & Featured
    // </li>
    //  <li class="dropdown dropdown-2">
    //   Men
    //   <ul class="dropdown_menu dropdown_menu-5">
    //     <li class="dropdown_item-1">Item 1</li>
    //     <li class="dropdown_item-2">Item 2</li>
    //     <li class="dropdown_item-3">Item 3</li>
    //       <li class="dropdown_item-4">Item 4</li>
    //       <li class="dropdown_item-5">Item 5</li>
    //   </ul>
    // </li>
    // <li class="dropdown dropdown-3">
    //   Women
    // </li>
    // <li class="dropdown dropdown-4">
    //   Accessories
    // </li>
    // <li class="dropdown dropdown-5">
    //   Sales
      
    // </li>
