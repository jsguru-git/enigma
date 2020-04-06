import React from 'react';
import { Nav, Container, Row, Col, Button } from 'react-bootstrap';

import { log, exp } from "mathjs"

import TimeSeries from "../charts/timeseries2"
import BellCurve from "../charts/bellcurve"
import Statistics from "../widgets/statistics"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faExclamationTriangle, faPercentage, faCircle, faEye, faSyncAlt, faCloudDownloadAlt, faBalanceScale, faCloud, faInfoCircle, faChartLine, faAngleDown } from '@fortawesome/free-solid-svg-icons'


function toPercentageData(data) {
    // data: 2-dimensional array, i.e. [[x_1,y_1], [x_2,y_2], ..., [x_n, y_n]]
    let percentageData = []
    for (let i = 1; i < data.length; i++) {
        percentageData.push([data[i][0], 100 * (data[i][1] / data[i - 1][1] - 1)])
    }
    return percentageData
}

class ChartsTabNavigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const buttonsSchema = [
            {
                name:
                    <React.Fragment>
                        <FontAwesomeIcon icon={faPercentage} />
                        <FontAwesomeIcon icon={faAngleDown} />
                    </React.Fragment>,
                handler: this.props.handlePercentageData,
                isClicked: this.props.isPerc
            },
            {
                name: "Natural Log",
                handler: this.props.handleLogData,
                isClicked: this.props.isLog
            },
            {
                name: "Natural Log",
                handler: this.props.handleLogData,
                isClicked: this.props.isLog
            },
            {
                name: "Natural Log",
                handler: this.props.handleLogData,
                isClicked: this.props.isLog
            },
            {
                name: "Natural Log",
                handler: this.props.handleLogData,
                isClicked: this.props.isLog
            },
            {
                name: "Natural Log",
                handler: this.props.handleLogData,
                isClicked: this.props.isLog
            },
            {
                name: "Natural Log",
                handler: this.props.handleLogData,
                isClicked: this.props.isLog
            },
            {
                name: "Natural Log",
                handler: this.props.handleLogData,
                isClicked: this.props.isLog
            },

        ]

        let buttons = buttonsSchema.map(button => {
            return (
                <Button onClick={button.handler}>
                    <span className={button.isClicked ? "active" : ""}>{button.name}</span>
                </Button>
            )
        })

        return (
            <Nav className="charts-tab-nav">
                <Container>
                    <Row>
                        <Col className="p-0 d-flex">
                            {buttons}
                        </Col>
                    </Row>
                </Container>
            </Nav>

        )
    }
}

class ChartsTab extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLog: false,
            isPerc: false,
            data: this.props.data,
        }

        this.handleLogData = this.handleLogData.bind(this)
        this.handlePercentageData = this.handlePercentageData.bind(this)
    }

    handleLogData() {
        this.setState({
            isLog: !this.state.isLog
        })
    }

    handlePercentageData() {
        this.setState({
            isPerc: !this.state.isPerc
        })
    }

    render() {
        
        return (
            <Container>
                <Row className="mb-3">
                    <Col>
                        <ChartsTabNavigation
                            handleLogData={this.handleLogData}
                            handlePercentageData={this.handlePercentageData}
                            isPerc={this.state.isPerc}
                            data={this.state.data} 
                        />
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <TimeSeries data={this.state.isPerc ? toPercentageData(this.state.data) : this.state.data} key={this.state.isPerc} />
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <BellCurve data={this.state.isPerc ? toPercentageData(this.state.data) : this.state.data} key={this.state.isPerc} />
                    </Col>
                    <Col className="col-4">
                        <Statistics data={this.state.isPerc ? toPercentageData(this.state.data) : this.state.data} key={this.state.isPerc} />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ChartsTab;