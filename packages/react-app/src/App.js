import React, { Component } from "react";
import "./App.css";
import logo from "./logo.svg";
import SignIn from "./pages/SignIn";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <SignIn/>
      </div>
    );
  }
}

export default App;
