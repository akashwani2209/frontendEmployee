import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Employee Form</Link>
        </li>
        <li>
          <Link to="/table">Employee Table</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
