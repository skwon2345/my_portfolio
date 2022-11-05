import React, { useRef } from 'react'
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {BsInstagram} from 'react-icons/bs';
import {BsMessenger} from 'react-icons/bs';
import emailjs from '@emailjs/browser';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gvu6qml', 'template_0wrj66v', form.current, 'KwCxLPDymMKNRRg1C')
      .then((result) => {
          console.log(result.text);
          alert("Message Sent!");
      }, (error) => {
          console.log(error.text);
          alert("ERROR OCCURS!!!!! PLEASE TRY OTHER MESSAGE TOOLS!!!!!");
      });
      <>
        
      </>
      

      e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>skwon2345@gmail.com</h5>
            <a href="mailto:skwon2345@gmail.com" target="_blank" className='btn btn-primary'>Send Message</a>
          </article>
          <article className='contact__option'>
            <BsInstagram className='contact__option-icon'/>
            <h4>DM</h4>
            <h5>Sukkwon On</h5>
            <a href="https://instagram.com/m/sklasssssss" target="_blank" className='btn btn-primary'>Send Message</a>
          </article>
          <article className='contact__option'>
            <BsMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Sukkwon On</h5>
            <a href="https://m.me/100006834730376" target="_blank" className='btn btn-primary'>Send Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="10" placeholder='Type Message here.' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
        <Popup trigger={<button> Trigger</button>} position="right center">
          <div>Popup content here !!</div>
        </Popup>
      </div>
    </section>
  )
}

export default Contact