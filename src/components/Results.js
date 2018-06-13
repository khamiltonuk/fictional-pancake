import React from "react";

const Controls = props => {
  return (
    <div>
      <h2 class="screenreader">Results</h2>
      <ul class="results">
        <li>Win: {`${props.win}`}</li>
        <li>Draw:{`${props.draw}`}</li>
        <li>Lose: {`${props.lose}`}</li>
      </ul>
    </div>
  );
};

export default Controls;
