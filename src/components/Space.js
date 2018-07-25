import React, { Component } from "react";

class Space extends Component {
  render() {
    return <span
      className="space"
      style={ { backgroundColor: this.props. ? : } }
    >{this.props.position}</span>;
  }
}
export default Space;
