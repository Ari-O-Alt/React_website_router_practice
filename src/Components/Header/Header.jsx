import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <div className='headerContainer'>
      <NavLink exact to='/' className='logo'>
        <h2>REACT ROUTER WEBSITE</h2>
      </NavLink>
      <ul className='navList '>
        <NavLink exact to='/' className='navItem' activeClassName='current'>
          HOME
        </NavLink>
        <NavLink exact to='/portfolio' className='navItem' activeClassName='current'>
          PORTFOLIO
        </NavLink>
        <NavLink exact to='/contact' className='navItem' activeClassName='current'>
          CONTACT
        </NavLink>
      </ul>
    </div>
  );
}

export default Header;
