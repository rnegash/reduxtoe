import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import Board from "./components/Board.js";
import rootReducer from "./reducers/rootReducer.js";
import "./App.css";

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>TicTacToe</header>
        <Provider store={store}>
          <Board />
        </Provider>
        <footer className="footer">by rufael n</footer>
      </div>
    );
  }
}

export default App;
