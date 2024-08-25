import React from 'react';
import './Footer.css'; // Ensure this path is correct for your project

const Footer = () => {
  return (
    <footer className="footer_main">
      <div className="footer-left">
        <h3>The world of code</h3>
        <p className="footer-links">
          <a href="#">Home</a> ·
          <a href="#">Site map</a> ·
          <a href="#">Careers</a> ·
          <a href="#">About us</a> ·
          <a href="#">Faq</a> ·
          <a href="#">Contact</a>
        </p>
        <p className="footer-company-name">The world of code &copy; 2024</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker" aria-hidden="true"></i>
          <p><span>Bakers Street</span> London, UK</p>
        </div>

        <div>
          <i className="fa fa-phone" aria-hidden="true"></i>
          <p>+917607567662</p>
        </div>

        <div>
          <i className="fa fa-envelope" aria-hidden="true"></i>
          <p><a href="mailto:theworldofcodekk.com">techbuzz@gmail.com</a></p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          Welcome to the world of opensource contribution
        </p>
        <div className="footer-icons">
          <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
          <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
          <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
          <a href="#"><i className="fa fa-github" aria-hidden="true"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
