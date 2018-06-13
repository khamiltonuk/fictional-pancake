import { connect } from "react-redux";
import Game from "./Game";
import { resetGame, showSettings, hideSettings, toggleAiMode } from "./actions";

const GameContainer = connect(
  function mapStateToProps(state) {
    return {
      result: state.result,
      isSettingsOpen: state.isSettingsOpen,
      isComputerPlaying: state.isComputerPlaying
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
      resetGame: () => dispatch(resetGame()),
      showSettings: () => dispatch(showSettings()),
      hideSettings: () => dispatch(hideSettings()),
      toggleAiMode: () => dispatch(toggleAiMode())
    };
  }
)(Game);

export default GameContainer;
