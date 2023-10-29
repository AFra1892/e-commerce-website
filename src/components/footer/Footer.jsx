import React from 'react'
import './footer.css'
const Footer = () => {
  return (
        <div class="shoe__footer ">
            <div class="footer-container">
            <div class="footer-content">
                <h1>Join Our Newsletter</h1>
                <p>Get E-mail updates about our latest shop and <span>special offers</span></p>
            </div>
            <div class="input-group">
                <input type="email" class="input" id="Email" name="Email" placeholder="Your Email Address" autocomplete="off"/>
                <input class="button--submit" value="Sign Up" type="submit"/>
            </div>
        </div>
    </div>
    )
}

export default Footer