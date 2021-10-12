// NPM packages
import { updateDoc } from "firebase/firestore/lite";
import { useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";

// Project files
import InputField from "../components/InputField";
import EditFields from "../data/EditFields.json";
import { createDocument, updateDocument } from "../scripts/fireStore";
import { useCandidates } from "../state/CandidateProvider";

export default function Edit() {
  // Global state
  const { id } = useParams();
  const { candidates, dispatch } = useCandidates();
  const history = useHistory();

  // Local state
  const [profile, setProfile] = useState(getProfile(candidates, id));
  const [name, setName] = useState(profile.name);
  const [city, setCity] = useState(profile.city);
  const [portfolioURL, setPortfolioURL] = useState(profile.portfolioURL);

  // Methods
  function getProfile(candidates, id) {
    const existingProfile = candidates.find((item) => item.id === id);

    if (existingProfile === undefined)
      return { name: "", city: "", portfolioURL: "" };
    else return existingProfile;
  }

  function onSave() {
    const profile = { id, name, city, portfolioURL };

    id === "new-profile" ? onCreateProfile(profile) : onUpdateProfile(profile);
    history.push("/");
  }

  async function onCreateProfile(profile) {
    profile.id = await createDocument("candidates", newProfile);
    dispatch({ type: "CREATE_PROFILE", payload: profile });
  }

  async function onUpdateProfile(profile) {
    await updateDocument("candidates", profile);
    dispatch({ type: "UPDATE_PROFILE", payload: profile });
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
      <Link to="/">Go back</Link>
      {" - "}
      <button onClick={onSave}>Save profile</button>
    </div>
  );
}
