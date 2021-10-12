import React from "react";
import ReactDOM from "react-dom";
import { CandidatesProvider } from "./state/CandidatesProvider";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <CandidatesProvider>
      <App />
    </CandidatesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
