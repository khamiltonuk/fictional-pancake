import React from "react";

import Rules from "./Rules";

const Settings = () => {
  return (
    <div id="settings-pane" className="settings" role="dialog">
      <form>
        <fieldset>
          <h2>Select you game mode</h2>
          <div className="inputfield">
            <input
              type="radio"
              name="game-mode"
              value="3"
              id="best-of-3"
              defaultChecked
            />
            <label htmlFor="best-of-3">
              <span />Best of 3
            </label>
          </div>
          <div className="inputfield">
            <input type="radio" name="game-mode" value="5" id="best-of-5" />
            <label htmlFor="best-of-5">
              <span />Best of 5
            </label>
          </div>
          <div className="inputfield">
            <input type="radio" name="game-mode" value="0" id="non-stop" />
            <label htmlFor="non-stop">
              <span />Non stop
            </label>
          </div>
        </fieldset>
        {/* <fieldset>
                            <h2>Select you game type</h2>
                            <div className="inputfield">
                                <input type="radio" name="game-type" value="rps" id="rps"/>
                                <label htmlFor="rps"><span></span>Rock paper scissors</label>
                            </div>
                            <div className="inputfield">
                                <input type="radio" name="game-type" value="rpsls" id="rpsls"  defaultChecked/>
                                <label htmlFor="rpsls"><span></span>Rock paper scissors lizard spock</label>
                            </div>
                        <fieldset> */}
        <Rules />
      </form>
    </div>
  );
};
export default Settings;
