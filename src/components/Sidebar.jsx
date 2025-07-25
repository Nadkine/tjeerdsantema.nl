import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFilm, FaImages, FaIdCard, FaShareAlt, FaFolderOpen, FaUserFriends } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => (
  <nav className="sidebar">
    {/* <NavLink to="/" className="icon"> <FaFilm /> Animation</NavLink> */}
    <NavLink to="/portfolio" className="icon"> <FaFolderOpen /> Portfolio</NavLink>
    <NavLink to="/cv" className="icon"> <FaIdCard /> CV</NavLink>
    <NavLink to="/social" className="icon"> <FaUserFriends /> Social</NavLink>
  </nav>
);

export default Sidebar;
