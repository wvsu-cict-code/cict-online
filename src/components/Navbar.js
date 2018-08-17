import React, { Component } from 'react'
import { Link } from 'react-static'
import brandIcon from '../assets/brandicon.svg'

class Navbar extends Component {
  render () {
    return (
      <nav className="flex items-center justify-between flex-wrap bg-white p-4 border-b">
        <Link to="/"><img className="fill-current h-8" src={brandIcon} alt="CICT Online Logo" /></Link>
      </nav>
    )
  }
}

export default Navbar
