import React from 'react';
import { listings } from '../../mockdata/listingsdata';
import ListingCard from '../ListingCard/ListingCard';
import './FeaturedListings.css';


const FeaturedListings = ({heading}) => (
    <div className="featured-listings">
        <h3 className="featured-listings-heading">{heading}</h3>
        <div className="listings">
            {listings.slice(0, 3).map((listing, index) => <ListingCard key={index} name={listing.name} image={listing.image} price={listing.price} link={listing.link} category={listing.category} postedBy={listing.postedBy} postedSince={listing.postedSince}/> )}
        </div>
    </div>
)

export default FeaturedListings;
