import React from "react";
import ReactDOM from "react-dom";
import GameContainer from "./GameContainer";
import "./index.css";
import "normalize.css/normalize.css";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<GameContainer />, document.getElementById("root"));

registerServiceWorker();
