import React from 'react';
import Header from '../Header/Header';
import Searchbar from '../Searchbar/Searchbar';
import './HomepageHero.css';

const HomepageHero = () => {
    return (
        <div className="hero">
            <Header page="home"/>
            <div className="hero-center">
                <h1>forsale.com.gh</h1>
                <div className="homepage-searchbar">
                    <Searchbar />
                </div>
            </div>
        </div>
    )
}

export default HomepageHero;