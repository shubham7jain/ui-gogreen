import React, { Component } from 'react';

class ScoreFactors extends Component {
  render() {
    return (
      <div className="factors">
        Key factors affecting score
        <ul className="positive pt-list-unstyled">
          <li>One Item</li>
          <li>Two Item</li>
        </ul>
        <ul className="negative pt-list-unstyled">
          <li>One Item</li>
          <li>Two Item</li>
        </ul>
      </div>
    )
  }
}

export default ScoreFactors
