import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import cart from '../../assets/cart.svg'

const Navbar = () => {
     
  return (
    <div className='navbar'>
      <div className='logo'>
            <span><NavLink to='/'>Food Factory</NavLink></span>
      </div>
      <div className='mid'>
            <ul>
                  <li ><NavLink to='/starter' onClick={()=>{window.scrollTo({top:0,behavior:'instant'})}}>STARTER</NavLink></li>
                  <li><NavLink to='/veg' onClick={()=>{window.scrollTo({top:0,behavior:'instant'})}}>VEG</NavLink></li>
                  <li><NavLink to="/nonveg" onClick={()=>{window.scrollTo({top:0,behavior:'instant'})}}>NON-VEG</NavLink></li>
            </ul>
      </div>
      <div className='cart'>
            <NavLink to="/cart"><img src={cart}/></NavLink>
      </div>
    </div>
  )
}

export default Navbar