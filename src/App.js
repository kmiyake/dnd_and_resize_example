import React, { Component } from 'react';
import Resizable from 're-resizable';
import logo from './logo.svg';
import './App.css';
import Container from "./Container.js";

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
        <div style={{ display: 'flex', }}>
          <Resizable
            defaultSize={{
              width:320,
              height:24,
            }}
            minHeight={24}
            maxHeight={2304}
            grid={[0, 24]}
            style={{ border: '1px solid #000', }}
            onResizeStop={(e, direction, refToElement, delta) => {
              if (delta.height === 0) {
                return;
              }

              const minutes = delta.height / 24 * 15
              console.log(`${minutes} minutes`);
            }}
          >
            Sample with default size
          </Resizable>
          <Container />
        </div>
      </div>
    );
  }
}

export default App;
