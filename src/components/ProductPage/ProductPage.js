import React from 'react';
import './ProductPage.css';

const ProductPage = ({ name, image, price, link, category, postedSince, postedBy, location, description }) => (
    <div className="product-page container">
        <div className="product-heading">
            <h1 className="product-title">{name}</h1>
            <div className="product-info">
                Posted by <span>{postedBy.name}</span> in <span>{category}</span> from <span>{location}</span>, <span>{postedSince}</span> days ago
            </div>
        </div>
        <div className="product-content">
            <div className="product-main col-md-8">
                <div className="product-image"><img src={image} alt={name} className="product-photo"/></div>
                <div className="product-description">
                    <h4 className="product-description-heading">Description</h4>
                    <p className="product-description-content">{description}</p>
                </div>
            </div>
            <div className="product-side col-md-4">
                <div className="product-price">GH&#x20B5; {price}</div>
                <div className="product-poster-details">
                    <h4 className="product-poster-detail-heading">Contact details</h4>
                    <ul className="product-poster-detail-list">
                        <li className="product-poster-detail">{postedBy.name}</li>
                        <li className="product-poster-detail">{postedBy.phoneNumber}</li>
                        <li className="product-poster-detail">{postedBy.email}</li>
                    </ul>
                </div>
                <div className="map"><h1>Placeholder for location map</h1></div>
            </div>
        </div>
        <h3>Share this ad</h3>
        <h3>Favorite this ad</h3>
    </div>
);

export default ProductPage;