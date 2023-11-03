import React, { Component } from "react";
import "./assets/scss/App.scss";
import Clock from "./Clock";

export default class App extends Component {
  constructor() {
    super(...arguments);
    this.state = {
        currentTime: new Date(),
    }
  }

  render() {
    return (
      <div className="clock-display">
        <h2>ex05 - Component LifeCycle Practice</h2>
        <Clock hours={02} minutes={32} seconds={54} session={'pm'}/>
      </div>
    );
  }
}
