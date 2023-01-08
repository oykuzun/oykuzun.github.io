import React from 'react'
import './header.css'
import HeaderOptions from './HeaderOptions'
import Socials from './Socials'
import ME from './../../assets/portrait.jpg'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hi there! I'm</h5>
        <h1>Oyku Uzun</h1>
        <h5 className='text-light'>Computer Engineering Student at Unversity of Waterloo</h5>
        <HeaderOptions />
        <Socials />

        <div className='me'> 
            <img src = {ME} alt = "Oyku Uzun"/>

        </div>
        <a href='#contact' className='scroll__down'>Scroll down to learn more about me</a>
      </div>
    </header>
  )
}

export default Header