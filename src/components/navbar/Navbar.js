import React from 'react';
import { useLocation } from 'react-router-dom';
import { FiMic, FiSettings, FiArrowLeft } from 'react-icons/fi';
import s from './style.module.css';

const Navbar = () => {
  const location = useLocation();
  const goBack = () => {
    window.history.back();
  };

  return (
    <nav className={s.navbar}>
      {location.pathname !== '/' && (
      <button type="button" onClick={goBack}>
        <FiArrowLeft />
      </button>
      )}
      <FiMic />
      <FiSettings />
    </nav>
  );
};
export default Navbar;
