import React from 'react';
import './navbar2.css';
import logoImage from './logo2.png';
import { ArrowBack, Search, Bookmark} from '@mui/icons-material';

const NavBar = () => {
    return (
        <nav>
            <div className="navbar-container1">
                <div className="left1">
                    <ArrowBack className="back-icon" />
                    <img src={logoImage} alt="Logo" className="logo" />
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