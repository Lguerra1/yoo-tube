import React, { Component } from 'react'

export default class SearchBar extends Component {
    state = {
        term: ''
    }

    inputChange = (e) => {
        this.setState({ term: e.target.value})
    }
    onFormSubmit = (e) => {
        e.preventDefault();

        // TODO: Make sure we call callback from parent component
    }
    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input value={this.state.term} type="text" onChange={this.inputChange} />
                    </div>

                </form>
            </div>
        )
    }
}