import React from "react";
import styled from "styled-components";
import type { ResultsT } from "../types";

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

const ResultsList = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  top: 60px;
  position: absolute;
  left: 0;
  list-style: none;
  text-align: center;
`;

const Results = ({ win, draw, lose }: ResultsT) => {
  return (
    <>
      <Title>Results</Title>
      <ResultsList>
        <Result>Win: {`${win}`}</Result>
        <Result>
          Draw:
          {`${draw}`}
        </Result>
        <Result>Lose: {`${lose}`}</Result>
      </ResultsList>
    </>
  );
};

export default Results;
