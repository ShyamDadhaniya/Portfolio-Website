import React from 'react'
import Download from '../header/Download'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'
import './Header.css'
const Header = () => {
  return (
<header>
<div className='d-flex flex-column justify-content-center align-items-center header__container' >
<h5>Hello I'm</h5>
<h1>Shyam Dadhaniya</h1>
<h5>React Developer</h5>
</div>
<Download/>
<HeaderSocial/>
<img className='me' src={ME} alt="Me"/>
<a href='#contact' className='scroll__down'>Scroll Down</a>
</header>  )
}

export default Header