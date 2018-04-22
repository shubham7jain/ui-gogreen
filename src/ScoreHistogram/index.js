import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalBarSeries,
  DiscreteColorLegend,
} from 'react-vis';

class ScoreHistogram extends Component {
  render() {
    const formattedData = this.props.data.map(([key, val]) => {
      return {x: key, y: val}
    })
    const score = Math.round(this.props.gScore)

    return (
      <div className="score-graph">
        <XYPlot
          xType="ordinal"
          yDomain={[0, 100]}
          stackBy="y"
          width={300}
          height={300} >
          <XAxis />
          <YAxis />
          <DiscreteColorLegend
            style={{position: 'absolute', left: '40px', top: '0px'}}
            orientation="horizontal" items={[
              {
                title: 'Your GScore',
                color: 'red'
              },
              {
                title: 'Avg by Age',
                color: '#12939A'
              }
            ]}
          />
          <VerticalBarSeries
            cluster="2015"
            color="#12939A"
            data={formattedData}/>
          <HorizontalGridLines
            style={{
              stroke: "red",
              strokeWidth: 4,
              strokeDasharray: "10,10"
            }}
            tickTotal={1}
            tickValues={[score]}
          />
        </XYPlot>
      </div>
    )
  }
}

ScoreHistogram.propTypes = {
  data: PropTypes.array.isRequired,
  gScore: PropTypes.number.isRequired
}

export default ScoreHistogram;
