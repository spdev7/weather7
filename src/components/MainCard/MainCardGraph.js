import React, { Component } from "react";
import Chart from "react-apexcharts";

class MainCardGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
      series: [
        {
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h1>MainCardGraph</h1>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="line"
          width="500"
        />
      </div>
    );
  }
}

export default MainCardGraph;