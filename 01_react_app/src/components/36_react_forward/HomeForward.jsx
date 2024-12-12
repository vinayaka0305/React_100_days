import React, { useRef, useState } from "react";
import InputField from "./InputField";

const HomeForward = () => {
  // Create a ref to directly access the DOM element of the input field in the child component
  const newRef = useRef(null);

  // State to store the value of the input field
  const [values, setValues] = useState("");

  // Function to focus the input field when the "Focus the Input" button is clicked
  const focusInput = () => {
    if (newRef.current) { // Ensure the ref is attached before calling focus
      newRef.current.focus();
    }
  };

  // Function to set the state with the current value of the input field
  const settingValue = () => {
    if (newRef.current) { // Ensure the ref is attached before accessing the value
      setValues(newRef.current.value);
    }
  };

  return (
    <div>
      {/* InputField component with forwarded ref */}
      <InputField ref={newRef} type="text" />
      <br />
      {/* Button to set the value of the input field to the state */}
      <button onClick={settingValue}>Set Value</button>
      {/* Button to focus the input field */}
      <button onClick={focusInput}>Focus the Input</button>
      <br />
      <br />
      {/* Textarea to display the value from the state */}
      <textarea value={values} readOnly></textarea>
    </div>
  );
};

export default HomeForward;
