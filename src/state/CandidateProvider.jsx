// NPM Packages
import {
  useContext,
  createContext,
  useState,
  useCallback,
  useEffect,
} from "react";

// Project files
import { fireStoreInstance } from "../scripts/firebase";
import { getCollection } from "../scripts/fireStore";

// Properties
const CandidateContext = createContext(null);

export function CandidateProvider({ children }) {
  // Local state
  const [candidates, setCandidates] = useState([]);
  const [status, setStatus] = useState(0);

  // Methods
  const fetchData = useCallback(async () => {
    const candidates = await getCollection(fireStoreInstance, "candidates");

    if (candidates.length === 0) {
      setStatus(1);
    } else if (candidates.length > 0) {
      setCandidates(candidates);
      setStatus(2);
    } else {
      setStatus(3);
    }
  }, []);

  useEffect(() => fetchData(), [fetchData]);

  return (
    <CandidateContext.Provider value={{ candidates, setCandidates, status }}>
      {children}
    </CandidateContext.Provider>
  );
}

export function useCandidates() {
  const context = useContext(CandidateContext);

  return context;
}
