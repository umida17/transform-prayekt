import React from 'react'
import logo from '../../assets/Logo (1).svg'

const Navbar = () => {
  return (
    <div>
      <div className="header">
        <div className="container">
            <div className="navbar-container">
                <img src={logo} alt="" />

                <ul>
                    <li>Home</li>
                    <li>Service</li>
                    <li>Company</li>
                    <li>Career</li>
                    <li>Blog</li>
                    <li>Contact us</li>
                    <li>Clone project</li>
                     
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
