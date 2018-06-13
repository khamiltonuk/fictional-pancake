import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  position: absolute;
  text-indent: -999em;
`;

const Result = styled.li`
  display: inline-block;
  min-width: 70px;
  margin: 2px;
  color: #da727e;
`;

const Results = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  top: 60px;
  position: absolute;
  left: 0;
  list-style: none;
  text-align: center;
`;

const Controls = props => {
  return (
    <div>
      <Title>Results</Title>
      <Results>
        <Result>Win: {`${props.win}`}</Result>
        <Result>Draw:{`${props.draw}`}</Result>
        <Result>Lose: {`${props.lose}`}</Result>
      </Results>
    </div>
  );
};

export default Controls;
