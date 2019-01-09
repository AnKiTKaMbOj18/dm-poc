import React, { Component, Fragment } from 'react';
import logo from '../logo.svg';
import './Sample.css';

class SampleKeywordPlanner extends Component {
    render() {
        return (
            <div className="flexBox">
                <div className="inpDiv">
                    {/* <input onChange={this.props.onHandleChange} type="text" /> */}
                    <select value={this.props.selectCategoryInput} name="selectCategoryInput" onChange={this.props.onHandleSelectChange}>
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
                    <select value={this.props.selectPlatformInput} name="selectPlatformInput" onChange={this.props.onHandleSelectChange}>
                        <option>Select Platform</option>
                        <option value="web">Web</option>
                        <option value="mobile">Mobile</option>
                        <option value="smartphoneOnly">SmartPhoneOnly</option>
                    </select>
                    <button onClick={this.props.onClickHandler}><span>Filter</span><span></span></button>
                </div>
            </div>
        )
    }
}

export default SampleKeywordPlanner;