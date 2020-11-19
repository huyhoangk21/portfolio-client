import React from 'react'
import { Link } from 'gatsby'

const links = [
  { id: 1, url: '/', name: 'Home' },
  { id: 2, url: '/resume', name: 'Resume' },
  { id: 3, url: '/projects', name: 'Projects' },
  { id: 4, url: '/blogs', name: 'Blog' },
  { id: 5, url: '/contact', name: 'Contact' },
]

const renderedLinks = links.map(({ id, url, name }) => (
  <li>
    <Link key={id} to={url}>
      {name}
    </Link>
  </li>
))

const NavLinks = () => {
  return <ul>{renderedLinks}</ul>
}

export default NavLinks
