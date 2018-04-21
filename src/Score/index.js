import React, { Component } from 'react';
import GreenScore from '../GreenScore';
import ScoreHistogram from '../ScoreHistogram';

class Score extends Component {
  render() {
    return (
      <div className="score">
        <GreenScore
          score={75}
        />
        <div className="factors">
          Factors
        </div>
        <ScoreHistogram
        />
      </div>
    )
  }
}

export default Score
