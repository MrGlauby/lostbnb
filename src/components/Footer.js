import React from 'react'
import { NavLink, Link } from "react-router-dom";
import "../styles/Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFaceAngry } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import FooterNavLinks from './FooterNavLinks';


export default function Footer() {
  const footerLinks = [
    {title: "About us", 
    linkText: ["About us", "Features", "News", "Imprint"], 
    to: ["/about", "/features", "/news", "/imprint"]},
    {title: "Company", 
    linkText: ["Why lostbnb", "Partner with us", "FAQ", "Blog"], 
    to: ["/why", "/partner", "/faq", "/blog"]},
    {title: "Support", 
    linkText: ["Account", "Support center", "Feedback", "Contact us"], 
    to: ["/account", "/support", "/feedback", "/contact"]}
    
  ]

  return (
    <>
      <div className="footerWrapper">
        <div className="footerLinksleft">
              <Link className="logoLinkFooter">
                  <img src={require("../img/logo-big-pink.png")} alt="LostBnb Logo" />
              </Link>
              <div className="footertext">
                <p>Weiskopffstraße 16</p>
                <p>12459 Berlin, Deutschland</p>
              </div>
              <div className="socialLinks">
                  <a href="www.facebook.com"><FontAwesomeIcon icon={faFaceAngry} style={{color: "#d3365f",}} /></a>                
                  <a href="www.instagram.com"><FontAwesomeIcon icon={faEnvelope} style={{color: "#d3365f",}} /></a>
                  <a href="www.youtube.com"><FontAwesomeIcon icon={faFaceAngry} style={{color: "#d3365f",}} /></a>
              </div>
          </div>
            <div className="footerColumns">
              {footerLinks.map((footerColumn) => {
                return <FooterNavLinks className="footerColumn" footerColumn = {footerColumn} />
              })}
            </div>
            <div className="newsletter">
              <h2>Newsletter</h2>
              <p>Subscribe to our newsletter and get exciting offers.</p>
              <form action="">
                <input type="text" placeholder="Enter your email address"/>
                <button type='submit'><FontAwesomeIcon icon={faPaperPlane} style={{color: "#ffffff",}} /></button>
              </form>
            </div>
        </div>
    </>
  )
}
