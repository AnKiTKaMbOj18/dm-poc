import React, { Component, Fragment } from 'react';
import logo from '../logo.svg';
import '../App.css';
import CsvParse from '@vtex/react-csv-parse'


class AdwordsKeywordPlanner extends Component {
    render() {
        const keys = [
            "header1",
            "header2",
            "header3",
            "header4",
            "header5",
        ]
        return (
            <Fragment>
                <div className="flexBox">
                    <div className="inpDiv">
                        <input name="input" onChange={this.props.onHandleChange} type="text" />
                        <button onClick={this.props.onClickHandler}>Search</button>
                    </div>
                </div>
                <div className="importFile">
                    <span>OR, import CSV below </span>
                </div>
                <CsvParse
                    keys={keys}
                    onDataUploaded={this.props.handleData}
                    onError={this.handleError}
                    render={onChange => <input type="file" onChange={onChange} />}
                />
            </Fragment>
        )
    }
}

export default AdwordsKeywordPlanner;