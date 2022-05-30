import React from 'react'
import{AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillTwitterSquare} from 'react-icons/ai'
import "./Header.css"
const HeaderSocial = () => {
  return (
    <>
    <div className='header__social'>
        <a href='www.linkedin.com' target="_blank"><AiFillLinkedin/></a>
        <a href='www.github.com' target="_blank"><AiFillGithub/></a>
        <a href='www.twitter.com' target="_blank"><AiFillTwitterSquare/></a>
    </div>
    </>
  )
}

export default HeaderSocial