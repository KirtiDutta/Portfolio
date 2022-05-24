//contains social media buttons 
import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'
import {SiCodingninjas} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blank"><BsLinkedin /></a>
        {/* target=_blank is to open linkedin in new tab */}
        <a href="https://github.com" target="_blank"><FaGithub /></a>
        <a href="https://leetcode.com" target="_blank"><SiLeetcode /></a>
        <a href="https://codingninjas.com/codestudio" target="_blank"><SiCodingninjas /></a>
    </div>
  )
}

export default HeaderSocials