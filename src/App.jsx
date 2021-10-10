// NPM packages
// Project files
import Header from "./components/Header";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import { useCandidate } from "./state/CandidateProvider";
import { useCallback, useEffect, useState } from "react";

export default function App() {
  // Global state
  const { candidates } = useCandidate();

  // Local state
  const [status, setStatus] = useState(0); // 0 loading, 1 loaded but empty, 2 loaded with data, 3 error

  // Methods
  const checkStatus = useCallback(async () => {
    const result = await candidates;

    console.log("App.jsx useCallback");
    console.log(result); 

    if (result.length === 0) setStatus(1);
    else if (result.length > 0) setStatus(2);
    else setStatus(3);
  }, [candidates]);

  useEffect(() => checkStatus(), [checkStatus]);

  return (
    <div className="App">
      {status === 0 && <p>Loading ⏱</p>}
      {status === 1 && <p>There is not candidates.</p>}
      {status === 2 && <p>Total candidates @{candidates.length}@.</p>}
      {status === 3 && <p>Error 🚨</p>}
    </div>
  );
}
