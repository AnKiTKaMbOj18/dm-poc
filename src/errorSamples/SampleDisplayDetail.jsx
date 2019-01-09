import React, { Component, Fragment } from 'react';
import SampleKeywordPlanner from './SampleKeywordPlanner';
import logo from '../logo.svg';
import '../App.css';
import SearchConsole from './SampleSearchConsole';

class SampleDisplayDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            // userData: [],
            userData:
            {
                "urlCrawlErrorSample": [
                    {
                        "first_detected": {
                            "value": 1537755985000,
                            "dateOnly": false,
                            "timeZoneShift": 0
                        },
                        "last_crawled": {
                            "value": 1541343624000,
                            "dateOnly": false,
                            "timeZoneShift": 0
                        },
                        "pageUrl": "feed/",
                        "responseCode": 404,
                        "urlDetails": {
                            "linkedFromUrls": [
                                "https://www.bedbathandbeyond.com/onemorething/category/anatomy-of-a-classic/",
                                "https://www.bedbathandbeyond.com/onemorething/page/6/",
                                "https://www.bedbathandbeyond.com/onemorething/category/you-keep-hearing-about/",
                                "https://www.bedbathandbeyond.com/onemorething/category/quick-on-the-draw/",
                                "https://www.bedbathandbeyond.com/onemorething/a-blogger-turned-cookbook-author-shows-off-the-ingredients-of-his-childhood/",
                                "https://www.bedbathandbeyond.com/onemorething/take-your-plants-to-new-heights-with-a-sleek-wire-stand/",
                                "https://www.bedbathandbeyond.com/onemorething/watch-fashions-favorite-illustrator-julie-houts-sketch-herself/",
                                "https://www.bedbathandbeyond.com/onemorething/",
                                "https://www.bedbathandbeyond.com/onemorething/the-nyc-characters-who-make-it-into-joana-avillezs-sketchbook/",
                                "https://www.bedbathandbeyond.com/onemorething/de-funk-your-space-with-an-easy-customizable-room-spray/"
                            ]
                        }
                    },
                    {
                        "first_detected": {
                            "value": 1537755985000,
                            "dateOnly": false,
                            "timeZoneShift": 0
                        },
                        "last_crawled": {
                            "value": 1541343624000,
                            "dateOnly": false,
                            "timeZoneShift": 0
                        },
                        "pageUrl": "feed/",
                        "responseCode": 404,
                        "urlDetails": {
                            "linkedFromUrls": null
                        }
                    }
                ]
            },
            selectCategoryInput: null,
            selectPlatformInput: null
        }
        this.fetchUserData = this.fetchUserData.bind(this);
    }

    fetchUserData() {
        fetch("/errorSamples?category=" + this.state.selectCategoryInput + "&platform=" + this.state.selectPlatformInput)
            .then(data => data.json())
            .then(userData => {
                let data = userData.urlCrawlErrorSample
                this.setState({ userData: data, loading: true });

                console.log(this.state.userData, "inside cdm")
            });
    }

    onHandleSelectChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            console.log("platform input ", this.state.selectPlatformInput);
            //  console.log("category input ", this.state.selectCategoryInput);
        })

    }

    render() {
        // console.log(this.state.selectCategoryInput)
        return (

            <Fragment>
                <h1>DM Error Samples Api UI</h1>
                <SampleKeywordPlanner
                    onHandleSelectChange={this.onHandleSelectChange}
                    selectCategoryInput={this.selectCategoryInput}
                    selectPlatformInput={this.selectPlatformInput}
                    onClickHandler={this.fetchUserData} />
                <SearchConsole loading={this.state.loading} userData={this.state.userData} />
            </Fragment>
        )
    }
}

export default SampleDisplayDetail;