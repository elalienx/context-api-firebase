// NPM Packages
import {
  useContext,
  createContext,
  useState,
  useCallback,
  useEffect,
  useReducer,
} from "react";

// Project files
import { getCollection } from "../scripts/fireStore";
import candidateReducer from "./candidateReducer";

// Properties
const CandidateContext = createContext(null);

export function CandidateProvider({ children }) {
  // Local state
  const [candidates, dispatch] = useReducer(candidateReducer, []);
  const [status, setStatus] = useState(0);

  // Properties
  const PATH = "candidates";

  // Methods
  // Refactor: Move to customHook to make easy to read
  const fetchData = useCallback(async (path) => {
    try {
      const candidates = await getCollection(path);

      if (candidates.length === 0) setStatus(1);
      if (candidates.length > 0) {
        dispatch({ type: "SET_CANDIDATES", payload: candidates });
        setStatus(2);
      }
    } catch {
      setStatus(3);
    }
  }, []);

  useEffect(() => fetchData(PATH), [fetchData]);

  return (
    <CandidateContext.Provider value={{ candidates, dispatch, status }}>
      {children}
    </CandidateContext.Provider>
  );
}

export function useCandidates() {
  const context = useContext(CandidateContext);

  return context;
}
