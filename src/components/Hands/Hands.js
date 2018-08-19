import React, { Fragment } from "react";
import styled from "styled-components";

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
`;

const LeftHand = Hand.extend`
  left: 0;
  top: 30%;
  background-image: ${props => {
    if (props.playerOneChoice === "spock") {
      return "url('https://raw.githubusercontent.com/khamiltonuk/test-new/master/images/spock.jpg')";
    } else if (props.playerOneChoice === "lizard") {
      return "url('https://raw.githubusercontent.com/khamiltonuk/test-new/master/images/lizard.jpg')";
    } else {
      return "url('https://raw.githubusercontent.com/khamiltonuk/test-new/master/images/hands-sprite.png')";
    }
  }};
  background-position: ${props => {
    if (props.playerOneChoice === "scissor") {
      return "0 0";
    } else if (props.playerOneChoice === "paper") {
      return "0 -135px;";
    } else {
      return "-312px -135px;";
    }
  }};
`;

const RightHand = Hand.extend`
  right: 0;
  top: 50%;
  background-image: ${props => {
    if (props.playerTwoChoice === "spock") {
      return "url('https://raw.githubusercontent.com/khamiltonuk/test-new/master/images/spock.jpg')";
    } else if (props.playerTwoChoice === "lizard") {
      return "url('https://raw.githubusercontent.com/khamiltonuk/test-new/master/images/lizard.jpg')";
    } else {
      return "url('https://raw.githubusercontent.com/khamiltonuk/test-new/master/images/hands-sprite.png')";
    }
  }};
  background-position: ${props => {
    if (props.playerTwoChoice === "scissor") {
      return "-624px 135px";
    } else if (props.playerTwoChoice === "paper") {
      return "-625px 0";
    } else {
      return "-312px 0;";
    }
  }};
`;

const Hands = props => {
  return (
    <Fragment>
      <LeftHand {...props}>{props.playerOneChoice}</LeftHand>
      <RightHand {...props}>{props.playerTwoChoice}</RightHand>
    </Fragment>
  );
};

export default Hands;
