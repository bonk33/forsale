import React from 'react';
import { categories } from '../../mockdata/categorydata';

import './CategoryPanel.css';
const CategoryPanel = () => (
    <div className="category-panel">
        <h4 className="category-panel-heading">Categories</h4>
        <ul className="category-panel-items">
            {categories.map((cat) => <li key={cat.name} className="category-panel-item"><a className="category-panel-link" href={cat.link}>{cat.name} ({cat.number})</a></li>)}
        </ul>
    </div>
);

export default CategoryPanel;