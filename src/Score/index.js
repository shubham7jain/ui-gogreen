import React, { Component } from 'react';
import GreenScore from '../GreenScore';
import ScoreHistogram from '../ScoreHistogram';
import ScoreFactors from '../ScoreFactors';
import {getGreenScore, getAvgScore} from '../requests';

class Score extends Component {
  state = {
    gScore: 0,
    prevGScore: 0,
    avgScores: []
  }

  componentDidMount() {
    Promise.all([
      getGreenScore(),
      getAvgScore()
    ]).then(([scores, avgScores]) => {
      this.setState({
        gScore: scores.score,
        prevGScore: scores.previousScore,
        avgScores: avgScores
      })
    })
  }

  render() {
    const positiveFactors = []
    const negativeFactors = []

    return (
      <div className="score">
        <GreenScore
          score={this.state.gScore}
          previousScore={this.state.prevGScore}
        />
        <ScoreFactors
          positiveFactors={positiveFactors}
          negativeFactors={negativeFactors}
        />
        <ScoreHistogram
          data={this.state.avgScores}
        />
      </div>
    )
  }
}

export default Score
