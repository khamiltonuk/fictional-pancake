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

const Settings = props => {
  const rps = ["rock", "paper", "sissor"];
  const rpsls = ["rock", "paper", "sissor", "spock", "lizard"];
  return (
    <div id="settings-pane" className="settings" role="dialog">
      <form method="POST">
        <Fieldset>
          <h2>Select you game mode</h2>
          <Inputfield>
            <Input
              type="radio"
              name="game-mode"
              value="3"
              id="best-of-3"
              defaultChecked
              onClick={() => props.setGameLength(3)}
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
              onClick={() => props.setGameLength(5)}
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
              onClick={() => props.setGameLength(null)}
            />
            <Label htmlFor="non-stop">
              <FauxCheckbox />Non stop
            </Label>
          </Inputfield>
        </Fieldset>
        <Fieldset>
          <h2>Select you game type</h2>
          <Inputfield>
            <Input
              type="radio"
              name="game-type"
              value="rps"
              id="rps"
              onClick={() => props.setGameMode(rps)}
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
              defaultChecked
              onClick={() => props.setGameMode(rpsls)}
            />
            <Label htmlFor="rpsls">
              <FauxCheckbox />Rock paper scissors lizard spock
            </Label>
          </Inputfield>
        </Fieldset>
        <Rules />
      </form>
    </div>
  );
};
export default Settings;
