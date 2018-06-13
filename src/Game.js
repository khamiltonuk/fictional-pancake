import React from "react";
import styled from "styled-components";
import Modal from "react-modal";

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
  return (
    <div>
      <Title>Rock paper Scissors lizard spock</Title>
      <Results {...props.result} />
      <Hands direction="left" />
      <Hands direction="right" />
      <button onClick={() => props.toggleAiMode()} className="auto-play-icon">
        Ai Play
      </button>
      <button onClick={() => props.showSettings()} className="settings-icon">
        settings
      </button>
      <button onClick={() => props.resetGame()} className="reset-icon">
        reset
      </button>
      <Controls makeMove={props.makeMove} moves={props.gameMode} />
      <Modal isOpen={props.isSettingsOpen} onRequestClose={props.hideSettings}>
        <Settings />
      </Modal>
    </div>
  );
};

export default Game;
