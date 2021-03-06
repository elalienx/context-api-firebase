// NPM packages
import { useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import PersonalInformation from "../components/PersonalInformation";

// Project files
import { useCandidates } from "../state/CandidatesProvider";
import { createDocument, updateDocument } from "../scripts/fireStore";

export default function Edit() {
  // Global state
  const { id } = useParams();
  const { candidates, dispatch } = useCandidates();
  const history = useHistory();

  // Local state
  const [profile, setProfile] = useState(findProfile(candidates, id));

  // Methods
  function findProfile(candidates, id) {
    const existingProfile = candidates.find((item) => item.id === id);
    const newProfile = { name: "", city: "", portfolioURL: "" };

    return existingProfile === undefined ? newProfile : existingProfile;
  }

  function onSave(profile) {
    id === "new-profile" ? onCreateProfile(profile) : onUpdateProfile(profile);
    history.push("/");
  }

  function onChange(key, value) {
    const field = { [key]: value };

    setProfile({ ...profile, ...field });
  }

  async function onCreateProfile(profile) {
    profile.id = await createDocument("candidates", profile);
    dispatch({ type: "CREATE_PROFILE", payload: profile });
  }

  async function onUpdateProfile(profile) {
    await updateDocument("candidates", profile);
    dispatch({ type: "UPDATE_PROFILE", payload: profile });
  }

  return (
    <div>
      <h1>Edit page</h1>
      <PersonalInformation profile={profile} onChange={onChange} />
      <Link to="/">Go back</Link>
      {" - "}
      <button onClick={() => onSave(profile)}>Save profile</button>
    </div>
  );
}
