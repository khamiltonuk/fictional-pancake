import React from "react";
import styled from "styled-components";
import Modal from "react-modal";

import Controls from "./components/Controls/Controls";
import Results from "./components/Results/Results";
import Hands from "./components/Hands/Hands";
import Settings from "./components/Settings/Settings";
import GameStatusBar from "./components/GameStatus/GameStatus";

import { makeChoice } from "./helpers/helpers";

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
  @media (min-width: 640px) {
    width: 740px;
    margin: 0 auto;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;
const CenterWrap = styled.div`
  @media (min-width: 640px) {
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
  &:disabled {
    opacity: 0.3;
  }
`;

const SecondaryButton = Button.extend`
  background: #455c7b;
  color: #da727e;
  &:focus,
  &:hover {
    background: #2a3a50;
  }
`;

const Game = ({
  result,
  playerOneChoice,
  playerTwoChoice,
  showSettings,
  resetGame,
  gameLength,
  isGameOver,
  GameStatus,
  makeMove,
  moves,
  gameMode,
  isSettingsOpen,
  hideSettings,
  setGameLength,
  setGameMode
}) => {
  return (
    <div>
      <Title>Rock paper Scissors lizard spock</Title>
      <Frame>
        <Results {...result} />
        <Hands
          playerOneChoice={playerOneChoice}
          playerTwoChoice={playerTwoChoice}
        />
        <Button
          onClick={() => makeMove(makeChoice(gameMode))}
          className="auto-play-icon"
          disabled={isGameOver === "" ? false : true}
        >
          Ai Play
        </Button>

        <Button onClick={() => resetGame()} className="reset-icon">
          {isGameOver === "" ? "reset" : "play again"}
        </Button>
        <GameStatusBar isGameOver={isGameOver} GameStatus={GameStatus} />
        <Controls makeMove={makeMove} moves={moves} isGameOver={isGameOver} />
        <Modal isOpen={isSettingsOpen} onRequestClose={hideSettings}>
          <Settings
            setGameLength={setGameLength}
            gameMode={gameMode}
            gameLength={gameLength}
            setGameMode={setGameMode}
            hideSettings={hideSettings}
          />
        </Modal>
      </Frame>
      <CenterWrap>
        <SecondaryButton
          onClick={() => showSettings()}
          className="settings-icon"
        >
          settings
        </SecondaryButton>
      </CenterWrap>
    </div>
  );
};

export default Game;
