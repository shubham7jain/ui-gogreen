import axios from 'axios';

// "/api/greenscore?userId=id"
export function getGreenScore(id = 1234) {
  const score = {
    score: 75,
    previousScore: 70
  }

  return axios.get(
    `http://localhost:3034/api/greenscore?userId=${id}`
  )
  .then((res) => {
    return {
      score: (res.data.score === "NA") ? null : res.data.score,
      previousScore: (res.data.previousScore === "NA") ? null : res.data.previousScore,
    }
  })
  // return new Promise(function (res, rej){
  //   res(score)
  // })
}

// "/api/factors?userId=id"
export function getFactors(id = 1234) {
  const factors = {
    numBikes: 4,
    onCall: 5,
    publicTransport: 2,
    revCount: 14
  }

  return axios.get(
    `http://localhost:3034/api/factors?userId=${id}`
  )
  .then((res) => {
    return res.data
  })
  // return new Promise(function (res, rej){
  //   res(factors)
  // })
}

// "/api/gscoredistribution"
export function getAvgScore(id = 1234) {
  const avgByAge = {
    "18-25": 60,
    "26-40": 65,
    "41-50": 80,
    "51-65": 85,
    "66+":  70
  }

  return axios.get(
    "http://localhost:3034/api/gscoredistribution"
  )
  .then((res) => {
    return Object.entries(res.data)
  })
}

export function getAlternateRoutes(id = 1234) {
  // const data = {
  // "bicycling": [
  //   {
  //     "destinationLat": 32.769688538764676, 
  //     "destinationLon": -96.81945371155375, 
  //     "destinationName": "I-30, Dallas, TX 75208, USA", 
  //     "sourceLat": 32.761802139586294, 
  //     "sourceLon": -96.80097085288764, 
  //     "sourceName": "1499 Rock Island St, Dallas, TX 75207, USA"
  //   }, 
  //   {
  //     "destinationLat": 32.797575674613135, 
  //     "destinationLon": -96.78615811803145, 
  //     "destinationName": "3700 Ross Ave, Dallas, TX 75204, USA", 
  //     "sourceLat": 32.77125406743311, 
  //     "sourceLon": -96.82493145092106, 
  //     "sourceName": "131 Yorktown St, Dallas, TX 75208, USA"
  //   }, 
  //   {
  //     "destinationLat": 33.4156898722036, 
  //     "destinationLon": -93.41246987145836, 
  //     "destinationName": "30 AR-53, Buckner, AR 71827, USA", 
  //     "sourceLat": 33.00418615140865, 
  //     "sourceLon": -93.71075182183017, 
  //     "sourceName": "711-799 Wise Rd, Plain Dealing, LA 71064, USA"
  //   }, 
  //   {
  //     "destinationLat": 32.76394350693894, 
  //     "destinationLon": -96.83975217916182, 
  //     "destinationName": "1019-1027 Evergreen Hills Rd, Dallas, TX 75208, USA", 
  //     "sourceLat": 32.78624438972764, 
  //     "sourceLon": -96.79287009247462, 
  //     "sourceName": "Live Oak St & US-75 & I-345, Dallas, TX, USA"
  //   }
  // ], 
  // "transit": [
  //   {
  //     "destinationLat": 32.797575674613135, 
  //     "destinationLon": -96.78615811803145, 
  //     "destinationName": "3700 Ross Ave, Dallas, TX 75204, USA", 
  //     "sourceLat": 32.77125406743311, 
  //     "sourceLon": -96.82493145092106, 
  //     "sourceName": "131 Yorktown St, Dallas, TX 75208, USA"
  //   }, 
  //   {
  //     "destinationLat": 32.76394350693894, 
  //     "destinationLon": -96.83975217916182, 
  //     "destinationName": "1019-1027 Evergreen Hills Rd, Dallas, TX 75208, USA", 
  //     "sourceLat": 32.78624438972764, 
  //     "sourceLon": -96.79287009247462, 
  //     "sourceName": "Live Oak St & US-75 & I-345, Dallas, TX, USA"
  //   }
  // ]
// }
  return axios.get(
    `http://localhost:3034/api/biketransitRoutes?userId=${id}`
  )
    .then((res) => {
      return (res.data)
    })
  // return new Promise(function (res, rej){
  //   res(data)
  // })
}

