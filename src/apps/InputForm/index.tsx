import { useFormInput } from "./useFormInput.js";

export default function AppInputForm() {
  const firstNameProps = useFormInput("Noman");
  const lastNameProps = useFormInput("Ahmed");

  return (
    <>
      <label>
        First name:
        <input {...firstNameProps} />
      </label>
      <label>
        Last name:
        <input {...lastNameProps} />
      </label>
      <p>
        <b>
          Good morning, {firstNameProps.value} {lastNameProps.value}.
        </b>
      </p>
    </>
  );
}
