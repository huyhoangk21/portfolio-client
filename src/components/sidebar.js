import React from 'react'
import { GrClose } from 'react-icons/gr'
import './styles/sidebar.scss'
import NavLinks from '../constants/navlinks'

const SideBar = ({ open, toggleOpen }) => {
  return (
    <aside className={`sidebar ${open ? 'show' : ''}`}>
      <button type='button' className='toggle-btn' onClick={toggleOpen}>
        <GrClose />
      </button>
      <div className='sidebar-links'>
        <NavLinks />
      </div>
    </aside>
  )
}

export default SideBar
