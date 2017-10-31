import React from 'react';
import FeaturedListings from '../FeaturedListings/FeaturedListings';
import CategoryPanel from '../CategoryPanel/CategoryPanel';


import './Homepage.css';
import { categories } from '../../mockdata/categorydata';

const Homepage = () => (
    <div className="homepage container">
        <div className="homepage-side">
            <CategoryPanel />
        </div>
        <div className="homepage-main">
            {categories.map((cat) => <FeaturedListings heading={cat.name}/>)}
        </div>
    </div>
)

export default Homepage;