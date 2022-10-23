import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../constexts/UserContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
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
        {user?.uid ? (
          <button onClick={logOut} className='btn-logOut'>
            Log Out
          </button>
        ) : (
          <>
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
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
