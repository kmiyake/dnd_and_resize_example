import React, { Component } from 'react';
import Resizable from 're-resizable';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Resizable
          defaultSize={{
            width:320,
            height:200,
          }}
          style={{ border: '1px solid #000', }}
        >
          Sample with default size
        </Resizable>
      </div>
    );
  }
}

export default App;
