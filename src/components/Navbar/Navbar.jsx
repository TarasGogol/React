import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
 
const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink className = { navData => navData.isActive ? s.activeLink : s.item } to="/profile">Profile</NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink className={ navData => navData.isActive ? s.activeLink : s.item } to="/dialogs">Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={ navData =>navData.isActive ? s.activeLink : s.item } to="/news">News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={ navData =>navData.isActive ? s.activeLink : s.item } to="/music">Music</NavLink>
      </div>
        <div className={s.item}>
            <NavLink className={ navData =>navData.isActive ? s.activeLink : s.item } to="/users">Users</NavLink>
        </div>
      <div className={s.item}>
        <NavLink className={ navData =>navData.isActive ? s.activeLink : s.item } to="/settings">Setting</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
