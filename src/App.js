import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Test from "./Test";

class App extends Component {
  render() {
    console.log(process.env.REACT_APP_DARK_SKY_API_KEY);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Test />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
