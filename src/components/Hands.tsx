import React from "react";
import styled, { keyframes } from "styled-components";

const Hand = styled.span`
  background: url("https://raw.githubusercontent.com/khamiltonuk/test-new/master/images/hands-sprite.png")
    transparent;
  width: 312px;
  margin-top: -67px;
  height: 135px;
  text-indent: 100%;
  position: absolute;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  animation-duration: 1s;
  animation-fill-mode: both;
  transform-origin: center bottom;
`;

const LeftHand = styled(Hand)<ApiPropsT>`
  left: 0;
  top: 30%;
  animation-name: ${({ playerTwoChoice }) => {
    return playerTwoChoice === "animate" ? `${leftBounce}` : "none";
  }};
  background-image: ${({ playerOneChoice }) => {
    if (playerOneChoice === "spock") {
      return "url('https://raw.githubusercontent.com/khamiltonuk/test-new/master/images/spock.jpg')";
    } else if (playerOneChoice === "lizard") {
      return "url('https://raw.githubusercontent.com/khamiltonuk/test-new/master/images/lizard.jpg')";
    } else {
      return "url('https://raw.githubusercontent.com/khamiltonuk/test-new/master/images/hands-sprite.png')";
    }
  }};
  background-position: ${({ playerOneChoice }) => {
    if (playerOneChoice === "scissor") {
      return "0 0";
    } else if (playerOneChoice === "paper") {
      return "0 -135px;";
    } else {
      return "-312px -135px;";
    }
  }};
`;

const RightHand = styled(Hand)<ApiPropsT>`
  right: 0;
  top: 50%;
  animation-name: ${(props) => {
    return props.playerTwoChoice === "animate" ? `${rightBounce}` : null;
  }};
  background-image: ${(props) => {
    if (props.playerTwoChoice === "spock") {
      return "url('https://raw.githubusercontent.com/khamiltonuk/test-new/master/images/spock.jpg')";
    } else if (props.playerTwoChoice === "lizard") {
      return "url('https://raw.githubusercontent.com/khamiltonuk/test-new/master/images/lizard.jpg')";
    } else {
      return "url('https://raw.githubusercontent.com/khamiltonuk/test-new/master/images/hands-sprite.png')";
    }
  }};
  background-position: ${(props) => {
    if (props.playerTwoChoice === "scissor") {
      return "-624px 135px";
    } else if (props.playerTwoChoice === "paper") {
      return "-625px 0";
    } else {
      return "-312px 0;";
    }
  }};
`;

const rightBounce = keyframes`
0%, 20%, 53%, 80%, 100% {
  transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  transform: translate3d(0,0,0);
}

40%, 43%, 70%, 90%   {
  transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
  transform: translate3d(30px, -30px, 0) rotate(30deg);
}

`;
const leftBounce = keyframes`
0%, 20%, 53%, 80%, 100% {
  transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  transform: translate3d(0,0,0);
}

40%, 43%, 70%, 90%   {
  transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
  transform: translate3d(-30px, -30px, 0) rotate(-30deg);
}`;

type ApiPropsT = {
  playerOneChoice: string;
  playerTwoChoice: string;
};

export const Hands = (props: ApiPropsT) => {
  const { playerOneChoice, playerTwoChoice } = props;
  return (
    <>
      <LeftHand {...props}>{playerOneChoice}</LeftHand>
      <RightHand {...props}>{playerTwoChoice}</RightHand>
    </>
  );
};
