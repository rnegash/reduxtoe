import React, { Component } from "react";

class Space extends Component {
  render() {
    return (
      <span
        className={`space ${this.getClass()}`}
        onClick={() => onTileClick(this.props.index)}
      >
        {this.props.index}
      </span>
    );
  }

  getClass() {
    if (this.props.player === 0) return "p1";
    if (this.props.player === 1) return "p2";
    return "";
  }
}
export default Space;
