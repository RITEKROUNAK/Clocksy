import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import "./header.css";
const Header = () => {
const [toggleMenu, setToggleMenu] = useState(false);

return (
  <div className="navbar">
    <div className="navbar-links">
      <div className="navbar-links-logo">
        <h2>Clocksy</h2>
      </div>
      <div className="navbar-links-container">
      <p><a href="#cro">Men</a></p>
        <p><a href="#aim">Women</a></p>
        <p><a href="#sc">Contact</a></p>
        <p><a href="#a">About Us</a></p>
      </div>
    </div>
    <div className="navbar-menu">
      {toggleMenu
        ? <RiCloseLine color="#9B773C" size={27} onClick={() => setToggleMenu(false)} />
        : <RiMenu3Line color="#9B773C" size={27} onClick={() => setToggleMenu(true)} />}
      {toggleMenu && (
      <div className="navbar-menu-container scale-up-center">
        <div className="navbar-menu-container-links">
        <p><a href="#cro">Men</a></p>
        <p><a href="#aim">Women</a></p>
        <p><a href="#sc">Contact</a></p>
        <p><a href="#a">About Us</a></p>
        </div>
      </div>
      )}
    </div>
  </div>
);
};

export default Header;