import React from 'react';
import './footer.css';
import gpt3Logo from '../../assets/Logo.svg';

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
        <div className="gpt3__footer-heading"> 
          <h1 className="gradien__text">Do you want to step in to the future before others</h1>
        </div>

        <div className="gpt3__footer-btn">
            <p>Reset Early Access</p>
        </div>

        <div className="gpt3__footer-links">
          <div className="gpt3__footer-links_logo">
              <img src={gpt3Logo} alt="logo" />
              <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
          </div>

          <div className="gpt3__footer-links_div">
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>

          <div className="gpt3__footer-links_div">
            <h4>Company</h4>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
          

          <div className="gpt3__footer-links_div">
            <h4>Get in touch</h4>
            <p>No.45 - lane 1 - Street Minh Khai - District HaiBaTrung - HaNoi city </p>
            <p>0394963695</p>
            <p>son26072001@gmail.com</p>
          </div>

          <div className="gpt3__footer-links_div">
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>
        </div>

        <div className="gpt3__footer-copyright"> 
            <p>© 2023 Project By LG <strong>All rights reserved</strong> </p>
        </div>
    </div>
  )
}

export default Footer