import React, { Component, } from "react";
import { DragDropContextProvider } from "react-dnd";
import HTML5Backend from 'react-dnd-html5-backend'
import Dustbin from "./Dustbin.js";
import Box from "./Box.js";

export default class Container extends Component {
  render() {
    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <div>
          <div style={{ overflow: 'hidden', clear: 'both' }}>
            <Dustbin />
          </div>
          <div style={{ overflow: 'hidden', clear: 'both' }}>
            <Box name="Glass" />
          </div>
        </div>
      </DragDropContextProvider>
      )
  }
}
