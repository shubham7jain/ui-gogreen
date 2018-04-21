import React, { Component } from 'react';
import Score from './Score';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Some header
        </header>
        <Score>
        </Score>
      </div>
    );
  }
}

export default App;
