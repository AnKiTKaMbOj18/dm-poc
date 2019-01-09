import React, { Component, Fragment } from 'react';
import logo from '../logo.svg';
import './Count.css';

class CountKeywordPlanner extends Component {
    render() {
        return (
            <div className="flexBox">
                <div className="selDiv">
                    {/* <input onChange={this.props.onHandleChange} type="text" /> */}

                    <select value={this.props.selectCategoryInput} name="selectCategoryInput" onChange={this.props.onHandleCategoryChange}>
                        <option>Select Category</option>
                        <option value="authPermissions">AuthPermissions</option>
                        <option value="flashContent">FlashContent</option>
                        <option value="manyToOneRedirect">manyToOneRedirect</option>
                        <option value="notFollowed">NotFollowed</option>
                        <option value="notFound">NotFound</option>
                        <option value="other">Other</option>
                        <option value="roboted">Roboted</option>
                        <option value="serverError">ServerError</option>
                        <option value="soft404">Soft404</option>
                    </select>

                    <select value={this.props.selectPlatformInput} name="selectPlatformInput" onChange={this.props.onHandlePlatformChange}>
                        <option>Select Platform</option>
                        <option value="web">Web</option>
                        <option value="mobile">Mobile</option>
                        <option value="smartphoneOnly">SmartPhoneOnly</option>
                    </select>

                    <select value={this.props.selectLatestInput} name="selectLatestInput" onChange={this.props.onHandleLatestCountChange}>
                        <option>Select Latest Count</option>
                        <option value="true">True</option>
                        <option value="false">False</option>
                    </select>

                    <button onClick={this.props.onClickHandler}>Filter</button>
                </div>
            </div>
        )
    }
}

export default CountKeywordPlanner;