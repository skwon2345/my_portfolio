import React from 'react'
import './about.css';
import ME from '../../assets/me-about.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className='about__contents'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Academic</h5>
              <small>
                <ul>
                  <li><span>&#8226;</span> 4th Year</li>
                  <li><span>&#8226;</span> Computer Science</li>
                  <li><span>&#8226;</span> Simon Fraser University</li>
                </ul>
              </small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Interests</h5>
              <small>
                <ul>
                  <li><span>&#8226;</span> Backend Developement </li>
                  <li><span>&#8226;</span> Infrastructure / Devops </li>
                  <li><span>&#8226;</span> Auto Stock Trading </li>
                </ul>
              </small>
            </article>
          </div>
          <p>
            Hello, my name is Sukkwon On, and I am a backend engineer, who has some of individual experience on frontend.
            <br />
            <br />
            I am also interested in IaaC, Devops and Stock and Bitcoin auto trading.
          </p>
          <a href="#contact" className='btn btn-primary'>Lets' Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About