import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ user, isNavOpen, toggleNav }) => {
  return (
    <nav className={`mainNavigation ${isNavOpen ? "open" : ""}`}>
      <ul>
        <li className="nav-user-info">
          <img src={user.avatarUrl} alt="Profile" className="nav-avatar" />
          <span>Welcome, {user.name}</span>
        </li>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
