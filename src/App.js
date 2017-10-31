import React, { Component } from "react";
import { BrowserRouter as Router, Link} from 'react-router-dom';
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import ProductPage from './components/ProductPage/ProductPage';
import Footer from './components/Footer/Footer';
import './App.css';

import FeaturedListings from './components/FeaturedListings/FeaturedListings';


import product from './mockdata/productdata';



export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Router>
          <div className="page-content">
            <Homepage />
            {/*<ProductPage 
              name={product.name}
              image={product.image}
              price={product.price}
              category={product.category}
              postedSince={product.postedSince}
              postedBy={product.postedBy}
              location={product.location} 
              description={product.description}
            />
            <FeaturedListings heading="Related Listings"/>*/}
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}
