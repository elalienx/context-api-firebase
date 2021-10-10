// Project files
import { useCandidate } from "../state/CandidateProvider";

export default function Home() {
  // Global state
  const { candidates } = useCandidate();

  console.log("Home.jsx");
  console.log(candidates);

  return (
    <div id="home">
      <h1>Home page</h1>
      <p>Total candidates: {candidates.length}.</p>
    </div>
  );
}
