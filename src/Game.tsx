import React, { Dispatch } from "react";
import styled from "styled-components";
import Modal from "react-modal";

import { Controls, Hands, Settings, GameStatus, Results } from "./components";
import {
  showSettings,
  resetGame,
  hideSettings,
  setGameLength,
  makeMove,
  setGameMode,
  ActionT,
} from "./actions";
import type { StateT } from "./reducers";

import { makeChoice } from "./helpers";

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

const SecondaryButton = styled(Button)`
  background: #455c7b;
  color: #da727e;
  &:focus,
  &:hover {
    background: #2a3a50;
  }
`;

type ApiPropsT = {
  store: StateT;
  dispatch: Dispatch<ActionT>;
};

const Game = ({ store, dispatch }: ApiPropsT) => {
  const {
    playerOneChoice,
    playerTwoChoice,
    isGameOver,
    moves,
    result,
    isSettingsOpen,
    gameMode,
    gameLength,
  } = store;
  const { win, draw, lose } = result;
  return (
    <>
      <Title>Rock paper Scissors lizard spock</Title>
      <Frame>
        <Results win={win} draw={draw} lose={lose} />
        <Hands
          playerOneChoice={playerOneChoice}
          playerTwoChoice={playerTwoChoice}
        />
        <Button
          onClick={() => dispatch(makeMove(makeChoice(moves)))}
          disabled={isGameOver !== ""}
        >
          Ai Play
        </Button>

        <Button onClick={() => dispatch(resetGame())}>
          {isGameOver === "" ? "reset" : "play again"}
        </Button>
        <GameStatus isGameOver={isGameOver} />
        <Controls dispatch={dispatch} moves={moves} isGameOver={isGameOver} />
        <Modal
          isOpen={isSettingsOpen}
          onRequestClose={() => dispatch(hideSettings())}
        >
          <Settings
            setGameLength={(length) => dispatch(setGameLength(length))}
            gameMode={gameMode}
            gameLength={gameLength}
            setGameMode={(mode) => dispatch(setGameMode(mode))}
            hideSettings={() => dispatch(hideSettings())}
          />
        </Modal>
      </Frame>
      <CenterWrap>
        <SecondaryButton onClick={() => dispatch(showSettings())}>
          settings
        </SecondaryButton>
      </CenterWrap>
    </>
  );
};

export default Game;
