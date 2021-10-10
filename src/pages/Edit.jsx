import { useState } from "react";

export default function Edit() {
  // Local state
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [relocate, setRelocate] = useState(false);

  // Methods
  async function onAddCandidate() {
    const newCandidate = {
      name: name,
      age: age,
      willingToRelocate: relocate,
    };

    await createDoc("candidates", newCandidate);
  }

  return (
    <div>
      <h1>Edit page</h1>
      <form>
        <label>
          Name:
          <input
            type="text"
            placeholder="Eduardo Alvarez"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            placeholder="35"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />
        </label>
        <label>
          <input
            type="checkbox"
            value={relocate}
            onChange={(event) => setRelocate(event.target.value)}
          />
          Is willing to relocate?
        </label>
        <button onClick={onAddCandidate}>Add candidate</button>
      </form>
    </div>
  );
}
