import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import Board from "./components/Board.js";
import rootReducer from "./reducers/rootReducer.js";
import "./App.css";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <span>Tic</span>
          <big>Tac</big>
          <span>Toe</span>
        </header>
        <Provider store={store}>
          <Board />
        </Provider>
        <footer className="footer">
          by rufael <small>n</small>
        </footer>
      </div>
    );
  }
}

export default App;
