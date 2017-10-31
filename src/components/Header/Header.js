import React from 'react';
import Searchbar from '../Searchbar/Searchbar';
import './Header.css';


const Header = ({ page }) => {
    return (
        <div className="header">
            <div className="container">
                <div className="logo col-md-2.5"><h1>forsale.com.gh</h1></div>
                <div className="search-bar col-md-5">
                    <Searchbar />
                </div>
                <a className="header-button col-md-1.5 post-listing" style={page ? {border: "1px solid white"} : null} href="/">Post an Ad</a>
                <a className="header-button col-md-1.5" href="/" style={page ? {color: "white"} : null}>Login</a>
                <a className="header-button col-md-1.5" style={page ? {color: "white"} : null}href="/">Register</a>
            </div>
        </div>
    )
}

export default Header;