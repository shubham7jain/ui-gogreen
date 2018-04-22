import axios from 'axios';

// "/api/greenscore?userId=id"
export function getGreenScore() {
  const score = {
    score: 75,
    previousScore: 70
  }

  return new Promise(function (res, rej){
    res(score)
  })
}

// "/api/factors?userId=id"
export function getFactors() {
  const factors = {
    revCount: 3,
    onCall: 2,
    numBikes: 3,
    publicTransport: 3
  }

  return new Promise(function (res, rej){
    res(factors)
  })
}

// "/api/gscoredistribution"
export function getAvgScore() {
  const avgByAge = {
    "18-25": 60,
    "26-40": 65,
    "40-50": 80,
    "50-65": 85,
    "65+":  70
  }

  return new Promise(function (res, rej){
    res(Object.entries(avgByAge))
  })
}
