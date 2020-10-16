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

const LeftHand = styled(Hand)<LeftHandPropsT>`
  left: 0;
  top: 30%;
  animation-name: ${({ playerOneChoice }) => {
    return playerOneChoice === "animate" ? leftBounce : "none";
  }};
  background-image: ${({ playerOneChoice }) => {
    if (playerOneChoice === "spock") {
      return "url('https://raw.githubusercontent.com/khamiltonuk/test-new/master/images/spock.jpg')";
    }
    if (playerOneChoice === "lizard") {
      return "url('https://raw.githubusercontent.com/khamiltonuk/test-new/master/images/lizard.jpg')";
    }
    return "url('https://raw.githubusercontent.com/khamiltonuk/test-new/master/images/hands-sprite.png')";
  }};
  background-position: ${({ playerOneChoice }) => {
    if (playerOneChoice === "scissor") {
      return "0 0";
    }
    if (playerOneChoice === "paper") {
      return "0 -135px;";
    }
    return "-312px -135px;";
  }};
`;

const RightHand = styled(Hand)<RightHandPropsT>`
  right: 0;
  top: 50%;
  animation-name: ${({ playerTwoChoice }) => {
    return playerTwoChoice === "animate" ? rightBounce : null;
  }};
  background-image: ${({ playerTwoChoice }) => {
    if (playerTwoChoice === "spock") {
      return "url('https://raw.githubusercontent.com/khamiltonuk/test-new/master/images/spock.jpg')";
    }
    if (playerTwoChoice === "lizard") {
      return "url('https://raw.githubusercontent.com/khamiltonuk/test-new/master/images/lizard.jpg')";
    }
    return "url('https://raw.githubusercontent.com/khamiltonuk/test-new/master/images/hands-sprite.png')";
  }};
  background-position: ${({ playerTwoChoice }) => {
    if (playerTwoChoice === "scissor") {
      return "-624px 135px";
    }
    if (playerTwoChoice === "paper") {
      return "-625px 0";
    }
    return "-312px 0;";
  }};
`;

type LeftHandPropsT = {
  playerOneChoice: string;
};

type RightHandPropsT = {
  playerTwoChoice: string;
};

type ApiPropsT = LeftHandPropsT & RightHandPropsT;

const Hands = (props: ApiPropsT) => {
  const { playerOneChoice, playerTwoChoice } = props;
  return (
    <>
      <LeftHand playerOneChoice={playerOneChoice}>{playerOneChoice}</LeftHand>
      <RightHand playerTwoChoice={playerTwoChoice}>{playerTwoChoice}</RightHand>
    </>
  );
};

export default Hands;
