import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quote from "./Quote";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My travels</h1>
        </header>
        <Quote
          quote="Hurlevent, Azeroth"
          character="19,107 kilomètres"
          image="https://worldofwarcraft.judgehype.com/screenshots/cataclysm/screenshots/sharas03/52.jpg"
        />
        <Quote
          quote="Dalaran, Îles brisées"
          character="15,110 kilomètres"
          image="http://www.buffed.de/screenshots/970x546/2015/12/wow_legion_aegwynns_tower_in_dalaran_001-buffed.jpg"
        />
      </div>
    );
  }
}

export default App;
