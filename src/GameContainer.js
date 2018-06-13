import { connect } from "react-redux";
import Game from "./Game";
import { resetGame } from "./actions";

const GameContainer = connect(
  function mapStateToProps(state) {
    return {
      result: state.result
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
      resetGame: () => dispatch(resetGame())
    };
  }
)(Game);

export default GameContainer;
