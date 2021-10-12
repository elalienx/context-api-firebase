// NPM packages
import { Link } from "react-router-dom";

// Project files
import { useCandidates } from "../state/CandidateProvider";
import ItemCandidate from "../components/ItemCandidate";

export default function Home() {
  // Global state
  const { candidates } = useCandidates();

  // Components
  const CandidateItems = candidates.map((item) => (
    <ItemCandidate key={item.id} item={item} to={`edit/${item.id}`} />
  ));

  return (
    <div>
      <h1>Home page</h1>
      <ol>{CandidateItems}</ol>
      <Link className="button" to="edit/new-profile">
        Add new profile
      </Link>
    </div>
  );
}
