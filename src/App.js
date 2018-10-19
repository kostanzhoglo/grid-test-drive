import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {

    const consoleThis = () => {
      console.log("I'm being read")
    }

    return (
      <div>
        <h1>
          Hello world
        </h1>
        {consoleThis()}
        <div className="container">
          <div className="item">Yo</div>
          <div className="item">Yo Yo</div>
          <div className="item">Yo Yo Yo</div>
        </div>
      </div>
    );
  }
}

export default App;
