import React, { Component } from 'react';
import './Searchbar.css';
import blueSearchIcon from '../../assets/icons/blue-search.svg';
import fadedSearchIcon from '../../assets/icons/faded-search.svg';


class Searchbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: false,
            value: ''
        }
        this.handleBlur = this.handleBlur.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
    }

    handleFocus() {
        this.setState({ 
            focused: true 
        })
    }

    handleBlur() {
        this.setState({
            focused: false
        })
    }

    render() {
        return (
            <input 
            type="text" 
            style={{backgroundImage: this.state.focused ? `url(${blueSearchIcon})` : `url(${fadedSearchIcon})`}}
            placeholder="Search" 
            className="search"
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}/>
        )
    }
} 

export default Searchbar;