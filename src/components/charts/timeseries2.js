import React from 'react';
import { Container, Row, Col, Tabs, Tab, Breadcrumb } from 'react-bootstrap';

// import { log } from 'mathjs';

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons'


class TimeSeries extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                title: { text: null },
                chart: {
                    height: "350px",
                    style: {
                        fontFamily: "Roboto, Helvetica Neue",
                        color: "#fff"
                    },
                    renderTo: "container",
                    zoomType: "x",
                    animation: false,
                    backgroundColor: "#fff"
                },
                series: [{
                    showInLegend: false,
                    type: "area",
                    data: this.props.data,
                    color: "#2196f3"
                }],
                xAxis: {
                    type: "datetime",
                    labels: {
                        style: {
                            color: "#0000005e"
                        }
                    }
                },
                yAxis: [{
                    title: {
                        text: ""
                    },
                    min: Math.min(...this.props.data.map(([x, y]) => y)),
                    max: Math.max(...this.props.data.map(([x, y]) => y)),
                    labels: {
                        style: {
                            color: "#0000005e"
                        }
                    }
                }],
                tooltip: {
                    crosshairs: [true, true]
                },
                credits: {
                    enabled: false
                },
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            options: {
                series: [{
                    data: nextProps.data
                }],
                yAxis: [{
                    min: Math.min(...nextProps.data.map(([x, y]) => y)),
                    max: Math.max(...nextProps.data.map(([x, y]) => y)),
                }]
            }
        })
    }

    render() {
        // console.log("timeseries", this.props.data)
        return (
            <section className="highcharts-card">
                <div className="highcharts-card-header">
                    <span>Cumulative Line</span>
                    <FontAwesomeIcon icon={faQuestionCircle} color="#c8c8c8" size="lg" />
                </div>
                <div className="highcharts-card-body">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={this.state.options}
                        oneToOne={true}
                    />
                </div>
                {/* <div className="highcharts-card-footer">
                    <button onClick={this.onLogButtonClick.bind(this)}>log</button>
                </div> */}
            </section>
        )
    }
}

export default TimeSeries;