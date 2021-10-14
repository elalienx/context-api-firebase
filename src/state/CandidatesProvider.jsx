// NPM Packages
import { useContext, createContext, useReducer } from "react";

// Project files

import candidatesReducer from "./candidatesReducer";

// Properties
const CandidatesContext = createContext(null);

export function CandidatesProvider({ children }) {
  // Local state
  const [candidates, dispatch] = useReducer(candidatesReducer, []);

  return (
    <CandidatesContext.Provider value={{ candidates, dispatch }}>
      {children}
    </CandidatesContext.Provider>
  );
}

export function useCandidates() {
  const context = useContext(CandidatesContext);

  return context;
}
