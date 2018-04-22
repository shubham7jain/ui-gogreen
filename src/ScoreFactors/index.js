import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ScoreFactors extends Component {
  render() {
    return (
      <div className="factors">
        Key factors affecting score
        <ul className="pt-list">
          <li style={{color: this.props.factors.onCall > 0 ? "red" : ""}}>On Call while driving: {this.props.factors.onCall}</li>
          <li style={{color: this.props.factors.revCount > 5 ? "red" : ""}}>Rev Score: {this.props.factors.revCount}</li>
          <li style={{color: this.props.factors.numBikes < 1 ? "red" : "green"}}>Trips using bike: {this.props.factors.numBikes}</li>
          <li style={{color: this.props.factors.publicTransport < 1 ? "red" : "green"}}>Trips using Public Transport: {this.props.factors.publicTransport}</li>
        </ul>
      </div>
    )
  }
}

ScoreFactors.propTypes = {
  factors: PropTypes.object.isRequired
}

export default ScoreFactors
