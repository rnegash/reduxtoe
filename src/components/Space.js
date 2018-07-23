import React, { Component } from "react";

class Space extends Component {
  render() {
    return <span className="space">{this.props.position}</span>;
  }
}
export default Space;
