import React, { Component } from "react";
import Results from "./components/Results/Results";
import "./App.css";
import Controls from "./components/Results/Results";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

class App extends Component {
  render() {
    return (
      <div>
        <Title>Rock paper Scissors lizard spock</Title>
        <Results win={0} draw={0} lose={0} />
        <div id="left-hand" className="animated" />
        <div id="right-hand" className="animated" />
        <Controls moves={["rock", "paper", "sissor", "spock", "lizard"]} />
      </div>
    );
  }
}

export default App;
