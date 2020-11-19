import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import Navbar from './navbar'
import Sidebar from './sidebar'

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false)
  const toggleOpen = () => {
    setOpen(!open)
  }
  return (
    <Fragment>
      <Navbar toggleOpen={toggleOpen} />
      <Sidebar open={open} toggleOpen={toggleOpen} />
      {children}
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
