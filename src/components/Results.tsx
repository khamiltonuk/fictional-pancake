import React from "react";
import styled from "styled-components";
import type { ResultsT } from "../types";

const Title = styled.h2`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
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
        <Result>Wins: {`${win}`}</Result>
        <Result>
          Draws:
          {`${draw}`}
        </Result>
        <Result>Loses: {`${lose}`}</Result>
      </ResultsList>
    </>
  );
};

export default Results;
