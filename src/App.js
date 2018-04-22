import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Score from './Score';
// import logo from './logo.svg';
import '../node_modules/@blueprintjs/core/lib/css/blueprint.css';
import '../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css';
import './App.css';
import {Navbar, NavbarGroup, NavbarDivider, NavbarHeading} from '@blueprintjs/core';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar>
            <NavbarGroup align="left">
              <NavbarHeading className="title">GoGreen</NavbarHeading>
              <NavbarDivider />
              <Link className="pt-button pt-minimal pt-icon-chart" to="/">Graph1</Link>
              <Link className="pt-button pt-minimal pt-icon-chart" to="/">Graph2</Link>
            </NavbarGroup>
            <NavbarGroup align="right">
            </NavbarGroup>
          </Navbar>
        </header>
        <Score>
        </Score>
      </div>
    );
  }
}

export default App;
