import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { SiDevpost } from 'react-icons/si'

const Socials = () => {
  return (
    <div className='Socials'>
      <a href='https://linkedin.com/in/oyku-uzun' target='_blank' rel='noreferrer'><BsLinkedin /></a>
      <a href='https://github.com/oykuzun' target='_blank' rel='noreferrer'><BsGithub /></a>
      <a href='https://devpost.com/oykuzun' target='_blank' rel='noreferrer'><SiDevpost /></a>
    </div>
  )
}

export default Socials