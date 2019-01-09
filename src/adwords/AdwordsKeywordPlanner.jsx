import React, { Component, Fragment } from 'react';
import logo from '../logo.svg';
import '../App.css';

class AdwordsKeywordPlanner extends Component {
    render() {
        return (
            <div className="flexBox">
                <div className="inpDiv">
                    <input name="input" onChange={this.props.onHandleChange} type="text" />
                    <button onClick={this.props.onClickHandler}>Search</button>
                </div>
            </div>
        )
    }
}

export default AdwordsKeywordPlanner;