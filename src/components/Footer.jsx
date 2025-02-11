import React from 'react'
import './Footer.css'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footercontent">
            <div className="footer-cont-left">
                <img src={assets.logo} alt="" />
                <p>We’re passionate about delivering quality meals to your doorstep. Our commitment to excellence ensures that every bite is a delightful experience. Thank you for choosing us!</p>
                <div className="footer-icons">
                    <img src={assets.facebook_icon} alt="" /><img src={assets.twitter_icon} alt="" /><img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul><li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li></ul>
                </div>
            <div className="footer-content-right">
                <h2>Get in touch</h2>
                <ul><li>+1 223-45-678</li>
                <li>contact@tomato.com</li></ul>
            </div>
           
        </div>
    <hr />
    <p className='copyright'>&copy; 2025 Tomato. All rights reserved.</p>

    </div>
  )
}

export default Footer