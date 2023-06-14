import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'


const Footer = () => {
  return (
    <section id='footer'>
      <div className='footer_container'>
        <a href='#' className='footer_logo'>Angelo Martino</a>

        <ul className='permalinks'>
          <li><a href='#'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#skills'>Skills</a></li>
          <li><a href='#portfolio'>Works</a></li>
          <li><a href='#contacts'>Contacts</a></li>
        </ul>

        <div className='footer_socials'>
          <a href=''><BsGithub/></a>
          <a href=''><BsInstagram/></a>
          <a href=''><BsLinkedin/></a>
        </div>

        <div className='footer_copyright'>
          <small>&copy; Angelo Martino. All rights reserved.</small>
        </div>
      </div>
    </section>
  )
}

export default Footer