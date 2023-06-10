import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import me from '../../assets/me.png'

const header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello I'm</h5>
        <h2>Angelo Martino</h2>
        <h5 className='Text-Light'>Computer and System Engineer</h5>
        <CTA />
        <HeaderSocials/>

        <div className='me'>
          <img src={me} alt='me'/>
        </div>

        <a href='#contacts' className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header