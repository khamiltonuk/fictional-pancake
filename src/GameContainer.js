import { connect } from "react-redux";
import Game from "./Game";
import {
  resetGame,
  showSettings,
  hideSettings,
  toggleAiMode,
  makeMove,
  setGameLength,
  setGameMode
} from "./actions";

const GameContainer = connect(
  function mapStateToProps(state) {
    return {
      result: state.result,
      isSettingsOpen: state.isSettingsOpen,
      isComputerPlaying: state.isComputerPlaying,
      isGameOver: state.isGameOver,
      gameMode: state.gameMode,
      moves: state.moves
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
      resetGame: () => dispatch(resetGame()),
      showSettings: () => dispatch(showSettings()),
      hideSettings: () => dispatch(hideSettings()),
      toggleAiMode: () => dispatch(toggleAiMode()),
      makeMove: move => dispatch(makeMove(move)),
      setGameLength: length => dispatch(setGameLength(length)),
      setGameMode: mode => dispatch(setGameMode(mode))
    };
  }
)(Game);

export default GameContainer;
