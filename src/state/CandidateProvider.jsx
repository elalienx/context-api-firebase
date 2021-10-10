// NPM Packages
import React, { useContext, useEffect, useReducer } from "react";

// Project files
import reducer from "./candidateReducer";

// Properties
const CandidateContext = React.createContext(null);

export function CandidateProvider({ children }) {
  // Global state
  const [candidates, dispatch] = useReducer(reducer, []);

  return (
    <CandidateContext.Provider value={{ candidates, dispatch }}>
      {children}
    </CandidateContext.Provider>
  );
}

export function useCandidate() {
  const context = useContext(CandidateContext);

  return context;
}