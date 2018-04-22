import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GreenScore extends Component {
  render() {
    return (
      <div className="greenscore">
        <p className="description">
          Your GreenScore is based on StateFarms Green Rating system.
        </p>
        <div className="number">
          {this.props.score}
          <span className="percent">%</span>
        </div>
        <div className="comment-text">
          Good!
        </div>
        <div className="color-bar">
        </div>
        <div className="previous-score-info">
          <div className="previous-score-value">
            72
          </div>
          <div className="previous-score-text">
            Previous Score
          </div>
        </div>
      </div>
    )
  }
}

GreenScore.propTypes = {
  score: PropTypes.number.isRequired,
  previousScore: PropTypes.number
};

export default GreenScore
