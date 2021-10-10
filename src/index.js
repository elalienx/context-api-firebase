import React from "react";
import ReactDOM from "react-dom";
import { CandidateProvider } from "./state/CandidateProvider";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <CandidateProvider>
      <App />
    </CandidateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
