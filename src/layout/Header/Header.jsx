import React from 'react'
import { NavLink } from 'react-router-dom'
import "./header.css"

function Header() {
  return (
    <>
    <header className="header">
      <div className="header-container">
       
        <div className="logo">Exclusive</div>

        
        {/* <nav className="nav-links">
          <a href="#home" className="nav-link active">Home</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#signin" className="nav-link">Sign in</a> */}
        {/* </nav> */}


       <ul className="nav-links">
  <li>
    <NavLink to="/">Home</NavLink>
  </li>

  <li>
    <NavLink to="/contact">Contact</NavLink>
  </li>

  <li>
    <NavLink to="/about">About</NavLink>
  </li>

  <li>
    <NavLink to="/signin">Sign in</NavLink>
  </li>
</ul>


       
        <div className="header-actions">
          <div className="search-box">
            <input 
              type="text" 
              placeholder="What are you looking for?" 
            />
          </div>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header