import React from 'react'
import { FaAlignJustify } from 'react-icons/fa'

import './styles/navbar.scss'
import NavLinks from '../constants/navlinks'
const Navbar = ({ toggleOpen }) => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='logo' />
        <div className='nav-links'>
          <NavLinks />
        </div>
        <button type='button' className='toggle-btn' onClick={toggleOpen}>
          <FaAlignJustify />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
