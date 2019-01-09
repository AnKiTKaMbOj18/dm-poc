import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Route from 'react-router-dom/Route';
import { BrowserRouter as Router, Link } from "react-router-dom";
import AdwordsDisplayDetails from './adwords/AdwordsDisplayDetails';
import CountDisplayDetails from './errorCounts/CountDisplayDetail';
import SampleDisplayDetail from './errorSamples/SampleDisplayDetail';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            adwordsLoading: false,
            countLoading: false,
            sampleLoading: false,
            resetLoading: false
        }
    }

    onAdwordsClick = () => {
        this.setState({
            adwordsLoading: true,
            countLoading: false,
            sampleLoading: false,
            resetLoading: false
        })
    }

    onCountClick = () => {
        this.setState({
            countLoading: true,
            adwordsLoading: false,
            sampleLoading: false,
            resetLoading: false
        })
    }

    onSampleClick = () => {
        this.setState({
            sampleLoading: true,
            adwordsLoading: false,
            countLoading: false,
            resetLoading: false
        })
    }

    onResetClick = () => {
        this.setState({
            resetLoading: !this.state.resetLoading,
            adwordsLoading: false,
            countLoading: false,
            sampleLoading: false
        })
    }

    onHandleMouserOver=()=>{
        console.log('Alert its adwords api press enter and click on button to continue');
    }

    render() {
        return (
            <section>
                <div className="btnFlex">
                <button onClick={this.onAdwordsClick} onMouseOver={this.onHandleMouserOver}>Adwords Api</button>
                <button onClick={this.onSampleClick}>Error Samples Api</button>
                <button onClick={this.onCountClick}>Error Counts Api</button>
                <button onClick={this.onResetClick}>Toggle UI</button>
                </div>
                {this.state.adwordsLoading ? <AdwordsDisplayDetails /> : ''}
                {this.state.countLoading ? <CountDisplayDetails /> : ''}
                {this.state.sampleLoading ? <SampleDisplayDetail /> : ''}
                {this.state.resetLoading ? <h1>Everything is toggled click on other button</h1> : ""}
            </section>
        )
    }
}

export default App;