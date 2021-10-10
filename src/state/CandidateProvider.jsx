// NPM Packages
import React, { useContext, useEffect, useReducer } from "react";
import { fireStoreInstance } from "../scripts/firebase";
import { getCollection } from "../scripts/fireStore";

// Project files
import reducer from "./candidateReducer";

// Properties
const CandidateContext = React.createContext(null);

export function CandidateProvider({ children }) {
  // Global state
  const [candidates, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    dispatch({ type: "READ_FILES", path: "candidates" });
  }, []);

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

async function loadData(path) {
  const collection = await getCollection(fireStoreInstance, path);

  return collection;
}
