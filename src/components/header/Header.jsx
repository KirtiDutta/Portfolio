import React from 'react'
import './header.css'
import CTA from './CTA'
import PROFILE from '../../assets/Profile.jpeg'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Kirti Dutta</h1>
      <h5 className="text-light">4th Year CSE Graduate</h5>
      <CTA />  
      {/* CTA Contains CV and ContactMe Button */}
      <HeaderSocials />
      {/* HeaderSocials contain social media links and icons */}
      <div className='me'>
      <img src={PROFILE} alt="me" />
      {/* className='photu' */}
      </div>

      <a href="#contact" className='scroll__down'>Scroll Down</a>
      
      </div>
    </header>
  )
}

export default Header
