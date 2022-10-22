import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className='header'>
      <img src={logo} alt='' />
      <div className='nav-items'>
        <NavLink
          to='/'
          className={({ isActive }) => (isActive ? "active" : undefined)}>
          Shop
        </NavLink>
        <NavLink
          to='/order'
          className={({ isActive }) => (isActive ? "active" : undefined)}>
          Order
        </NavLink>
        <NavLink
          to='/inventory'
          className={({ isActive }) => (isActive ? "active" : undefined)}>
          Inventory
        </NavLink>
        <NavLink
          to='/about'
          className={({ isActive }) => (isActive ? "active" : undefined)}>
          About
        </NavLink>
        <NavLink
          to='/login'
          className={({ isActive }) => (isActive ? "active" : undefined)}>
          Login
        </NavLink>
        <NavLink
          to='/signup'
          className={({ isActive }) => (isActive ? "active" : undefined)}>
          SignUP
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
