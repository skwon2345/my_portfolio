import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/sukkwon-on-b99147112/' target="_blank"><BsLinkedin /></a>
        <a href='https://github.com/skwon2345' target="_blank"><FaGithub /></a>
        <a href='http://linkedin.com' target="_blank"></a>
    </div>
  )
}

export default HeaderSocials