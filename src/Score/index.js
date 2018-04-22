import React, { Component } from 'react';
import GreenScore from '../GreenScore';
import ScoreHistogram from '../ScoreHistogram';
import ScoreFactors from '../ScoreFactors';
import {getGreenScore, getFactors, getAvgScore} from '../requests';

class Score extends Component {
  state = {
    gScore: 0,
    prevGScore: 0,
    avgScores: [],
    factors: {
      numBikes: 0,
      onCall: 0,
      publicTransport: 0,
      revCount: 0
    }
  }

  componentDidMount() {
    const userId = this.props.match.params.id
    Promise.all([
      getGreenScore(userId),
      getFactors(userId),
      getAvgScore(userId)
    ]).then(([scores, factors, avgScores]) => {
      this.setState({
        gScore: scores.score,
        prevGScore: scores.previousScore,
        avgScores: avgScores,
        factors: factors
      })
    })
  }

  render() {

    return (
      <div className="score">
        <GreenScore
          score={this.state.gScore}
          previousScore={this.state.prevGScore}
        />
        <ScoreFactors
          factors={this.state.factors}
        />
        <ScoreHistogram
          data={this.state.avgScores}
          gScore={this.state.gScore}
        />
      </div>
    )
  }
}

export default Score
