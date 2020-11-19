import React, { useState } from 'react'
import { Link } from 'gatsby'
import { FaAlignJustify } from 'react-icons/fa'
import './styles/navbar.scss'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='logo' />
        <div className='nav-links'>
          <ul>{renderedNavLinks}</ul>
        </div>
        <button
          type='button'
          className='toggle-btn'
          onClick={() => setOpen(!open)}
        >
          <FaAlignJustify />
        </button>
      </div>
    </nav>
  )
}

const links = [
  { id: 1, url: '/', name: 'Home' },
  { id: 2, url: '/resume', name: 'Resume' },
  { id: 3, url: '/projects', name: 'Projects' },
  { id: 4, url: '/blogs', name: 'Blog' },
  { id: 5, url: '/contact', name: 'Contact' },
]

const renderedNavLinks = links.map(({ id, url, name }) => (
  <li>
    <Link key={id} to={url}>
      {name}
    </Link>
  </li>
))

export default Navbar
