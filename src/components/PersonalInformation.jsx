// Project files
import fields from "../data/fields.json";
import InputField from "./InputField";

export default function PersonalInformation({ profile, onChange }) {
  return (
    <section>
      {/* Refactor make this a map! */}
      <InputField
        onChange={onChange}
        options={fields.name}
        state={profile.name}
      />
      <InputField
        onChange={onChange}
        options={fields.city}
        state={profile.city}
      />
      <InputField
        onChange={onChange}
        options={fields.portfolioURL}
        state={profile.portfolioURL}
      />
    </section>
  );
}
