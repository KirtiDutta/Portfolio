import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsJournalBookmarkFill} from 'react-icons/bs'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'

const Nav = () => {
  return (
    <nav>
      <a href='#'><AiOutlineHome /></a>
      {/* # ka mtlb sbse upr lejao */}
      <a href='#about'><AiOutlineUser /></a>
      {/* #about pe phochane ke liye pehle id="" deni pdegi file me tag ke andar */}
      <a href='#experience'><BsJournalBookmarkFill /></a>
      <a href='#services'><RiServiceLine /></a>
      <a href='#contact'><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav