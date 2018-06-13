import React from "react";
import styled from "styled-components";

// #left-hand,
// #right-hand {
// 	background: url('https://raw.githubusercontent.com/khamiltonuk/test-new/master/images/hands-sprite.png') transparent;
// 	width: 312px;
// 	position: absolute;
//   margin-top: -67px;
// 	height: 135px;
//   text-indent: 100%;
//   overflow: hidden;
//   white-space: nowrap;
// }
// #left-hand {
// 	left: 0;
//   top: 30%;
//   background-position: -312px -135px;
// 	&.paper {background-position: 0 -135px; }
// 	&.scissors {background-position: 0 0; }
//   &.spock {background-image: url('https://raw.githubusercontent.com/khamiltonuk/test-new/master/images/spock.jpg'); }
//   &.lizard {background-image: url('https://raw.githubusercontent.com/khamiltonuk/test-new/master/images/lizard.jpg'); }
// }
// #right-hand {
// 	right: 0;
//   top: 50%;
// 	background-position: -312px 0;
// 	&.paper {background-position: -625px 0; }
// 	&.scissors {background-position: -624px 135px; }
//   &.spock {background-image: url('https://raw.githubusercontent.com/khamiltonuk/test-new/master/images/spock.jpg'); }
//   &.lizard {background-image: url('https://raw.githubusercontent.com/khamiltonuk/test-new/master/images/lizard.jpg'); }
// }

const Hand = styled.span`
  background: url("https://raw.githubusercontent.com/khamiltonuk/test-new/master/images/hands-sprite.png")
    transparent;
  width: 312px;
  margin-top: -67px;
  height: 135px;
  text-indent: 100%;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  background-position: ${props =>
    (props.direction = "left" ? "-312px -135px" : "-312px 0")};
`;

const Hands = props => {
  return <Hand {...props} />;
};

export default Hands;
