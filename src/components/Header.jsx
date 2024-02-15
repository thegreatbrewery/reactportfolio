import React, { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../images/my logo.png'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuIconRef = useRef(null);
  const navbarRef = useRef(null);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      navbarRef.current.classList.add('active');
    } else {
      navbarRef.current.classList.remove('active');
    }
  };

  const handleNavLinkClick = () => {
    setMenuOpen(false);
    navbarRef.current.classList.remove('active');
  };

  return (
    <header className="header">
      <Link to='/' className="logo"><img src={logo} alt="logo"/></Link>

      <nav className={`navbar ${menuOpen ? 'active' : ''}`} ref={navbarRef}>
        <NavLink to='/' className='nav-link' onClick={handleNavLinkClick}>Home</NavLink>
        <NavLink to='/about' className='nav-link' onClick={handleNavLinkClick}>About</NavLink>
        <NavLink to='/services' className='nav-link' onClick={handleNavLinkClick}>Services</NavLink>
        <NavLink to='/portfolio' className='nav-link' onClick={handleNavLinkClick}>Portfolio</NavLink>
        <NavLink to='/contact' className='nav-link' onClick={handleNavLinkClick}>Contact</NavLink>
      </nav>

      <div className="bx bx-menu" id="menu-icon" ref={menuIconRef} onClick={handleMenu}></div>
    </header>
  );
}

export default Header;
