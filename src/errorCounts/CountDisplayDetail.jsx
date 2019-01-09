import React, { Component, Fragment } from 'react';
import CountKeywordPlanner from './CountKeywordPlanner';
import logo from '../logo.svg';
import '../App.css';
import CountSearchConsole from './CountSearchConsole';

class CountDisplayDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            userData: [
                {
                    "category": "notFound",
                    "entries": [
                        {
                            "count": 109871,
                            "timestamp": {
                                "value": 1546546322661,
                                "dateOnly": false,
                                "timeZoneShift": 0
                            }
                        }
                    ],
                    "platform": "web"
                },
            ],
            selectCategoryInput: null,
            selectPlatformInput: null,
            selectLatestInput: null
        }
        this.fetchUserData = this.fetchUserData.bind(this);
    }

    fetchUserData() {
        fetch("/errorCounts?category=" + this.state.selectCategoryInput + "&platform=" + this.state.selectPlatformInput + "&latestCount=" + this.state.selectLatestInput)
            .then(data => data.json())
            .then(userData => {
                let data = userData.countPerTypes
                this.setState({ userData: data, loading: true });

                console.log(this.state.userData, "inside cdm")
            });
    }

    onHandleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            console.log(e.target.value);
        })
    }


    // onHandleCategoryChange = (e) => {
    //     this.setState({
    //         selectCategoryInput: e.target.value
    //     })
    //     console.log(e.target.value);
    // }

    // onHandlePlatformChange = (e) => {
    //     this.setState({
    //         selectPlatformInput: e.target.value
    //     })
    // }

    render() {
        return (

            <Fragment>
                <h1>DM Error Count Api UI</h1>
                <CountKeywordPlanner
                    onHandleChange={this.onHandleChange}
                    onClickHandler={this.fetchUserData}
                    selectCategoryInput={this.selectCategoryInput}
                    selectPlatformInput={this.selectPlatformInput}
                    selectLatestInput={this.state.selectLatestInput}
                />
                <CountSearchConsole loading={this.state.loading} userData={this.state.userData} />
            </Fragment>
        )
    }
}

export default CountDisplayDetails;