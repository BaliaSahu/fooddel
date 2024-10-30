// import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import face from '../../assets/facebook.svg'
import insta from '../../assets/insta.svg'
import youtube from '../../assets/youtube.svg'


const Footer = () => {
  return (
    <div className='footer'>
      <div className='logo'>
            <div>
                  <h2>Food Factory</h2>
            </div>
            <div id="ul">
                  <Link to='/contact'><li>Contact us</li></Link>
                  <Link to='/cart'><li>Order</li></Link>
                  <Link><li>Services</li></Link>
            </div>
      </div>
      <div className='social'>
            <img src={insta}  />
            <img src={face} />
            <img src={youtube} />
      </div>
      <div className='copy'>
            {/* <hr /> */}
            <p>copyrightReserved|BaliaSahu@2024</p>
      </div>
    </div>
  )
}

export default Footer