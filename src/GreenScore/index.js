import React, { Component } from 'react';
import PropTypes from 'prop-types';

const getComment = (score) => {
  if (score < 50) {
    return "Keep going";
  } else if (score < 75) {
    return "Good";
  } else if (score <= 100) {
    return "Proud of you!";
  }
  return "-";
}

class GreenScore extends Component {
  render() {
    return (
      <div className="greenscore">
        <p className="description">
          Your GreenScore is based on StateFarms Green Rating system.
        </p>
        <div className="number">
          {Math.round(this.props.score) || "-"}
          <span className="percent">%</span>
        </div>
        <div className="comment-text">
          {getComment(this.props.score)}
        </div>
        <div className="color-bar">
        </div>
        <div className="previous-score-info">
          <div className="previous-score-value">
            {Math.round(this.props.previousScore)}
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
