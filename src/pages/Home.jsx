// Project files
import { useEffect, useState, useCallback } from "react";
import { useCandidate } from "../state/CandidateProvider";

export default function Home() {
  // Global state
  const { candidates } = useCandidate();

  // Local state
  const [status, setStatus] = useState(0); // 0 loading, 1 loaded, 2 error

  // Methods
  const checkStatus = useCallback(async () => {
    const result = await candidates;

    console.log("Home.jsx useCallback");
    console.log(result);

    if (result.length > 0) setStatus(1);
    else setStatus(2);
  }, [candidates]);

  useEffect(() => checkStatus(), [checkStatus]);

  // Components
  const MyHome = (
    <>
      <h1>Home page</h1>
      <p>Total candidates: @{candidates.length}@.</p>
    </>
  );

  return (
    <div id="home">
      {status === 0 && <p>Loading...</p>}
      {status === 1 && MyHome}
      {status === 2 && <p>Error...</p>}
    </div>
  );
}
