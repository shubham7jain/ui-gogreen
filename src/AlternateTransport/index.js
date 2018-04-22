import React, { Component } from 'react';
import {getAlternateRoutes} from '../requests';

class AlternateTransport extends Component {
  state = {
    routes: null
  }

  componentDidMount() {
    const userId = this.props.match.params.id
    getAlternateRoutes(userId)
      .then((routes) => {
        this.setState({
          routes: routes
        })
      })
  }
  render() {
    if (!this.state.routes) {
      return (
        <div>
          Alternate Transport
        </div>
      )
    } else {
      const alternateBikeRoutes = this.state.routes.bicycling ? this.state.routes.bicycling.map((route, i) => {
        const src = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyBfn8jQ8prjOk8V4d68qoe85C3l4hKJeXQ&origin=${route.sourceLat},${route.sourceLon}&destination=${route.destinationLat},${route.destinationLon}&mode=bicycling`
        return (
          <div className="route" key={i}>
            <ul className="pt-list-unstyled">
              <li>Source: {route.sourceName}</li>
              <li>Destination: {route.destinationName}</li>
              <li>Car Time (mins): {route.carTime}</li>
            </ul>
            <iframe
              width="600"
              height="450"
              frameBorder="0" style={{border:0}}
              src={src}
              allowFullScreen
            >
            </iframe>
          </div>
        )
      }) : []

      const alternateTransitRoutes = this.state.routes.transit ? this.state.routes.transit.map((route, i) => {
        const src = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyBfn8jQ8prjOk8V4d68qoe85C3l4hKJeXQ&origin=${route.sourceLat},${route.sourceLon}&destination=${route.destinationLat},${route.destinationLon}&mode=transit`
        return (
          <div className="route" key={i}>
            <ul className="pt-list-unstyled">
              <li>Source: {route.sourceName}</li>
              <li>Destination: {route.destinationName}</li>
              <li>Car Time (mins): {route.carTime}</li>
            </ul>
            <iframe
              width="600"
              height="450"
              frameBorder="0" style={{border:0}}
              src={src}
              allowFullScreen
            >
            </iframe>
          </div>
        )
      }) : []

      const alternateBikeHeader = (alternateBikeRoutes.length > 0) ? <h3>Alternate Routes by Bike</h3> : null
      const alternateTransitHeader = (alternateTransitRoutes.length > 0) ? <h3>Alternate Routes by Public Transport</h3> : null

      return (
        <div className="alternate-transport">
          <div className="bike-transport-routes">
            {alternateBikeHeader}
            {alternateBikeRoutes}
          </div>
          <div className="public-transport-routes">
            {alternateTransitHeader}
            {alternateTransitRoutes}
          </div>
        </div>
      )
    }
  }
}

export default AlternateTransport;
