import React from 'react'
import Resume from '../../assets/Oyku_Uzun_Resume.pdf'

const HeaderOptions = () => {
  return (
    <div className='header__options'>
      <a href={Resume} download className='btn'>R&#233;sum&#233;</a>
      <a href='#contact' className='btn btn-primary'>Reach Out!</a>
    </div>
  )
}

export default HeaderOptions