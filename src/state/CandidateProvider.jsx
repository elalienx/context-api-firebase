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
  const [candidates, dispatch] = useReducer(reducer, [], loadData);

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

async function loadData() {
  const collection = await getCollection(fireStoreInstance, "candidates");

  return collection;
}
