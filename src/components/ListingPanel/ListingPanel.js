import React, { Component } from 'react';
import DetailListing from './DetailListing/DetailListing';
import CategoryPanel from '../CategoryPanel/CategoryPanel';
import './ListingPanel.css';

import { listings } from '../../mockdata/listingsdata';

export default class ListingPanel extends Component {
    render() {
        console.log(listings);
        return (
            <div className="listing-panel container">
                <div className="panel-content container">
                    <div className="panel-main col-md-4">
                        <CategoryPanel />
                    </div>
                    <div className="panel-side col-md-8">
                        {listings.map((listing, index) => <DetailListing key={index} name={listing.name} image={listing.image} price={listing.price} link={listing.link} category={listing.category} postedBy={listing.postedBy} postedSince={listing.postedSince} location={listing.location}/> )}
                    </div>
                </div>
            </div>
        );
    }
}