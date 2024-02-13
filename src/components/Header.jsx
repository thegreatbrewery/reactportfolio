import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../images/my logo.png'

function Header() {
  const menuIconRef = useRef(null);
  const navbarRef = useRef(null);

  const handleMenu = () => {
    menuIconRef.current.classList.toggle('bx-x');
    navbarRef.current.classList.toggle('active');
  };

  return (
    <header className="header">
      <Link to='/' className="logo"><img src={logo} alt="logo"/></Link>

      <nav className="navbar" ref={navbarRef}>
        <NavLink to='/' className='nav-link'>Home</NavLink>
        <NavLink to='/about' className='nav-link'>About</NavLink>
        <NavLink to='/services' className='nav-link'>Services</NavLink>
        <NavLink to='/portfolio' className='nav-link'>Portfolio</NavLink>
        <NavLink to='/contact' className='nav-link'>Contact</NavLink>
      </nav>

      <div className="bx bx-menu" id="menu-icon" ref={menuIconRef} onClick={handleMenu}></div>
    </header>
  );
}

export default Header;
