import React from "react";

import Rules from "./Rules";
import styled from "styled-components";

const Inputfield = styled.div`
  margin-top: 10px;
  overflow: hidden;
`;
const Label = styled.label`
  background: #da727e;
  padding: 10px;
  width: 100%;
  display: block;
  height: 100%;
  cursor: pointer;
`;

const Title = styled.h2`
  font-size: 100%;
  font-weight: normal;
`;

const Input = styled.input`
  position: absolute;
  top: 0;
  left: -100%;
  &[type="radio"]:checked + label span,
  &[type="checkbox"]:checked + label span {
    border: 6px solid #455c7b;
    box-shadow: none;
  }
  &[type="radio"]:not(:checked) + label span,
  &[type="checkbox"]:not(:checked) + label span {
    border: 1px solid #455c7b;
    box-shadow: inset 2px 2px 0px #685c79;
  }
`;

const FauxCheckbox = styled.span`
  transition: all 0.1s ease-in;
  display: inline-block;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  background: #da727e;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  vertical-align: middle;
`;

const Fieldset = styled.fieldset`
  border: 0;
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

const Settings = props => {
  const handleGameLengthChange = changeEvent => {
    props.setGameLength(parseInt(changeEvent.target.value, 10));
  };

  const handleGameModeChange = changeEvent => {
    props.setGameMode(changeEvent.target.value);
  };

  return (
    <div id="settings-pane" className="settings">
      <form method="POST" onSubmit={() => props.hideSettings()}>
        <Fieldset>
          <Title>Select you game mode</Title>
          <Inputfield>
            <Input
              type="radio"
              name="game-mode"
              value="3"
              id="best-of-3"
              checked={props.gameLength === 3}
              onChange={handleGameLengthChange}
            />
            <Label htmlFor="best-of-3">
              <FauxCheckbox />Best of 3
            </Label>
          </Inputfield>
          <Inputfield>
            <Input
              type="radio"
              name="game-mode"
              value="5"
              id="best-of-5"
              checked={props.gameLength === 5}
              onChange={handleGameLengthChange}
            />
            <Label htmlFor="best-of-5">
              <FauxCheckbox />Best of 5
            </Label>
          </Inputfield>
          <Inputfield>
            <Input
              type="radio"
              name="game-mode"
              value="0"
              id="non-stop"
              checked={props.gameLength === 0}
              onChange={handleGameLengthChange}
            />
            <Label htmlFor="non-stop">
              <FauxCheckbox />Non stop
            </Label>
          </Inputfield>
        </Fieldset>
        <Fieldset>
          <Title>Select you game type</Title>
          <Inputfield>
            <Input
              type="radio"
              name="game-type"
              value="rps"
              id="rps"
              checked={props.gameMode === "rps"}
              onChange={handleGameModeChange}
            />
            <Label htmlFor="rps">
              <FauxCheckbox />Rock paper scissors
            </Label>
          </Inputfield>
          <Inputfield>
            <Input
              type="radio"
              name="game-type"
              value="rpsls"
              id="rpsls"
              checked={props.gameMode === "rpsls"}
              onChange={handleGameModeChange}
            />
            <Label htmlFor="rpsls">
              <FauxCheckbox />Rock paper scissors lizard spock
            </Label>
          </Inputfield>
        </Fieldset>
        <Button type="submit">Done</Button>
        <Rules />
      </form>
    </div>
  );
};
export default Settings;
