// Project files
import { useCandidate } from "../state/CandidateProvider";

export default function Edit() {
  // Global state
  const { candidates, dispatch } = useCandidate();

  console.log("Edit.jsx");
  console.log(candidates);

  // Methods
  function onAddCandidate() {
    const newItem = {
      id: Math.random(),
      name: "foobar",
    };

    dispatch({ type: "ADD_ITEM", item: newItem });
  }

  return (
    <div id="edit">
      <h1>Edit page</h1>
      <button onClick={onAddCandidate}>Add candidate</button>
    </div>
  );
}
