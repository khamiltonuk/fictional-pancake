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
  @media (min-width: 640px) {
    margin: 0;
    width: auto;
  }
`;

const Controls = props => {
  return (
    <Action>
      {props.moves.map((e, i) => (
        <Button
          data-q={`make-move-${e}`}
          key={i}
          onClick={() => props.makeMove(e)}
        >
          {e}
        </Button>
      ))}
    </Action>
  );
};

export default Controls;
