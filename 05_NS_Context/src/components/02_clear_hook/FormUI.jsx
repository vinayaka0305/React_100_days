import React from "react";
import useFormInput from "./useFormInput"; // Import custom hook

const FormUI = () => {
  const name = useFormInput(""); // Initialize input with empty string

  return (
    <form>
      <label>
        Name:
        <input type="text" value={name.value} onChange={name.onChange} /> {/* Controlled input */}
      </label>
      <button type="reset" onClick={name.reset}> {/* Reset button */}
        reset
      </button>
    </form>
  );
};

export default FormUI;
