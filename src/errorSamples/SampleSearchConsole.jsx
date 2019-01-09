import React, { Component, Fragment } from 'react';
import KeywordPlanner from './SampleKeywordPlanner';
import logo from '../logo.svg';
import '../App.css';

class SampleSearchConsole extends Component {
    render() {
        return (
            <Fragment>
                {this.props.loading ?
                    <div className="searchConsole">
                        <h2>Search Console</h2>
                        <div className="searchTableContainer">
                            <table className="searchTable">
                                <tbody>
                                    <tr>
                                        <th>First_Detected Value</th>
                                        <th>Last_Crawled Value</th>
                                        <th>Page Url</th>
                                        <th>Response Code</th>
                                        <th>Url_Details Linked_From_Urls</th>
                                    </tr>

                                    {/* {this.props.userData.map((item) =>
                                    <tr>
                                        <td>{item.first_detected.value}</td>
                                        <td>{item.last_crawled.value}</td>
                                        <td>{item.pageUrl}</td>
                                        <td>{item.responseCode}</td>
                                        <td>{item.urlDetails&&item.urlDetails.linkedFromUrls!==undefined?item.urlDetails.linkedFromUrls
                                        .map(url=>url):""}</td>
                                        {console.log(item.urlDetails)}
                                    </tr>
                                )} */}
                                    {this.props.userData.urlCrawlErrorSample.map((item, i) =>
                                        <tr key={i}>
                                            <td>{new Date(item.first_detected.value).toUTCString()}</td>
                                            <td>{new Date(item.last_crawled.value).toUTCString()}</td>
                                            <td>{item.pageUrl}</td>
                                            <td>{item.responseCode}</td>
                                            <td>{item.urlDetails.linkedFromUrls ? item.urlDetails.linkedFromUrls
                                                .map(url => url) : "empty"}</td>
                                            {console.log(item.urlDetails.linkedFromUrls)}
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    : <img src={logo} className="App-logo" style={{ width: "100px", height: "100px" }} />}
            </Fragment>
        )
    }
}

export default SampleSearchConsole;