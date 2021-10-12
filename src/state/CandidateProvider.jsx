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
  const [status, setStatus] = useState(0); // 0 loading, 1 loaded, 2 error

  // Properties
  const PATH = "candidates";

  // Methods
  const fetchData = useCallback(async (path) => {
    try {
      const candidates = await getCollection(path);

      dispatch({ type: "SET_CANDIDATES", payload: candidates });
      setStatus(1);
    } catch {
      setStatus(2);
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
