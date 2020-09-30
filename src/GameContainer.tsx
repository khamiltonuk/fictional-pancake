import React, { useReducer } from "react";
import reducer, { initialState } from "./reducers";
import Game from "./Game";

const GameContainer = () => {
  const [store, dispatch] = useReducer(reducer, initialState);
  return <Game store={store} dispatch={dispatch} />;
};

export default GameContainer;
