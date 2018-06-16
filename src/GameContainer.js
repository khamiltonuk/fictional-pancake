import { connect } from "react-redux";
import Game from "./Game";
import {
  resetGame,
  showSettings,
  hideSettings,
  makeMove,
  setGameLength,
  setGameMode
} from "./actions";

const GameContainer = connect(
  function mapStateToProps(state) {
    return {
      result: state.result,
      isSettingsOpen: state.isSettingsOpen,
      isGameOver: state.isGameOver,
      gameMode: state.gameMode,
      moves: state.moves,
      gameLength: state.gameLength,
      playerOneChoice: state.playerOneChoice,
      playerTwoChoice: state.playerTwoChoice,
      GameStatus: state.GameStatus
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
      resetGame: () => dispatch(resetGame()),
      showSettings: () => dispatch(showSettings()),
      hideSettings: () => dispatch(hideSettings()),
      makeMove: move => dispatch(makeMove(move)),
      setGameLength: length => dispatch(setGameLength(length)),
      setGameMode: mode => dispatch(setGameMode(mode))
    };
  }
)(Game);

export default GameContainer;
