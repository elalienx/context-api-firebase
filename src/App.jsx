// Project files
import { useCandidates } from "./state/CandidateProvider";

export default function App() {
  // Global state
  const { candidates, status } = useCandidates();

  return (
    <div className="App">
      {status === 0 && <p>Loading ⏱</p>}
      {status === 1 && <p>There is not candidates.</p>}
      {status === 2 && <p>Total candidates @{candidates.length}@.</p>}
      {status === 3 && <p>Error 🚨</p>}
    </div>
  );
}
