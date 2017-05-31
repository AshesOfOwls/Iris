import React, { Component } from 'react';
import Led from '../Led';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Iris</h2>
        </div>
        <p className="App-intro">
          <Led />
        </p>
      </div>
    );
  }
}

export default App;
