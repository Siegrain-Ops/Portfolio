import React from 'react'
import './contacts.css'
import {MdEmail} from 'react-icons/md'
import {useRef} from 'react';
import emailjs from 'emailjs-com';


const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v3lebwr', 'template_w5ia27f', form.current, '_8FIdCVk4oXtK0_oA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
    e.target.reset();
  };


  return (
    <section id='contacts'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contacts_container'>
        <div className='contacts_options'>
          <article className='contacts_option'>
            <MdEmail className='contacts_options-icon'/>
            <h4>Email</h4>
            <h5>angelo.martinopw@gmail.com</h5>
            <a href='mailto:angelo.martinopw@gmail.com' target='_blank'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required/>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contacts