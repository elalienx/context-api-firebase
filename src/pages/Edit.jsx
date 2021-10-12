// NPM packages
import { useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";

// Project files
import InputField from "../components/InputField";
import EditFields from "../data/EditFields.json";
import { createDoc } from "../scripts/fireStore";
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

  async function onAddProfile() {
    const newProfile = {
      name: name,
      city: city,
      portfolioURL: portfolioURL,
    };
    const newId = await createDoc("candidates", newProfile);

    newProfile.id = newId;
    dispatch({ type: "ADD_CANDIDATE", payload: newProfile });
    history.push("/");
  }

  // Add a coordinator function to check if is a new profile or existing profile
  function onSave() {
    if (id === "new-profile") {
      onAddProfile();
    } else {
      onUpdateProfile();
    }
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
