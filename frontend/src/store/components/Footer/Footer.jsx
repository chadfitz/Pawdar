import React from 'react';
import github from '../../../assets/github.png';
import linkedIn from '../../../assets/linkedin.png';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <h2>Created by Chad Fitzgerald</h2>
      <div className='footer-socials'>
        <a href='https://github.com/chadfitz' target="_blank"><img className='footer-socials-link' src={github} alt="github link" /></a>
        <a href="https://www.linkedin.com/in/chad-fitzgerald-956981ab/" target="_blank"><img className='footer-socials-link' src={linkedIn} alt="linkedIn link" /></a>
      </div>
    </div>
  )
}

export default Footer