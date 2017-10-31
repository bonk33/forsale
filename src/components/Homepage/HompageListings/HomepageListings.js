import React, { Component } from 'react';
import DetailListing from '../../ListingPanel/DetailListing/DetailListing';

import { listings } from '../../../mockdata/listingsdata';

class HomepageListings extends Component {
    render() {
        return (
        <div className="homepage-listings">
            <h2 className="hp-listing-heading">Hot Listings</h2>
            <div className="hp-listing-tabs">
                <button className="highlight tab">Popular Listings</button>
                <button className="tab">Recent Listings</button>
            </div>
            {listings.map((listing, index) => <DetailListing key={index} name={listing.name} image={listing.image} price={listing.price} link={listing.link} category={listing.category} postedBy={listing.postedBy} postedSince={listing.postedSince} location={listing.location}/> )}
        </div>
        );
    }
}

export default HomepageListings;