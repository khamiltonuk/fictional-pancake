import React from "react";
import styled from "styled-components";

import Controls from "./components/Controls/Controls";
import Results from "./components/Results/Results";
import Hands from "./components/Hands/Hands";
import Settings from "./components/Settings/Settings";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Game = props => {
  console.log(props);
  return (
    <div>
      <Title>Rock paper Scissors lizard spock</Title>
      <Results win={0} draw={0} lose={0} />
      <Hands direction="left" />
      <Hands direction="right" />
      <button id="js-auto-play" className="auto-play-icon">
        Ai Play
      </button>
      <button id="js-settings" className="settings-icon">
        settings
      </button>
      <button onClick={() => props.resetGame()} className="reset-icon">
        reset
      </button>
      <Controls moves={["rock", "paper", "sissor", "spock", "lizard"]} />
      <Settings />
    </div>
  );
};

export default Game;
