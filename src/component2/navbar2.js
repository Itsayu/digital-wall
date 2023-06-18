import React from 'react';
import './navbar2.css';
import logo from './logo2.png';
import { ArrowBack, Search, Bookmark } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <nav>
      <div className="navbar-container1">
        <div className="left1">
          <ArrowBack className="back-icon" onClick={handleGoBack} />
          <img src={logo} alt="Logo" className="logo" />
          <h1 className="title">title</h1>
        </div>
        <div className="right1">
          <Search className="search-icon1" />
          <div className="line"></div>
          <Bookmark className="bookmark-icon" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
