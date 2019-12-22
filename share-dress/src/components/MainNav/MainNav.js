import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MainNav.scss';
function MainNav() {
  return (
    <div className="NavCome">
      <ul>
        <Link to="/main" style={{ textDecoration: 'none' }}>
          <li>Main</li>
        </Link>
        <Link to="/seoul" style={{ textDecoration: 'none' }}>
          <li>Seoul</li>
        </Link>
        <Link to="/daejeon" style={{ textDecoration: 'none' }}>
          <li>Daejeon</li>
        </Link>
        <Link to="/daegu" style={{ textDecoration: 'none' }}>
          <li>Daegu</li>
        </Link>

        <Link to="/busan" style={{ textDecoration: 'none' }}>
          <li>Busan</li>
        </Link>
      </ul>
    </div>
  );
}

export default MainNav;
