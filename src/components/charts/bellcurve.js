import React from 'react';
import { Container, Row, Col, Tabs, Tab, Breadcrumb } from 'react-bootstrap';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons'

import bellCurve from "highcharts/modules/histogram-bellcurve"; //module
bellCurve(Highcharts); //init module

class BellCurve extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            config: {
                chart: {
                    height: "200px",
                    style: {
                        fontFamily: "Roboto, Helvetica Neue",
                        color: "#fff"
                    },
                },
                title: {
                    text: null
                },
                credits: {
                    enabled: false
                },
                legend: {
                    enabled: false
                },
                xAxis: [
                    {
                        title: {
                            text: null
                        },
                        visible: true,
                    },
                    {
                        title: {
                            text: null
                        },
                        opposite: false,
                        visible: true,
                        labels: {
                            style: {
                                color: "#0000005e"
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        title: {
                            text: null
                        },
                        visible: true
                    },
                    {
                        title: {
                            text: null
                        },
                        opposite: false,
                        visible: true,
                        labels: {
                            style: {
                                color: "#0000005e"
                            }
                        }
                    }
                ],
                series: [
                    {
                        name: null,
                        type: "bellcurve",
                        data: this.props.data.map(([x, y]) => y),
                        xAxis: 1,
                        yAxis: 1,
                        intervals: 4,
                        baseSeries: 1,
                        zIndex: -1,
                        marker: {
                            enabled: true
                        },
                        color: "#2196f3"
                    },
                    {
                        name: "Data",
                        type: "scatter",
                        data: this.props.data.map(([x, y]) => y),
                        visible: false,
                        marker: {
                            radius: 1.5
                        },
                        color: "#000"
                    }
                ],
                tooltip: {
                    crosshairs: [true]
                },
            }
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            config: {
                series: [{
                    data: nextProps.data.map(([x, y]) => y)
                }]
            }
        })
    }

    render() {
        return (
            <section className="highcharts-card">
                <div className="highcharts-card-header">
                    <span>Probability Distribution</span>
                    <FontAwesomeIcon icon={faQuestionCircle} color="#c8c8c8" size="lg" />
                </div>
                <div className="highcharts-card-body">
                    <HighchartsReact
                        constructorType={"chart"}
                        ref={this.chartComponent}
                        highcharts={Highcharts}
                        options={this.state.config}
                    />
                </div>
            </section>
        );
    }
}

export default BellCurve;