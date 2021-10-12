// NPM packages
import { useState } from "react";

// Project files
import InputField from "../components/InputField";
import EditFields from "../data/EditFields.json";
import { createDoc } from "../scripts/fireStore";
import { useCandidates } from "../state/CandidateProvider";

export default function Edit() {
  // Global state
  const { dispatch } = useCandidates();

  // Local state
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [portfolioURL, setPortfolioURL] = useState("");

  // Methods
  async function onAddCandidate() {
    const newCandidate = {
      name: name,
      age: age,
      willingToRelocate: false,
    };
    const newDocumentId = await createDoc("candidates", newCandidate);

    dispatch({
      type: "ADD_CANDIDATE",
      payload: { id: newDocumentId, ...newCandidate },
    });
    alert("Candidate added successfully");
  }

  return (
    <div>
      <h1>Edit page</h1>
      <InputField state={[name, setName]} options={EditFields.name} />
      <InputField state={[city, setCity]} options={EditFields.city} />
      <InputField
        state={[portfolioURL, setPortfolioURL]}
        options={EditFields.portfolioURL}
      />
      <button onClick={onAddCandidate}>Add candidate</button>
    </div>
  );
}
