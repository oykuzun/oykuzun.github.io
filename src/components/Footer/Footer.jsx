import React from 'react'
import './footer.css'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { SiDevpost } from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Oyku Uzun</a>
      <div className='footer__socials'>
        <a href='https://linkedin.com/in/oyku-uzun'><BsLinkedin /></a>
        <a href='https://github.com/oykuzun'><BsGithub /></a>
        <a href='https://devpost.com/oykuzun'><SiDevpost /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Oyku Uzun</small>
      </div>
    </footer>
  )
}

export default Footer
