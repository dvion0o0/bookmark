import React from 'react'
import "./Footer.scss"
import Logo from "../../images/footer-logo.svg"
import {FaFacebookSquare, FaTwitterSquare} from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
<div className="container footer-center">
    <div className="footer-header">
        <img src={Logo} alt="logo"/>
        <ul className="footer-links">
            <li><a href="/" className="footer-link">features</a></li>
            <li><a href="/" className="footer-link">pricing</a></li>
            <li><a href="/" className="footer-link">contact</a></li>
        </ul>
    </div>
   <div className="footer-icons">
       <FaFacebookSquare className="footer-btn"/>
       <FaTwitterSquare className="footer-btn"/>
   </div>
</div>
  </footer>
    )
}

export default Footer
