import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <NavLink to="/" exact="true" activeclassname="active">Home</NavLink>
    {' '}
    <NavLink to="/details/1" activeclassname="active">Details</NavLink>
  </nav>
);

export default Navbar;
