import React from "react";
import styled from "styled-components";

const StatusBar = styled.div`
  text-align: center;
  padding: 20px;
  position: absolute;
  top: 50%;
  width: 100%;
  background: #da727e;
`;

const GameStatus = ({ isGameOver }) => {
  if (isGameOver !== "") {
    return <StatusBar role="alert">{isGameOver}</StatusBar>;
  } else {
    return null;
  }
};

export default GameStatus;
