import React, { Component } from "react";
import { connect } from "react-redux";
import Space from "./Space.js";
import { spaceClick } from "../actions/actions.js";

const Board = ({ dispatch }) => {
  return (
    <div
      className="board"
      onClick={e => {
        console.log(e.target);
        dispatch(spaceClick());
      }}
    >
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
};

export default connect()(Board);
