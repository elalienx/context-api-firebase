// Project files
import { useCandidates } from "../state/CandidateProvider";

export default function Home() {
  // Global state
  const { candidates } = useCandidates();

  // Components
  const CandidateItems = candidates.map((item) => (
    <li key={item.id}>
      <b>Name:</b>
      {item.name}
      <b>Age:</b>
      {item.age}
      <b>Is willing to relocate?:</b>
      {item.willingToRelocate ? "Yes" : "No"}
    </li>
  ));

  return (
    <div>
      <h1>Home page</h1>
      <p>Total candidates: {candidates.length}</p>
      <ol>{CandidateItems}</ol>
    </div>
  );
}
