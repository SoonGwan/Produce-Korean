import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MainNav.scss';
function MainNav() {
  return (
    <div className="NavCome">
      <ul>
        <Link to="/main" style={{ textDecoration: 'none' }}>
          <li>메인</li>
        </Link>
        <Link to="/about" style={{ textDecoration: 'none' }}>
          <li>여라가지</li>
        </Link>
        <Link to="/test" style={{ textDecoration: 'none' }}>
          <li>다른거</li>
        </Link>
      </ul>
    </div>
  );
}

export default MainNav;
