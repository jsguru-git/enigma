import React from 'react';
// import Chart from 'react-apexcharts'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons'

const TimeSeries = (props) => {
  let options = {
    title: { text: "" },
    chart: {
      // width: "1078px",
      // margin: [10, 10, 10, 10],
      height: "350px",
      style: {
        fontFamily: "Roboto",
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
      data: props.data,
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
      min: Math.min(...props.data.map(y => y[1])),
      max: Math.max(...props.data.map(y => y[1])),
      labels: {
        style: {
          color: "#0000005e"
        }
      }
    }],
    tooltip: {
      crosshairs: [true]
    },
    credits: {
      enabled: false
    },

  }

  return (
    <section className="highcharts-card">
      <div className="highcharts-card-header">
        <span>Cumulative Line</span>
        <FontAwesomeIcon icon={faQuestionCircle} color="#c8c8c8" size="lg" />
      </div>
      <div className="highcharts-card-body">
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          oneToOne={true}
        />
      </div>
      <div className="highcharts-card-footer">
        {/* <button onClick={this.onClick.bind(this)}>log</button> */}
      </div>
    </section>
  );
}

export default TimeSeries;