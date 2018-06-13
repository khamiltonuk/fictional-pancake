import { connect } from "react-redux";
import Game from "./Game";
import {
  resetGame,
  showSettings,
  hideSettings,
  toggleAiMode,
  makeMove
} from "./actions";

const GameContainer = connect(
  function mapStateToProps(state) {
    return {
      result: state.result,
      isSettingsOpen: state.isSettingsOpen,
      isComputerPlaying: state.isComputerPlaying,
      isGameOver: state.isGameOver,
      gameMode: state.gameMode
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
      resetGame: () => dispatch(resetGame()),
      showSettings: () => dispatch(showSettings()),
      hideSettings: () => dispatch(hideSettings()),
      toggleAiMode: () => dispatch(toggleAiMode()),
      makeMove: move => dispatch(makeMove(move))
    };
  }
)(Game);

export default GameContainer;
