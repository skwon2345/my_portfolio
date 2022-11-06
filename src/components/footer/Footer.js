import React from 'react'
import './footer.css';
import { FaFacebook } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import {BsLinkedin} from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href='#' className="footer__logo">Sukkwon On</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#services">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.facebook.com/profile.php?id=100006834730376"><FaFacebook/></a>
        <a href="https://www.instagram.com/sklasssssss/"><FiInstagram/></a>
        <a href="https://www.linkedin.com/in/sukkwon-on-b99147112/"><BsLinkedin/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Sukkwon On. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer