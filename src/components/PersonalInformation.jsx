// Project files
import fields from "../data/fields.json";
import InputField from "./InputField";

export default function PersonalInformation({ profile, onChange }) {
  const FormFields = fields.map((item, index) => (
    <InputField
      key={index}
      onChange={onChange}
      options={item}
      state={profile[item.key]}
    />
  ));

  return <section>{FormFields}</section>;
}
