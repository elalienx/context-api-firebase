export default function InputField({ state, options }) {
  const [getter, setter] = state;
  const { label = "New field:", placeholder = "", type = "string" } = options;

  return (
    <fieldset>
      <label>
        {label}
        <input
          type={type}
          placeholder={placeholder}
          value={getter}
          onChange={(event) => setter(event.target.value)}
        />
      </label>
    </fieldset>
  );
}
