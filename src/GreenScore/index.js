import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GreenScore extends Component {
  render() {
    return (
      <div className="greenscore">
        <div className="number">
          {this.props.score}
          <span className="percent">%</span>
        </div>
        <div className="comment-text">
          Good!
        </div>
      </div>
    )
  }
}

GreenScore.propTypes = {
  score: PropTypes.number.isRequired
};


export default GreenScore
