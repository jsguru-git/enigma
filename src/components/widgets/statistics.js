import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';

import { mean, median, std, max, min } from 'mathjs';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';

class Statistics extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            stats: {
                mean: null,
                median: null,
                std: null,
                skewness: null,
                kurtosis: null
            }
        }
    }

    componentDidMount() {
        const y = this.props.data.map(([x, y]) => y)
        this.setState({
            stats: {
                mean: mean(y).toFixed(2),
                median: median(y).toFixed(2),
                std: std(y).toFixed(2),
                max: max(y).toFixed(2),
                min: min(y).toFixed(2),
            }
        });
    }

    componentWillReceiveProps(nextProps) {
        const y = nextProps.data.map(([x, y]) => y)
        this.setState({
            stats: {
                mean: mean(y).toFixed(2),
                median: median(y).toFixed(2),
                std: std(y).toFixed(2),
                max: max(y).toFixed(2),
                min: min(y).toFixed(2),
            }
        });
    }

    render() {
        console.log(this.state)
        return (
            <section className="highcharts-card">
                <div className="highcharts-card-header">
                    <span>Descriptive Statistics</span>
                    <FontAwesomeIcon icon={faQuestionCircle} color="#c8c8c8" size="lg" />
                </div>
                <div className="highcharts-card-body mt-0">
                    <Table striped hover>
                        {/* <thead>
                                        <tr>
                                            <th>Statistics</th>
                                            <th>Value</th>
                                        </tr>
                                    </thead> */}
                        <tbody>
                            <tr>
                                <td>Mean</td>
                                <td>{this.state.stats.mean}</td>
                            </tr>
                            <tr>
                                <td>Median</td>
                                <td>{this.state.stats.median}</td>
                            </tr>
                            <tr>
                                <td>Std. Deviation</td>
                                <td>{this.state.stats.std}</td>
                            </tr>
                            <tr>
                                <td>Max</td>
                                <td>{this.state.stats.max}</td>
                            </tr>
                            <tr>
                                <td>Min</td>
                                <td>{this.state.stats.min}</td>
                            </tr>
                            {/* <tr>
                                <td>Skewness</td>
                                <td>1.42</td>
                            </tr>
                            {/* <tr>
                                <td>Skewness</td>
                                <td>1.42</td>
                            </tr> */}
                        </tbody>
                    </Table>
                </div>
            </section>
        )
    }
}

export default Statistics;