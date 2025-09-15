import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <Link to="/" className="logo">
                     ᑕᖇᗩᘔE
                  </Link>
            <p> Our oversized clothing collection is designed for those who love comfort without compromising style. 
            Whether it's streetwear vibes, casual fits, or trendy layers — we’ve got it oversized, just the way you like it.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-212-456-7890</li>
                <li>contact@Craze.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Craze.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
