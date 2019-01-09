import React, { Component, Fragment } from 'react';
import logo from '../logo.svg';
import '../App.css';

class AdwordsSearchConsole extends Component {
    render() {
        console.log(this.props)
        return (
            <Fragment>
                {this.props.loading ?
                    <div className="searchConsole">
                        <h2>Search Console</h2>
                        <div className="searchTableContainer">
                            <table className="searchTable">
                                <tbody>
                                    <tr>
                                        <th>Text</th>
                                        <th>Average Monthly Search Volume</th>
                                        <th>Average CPC</th>
                                        <th>Competition</th>
                                    </tr>

                                    {this.props.userData.map((item, key) =>
                                        <tr key={key}>
                                            <td>{item.text}</td>
                                            <td>{item.averageMonthlySearchVolume}</td>
                                            <td>{item.averageCPC}</td>
                                            <td>{item.competition}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div> : <img src={logo} className="App-logo" style={{ width: "100px", height: "100px" }} />}
            </Fragment>
        )
    }
}

export default AdwordsSearchConsole;