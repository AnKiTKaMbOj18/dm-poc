import React, { Component, Fragment } from 'react';
import logo from '../logo.svg';
import '../App.css';

class CountSearchConsole extends Component {
    render() {
        return (
            <Fragment>
                {this.props.loading ?
                    <div className="searchConsole">
                        <h2>Search Console</h2>
                        <div className="searchTableContainer">
                            <table className="searchTable">
                                <tr>
                                    <th>Category</th>
                                    <th>Entries count</th>
                                    <th>Entries Timestamp Value</th>
                                    <th>Platform</th>
                                </tr>

                                {this.props.userData.map((item) =>
                                    <tr>
                                        <td>{item.category}</td>
                                        <td>{item.entries.map(entries => entries.count)}</td>
                                        <td>{item.entries.map(entries => entries.timestamp.value)}</td>
                                        <td>{item.platform}</td>
                                    </tr>
                                )}
                            </table>
                        </div>
                    </div>
                    : <img src={logo} className="App-logo" style={{ width: "100px", height: "100px" }} />}
            </Fragment>
        )
    }
}

export default CountSearchConsole;