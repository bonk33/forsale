import React from 'react';
import './ListingCard.css';

const ListingCard = ({ name, image, price, link, category, postedSince, postedBy }) => (
    <div className="listing-card">
        <div>
            <div className="listing-card-image"> 
                <img src={image} alt="listing" className="listing-photo"/>
            </div>
            <div className="listing-card-details">
                <span className="listing-card-price">GH&#x20B5; {price}</span>
                <h3 className="listing-card-name"><a className="listing-card-link" href={link}>{name}</a></h3>
                <span className="listing-card-category"><a href="/" className="listing-category-link">{category}</a></span>    
            </div>
            <div className="listing-card-foot">
                Posted <span>{postedSince}</span> days ago by <span><a href="/">{postedBy}</a></span>
            </div>
        </div> 
    </div>
)

export default ListingCard;