import React from "react";

const Controls = props => {
  const operations = ["rock", "paper", "sissor", "spock", "lizard"];
  return (
    <nav class="actions">
      {operations.map((e, i) => (
        <button data-q={`make-move-${e}`} key={i} onClick={() => makeMove(e)}>
          {e}
        </button>
      ))}
    </nav>
  );
};

export default Controls;
