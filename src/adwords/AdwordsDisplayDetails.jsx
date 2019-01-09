import React, { Component, Fragment } from 'react';
import AdwordsKeywordPlanner from './AdwordsKeywordPlanner';
import AdwordsSearchConsole from './AdwordsSearchConsole';
import logo from '../logo.svg';
import '../App.css';


class AdwordsDisplayDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            userData: [{
                "text": "scented candles",
                "averageMonthlySearchVolume": 165000,
                "averageCPC": 76706843,
                "competition": 0.9996538285446284,
                "categories": "10009, 11533, 10405, 10005"
            },
            {
                "text": "candle holders",
                "averageMonthlySearchVolume": 550000,
                "averageCPC": 50008657,
                "competition": 0.9995118165267775,
                "categories": "11533, 10405, 10009"
            }],
            input: null
        }
        this.fetchUserData = this.fetchUserData.bind(this);
    }

    fetchUserData() {
        fetch("/errorCounts?category=notFound&platform=web&latestCount=true&keyword=" + this.state.input)
            .then(data => data.json())
            .then(userData => {
                let data = userData
                this.setState({ userData: data, loading: true });

                console.log(this.state.userData, "inside cdm")
            });
    }

    onHandleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <Fragment>
                <h1>DM Adwords Api UI</h1>
                <AdwordsKeywordPlanner onHandleChange={this.onHandleChange} onClickHandler={this.fetchUserData} />
                <AdwordsSearchConsole loading={this.state.loading} userData={this.state.userData} />
            </Fragment>
        )
    }
}

export default AdwordsDisplayDetails;