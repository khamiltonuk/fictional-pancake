import React from "react";
import styled from "styled-components";
import Modal from "react-modal";

import Controls from "./components/Controls/Controls";
import Results from "./components/Results/Results";
import Hands from "./components/Hands/Hands";
import Settings from "./components/Settings/Settings";

const Title = styled.h1`
  text-align: center;
  margin-top: 0;
  padding: 20px;
  color: #455c7b;
`;
const Frame = styled.div`
  position: relative;
  height: 460px;
  background: #455c7b;
  overflow: hidden;
  padding-top: 20px;
  padding-bottom: 20px;
  @media (min-width: 640px) .center-wrap {
    width: 740px;
    margin: 0 auto;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;
const Button = styled.button`
  text-transform: uppercase;
  display: inline-block;
  background: #da727e;
  padding: 10px 20px;
  border: none;
  color: #000;
  position: relative;
  margin-bottom: 5px;
  &:focus,
  &:hover {
    background: #ac6c82;
  }
`;

const Game = props => {
  return (
    <div>
      <Title>Rock paper Scissors lizard spock</Title>
      <Frame>
        <Results {...props.result} />
        <Hands direction="left" />
        <Hands direction="right" />
        <Button onClick={() => props.toggleAiMode()} className="auto-play-icon">
          Ai Play
        </Button>
        <Button onClick={() => props.showSettings()} className="settings-icon">
          settings
        </Button>
        <Button onClick={() => props.resetGame()} className="reset-icon">
          reset
        </Button>
        <Controls makeMove={props.makeMove} moves={props.gameMode} />
        <Modal
          isOpen={props.isSettingsOpen}
          onRequestClose={props.hideSettings}
        >
          <Settings
            setGameLength={props.setGameLength}
            setGameMode={props.setGameMode}
          />
        </Modal>
      </Frame>
    </div>
  );
};

export default Game;
