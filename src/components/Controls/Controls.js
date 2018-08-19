// @flow
import React from "react";
import styled from "styled-components";

const Action = styled.nav`
  position: absolute;
  bottom: 10px;
  text-align: center;
  width: 100%;
  transition: bottom 0.2s ease;
  &.disabled {
    bottom: -100%;
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
  width: 100%;
  position: static;
  margin-bottom: 5px;
  &:focus,
  &:hover {
    background: #ac6c82;
  }
  &:disabled {
    opacity: 0.3;
  }
  @media (min-width: 640px) {
    margin: 0;
    width: auto;
  }
`;

type PropsT = {
  moves: Array<string>,
  makeMove: string => void,
  isGameOver: string
};

const Controls = ({ moves, makeMove, isGameOver }: PropsT) => {
  return (
    <Action>
      {moves.map((e, i) => (
        <Button
          data-q={`make-move-${e}`}
          key={i}
          onClick={() => makeMove(e)}
          disabled={isGameOver === "" ? false : true}
        >
          {e}
        </Button>
      ))}
    </Action>
  );
};

export default Controls;
