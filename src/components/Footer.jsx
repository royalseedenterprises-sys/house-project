import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>RoyalSeed</h3>
          <p>Your trusted partner for modern Real Estate solutions and Building Materials</p>
        </div>

        <div className="footer-center">
          <h4>Quick Links</h4>
          <ul>
           <li> <Link to='/'>Home</Link></li>
          <li><Link to='about'>About</Link></li>  
            <li><Link to='contact'>Contact</Link></li>
            <li><Link to='blog'>Blog</Link></li>
          </ul>
        </div>

        <div className="footer-right">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">Instagram</a>
            <a href="https://royalseedenterprises@gmail.com" target="_blank" rel="noreferrer" aria-label="Gmail">Gmail</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} RoyalSeed. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
