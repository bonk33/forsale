import React, { Component } from 'react';
import './CategoryCard.css';

export default class CategoryCard extends Component {
    render() {
        const { name, image, link, numberOfItems } = this.props;
        return (
            <a className="category-card" style={{backgroundImage: `url(${image})`}} href={link}>
                <div className="category-card-center">
                    <h3 className="category-name">{name}</h3>
                    <h4 className="category-items-number">({numberOfItems})</h4>
                </div>
            </a>
        );
    }
}