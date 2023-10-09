// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

function Navbar() {
  return (
    <nav className='navbar'>
      <ul className='nav-list'>
        <li className='nav-item'>
          <Link className="nav-link" to="/blogs">Home</Link>
        </li>
        <li className='nav-item'>
          <Link to="/profile" className="nav-link" >Profile</Link>
        </li>
        <li className='nav-item'>
          <Link to="/signin" className="nav-link" >Sign In</Link>
        </li>
        <li className='nav-item'>
          <Link to="/signup" className="nav-link" >Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
