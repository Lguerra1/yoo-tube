import React, { Component } from 'react'
import SearchBar from '../components/SearchBar';

export default class App extends Component {
    onTermSubmit = (term) => {

    }
    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
            </div>
        )
    }
}