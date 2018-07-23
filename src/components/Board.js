import React, { Component } from "react";
import Space from "./Space.js";
class Board extends Component {
  render() {
    return (
      <div className="board">
        <div className="column">
          <Space />
          <Space />
          <Space />
        </div>
        <div className="column">
          <Space />
          <Space />
          <Space />
        </div>
        <div className="column">
          <Space />
          <Space />
          <Space />
        </div>
      </div>
    );
  }
}

export default Board;
