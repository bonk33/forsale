import React from 'react';
import './DetailListing.css';

const DetailListing = ({ name, image, price, link, category, postedSince, postedBy, location }) => (
    <div className="detail-listing-card">
        <div className="detail-listing-card-image"> 
            <img src={image} alt="listing" className="detail-listing-photo"/>
        </div>
        <div className="detail-listing-right">
            <div className="detail-listing-card-details">
                <span className="detail-listing-card-price">GH&#x20B5; {price}</span>
                <h3 className="detail-listing-card-name"><a className="detail-listing-card-link" href={link}>{name}</a></h3>
                <span className="detail-listing-card-category"><a href="/" className="detail-listing-category-link">{category}</a></span>    
            </div>
            <div className="detail-listing-card-foot">
                Posted <span>{postedSince}</span> days ago by <span><a href="/">{postedBy}</a></span> in <span>{category}</span> from <span>{location}</span>
            </div>
        </div>
    </div>
)

export default DetailListing;