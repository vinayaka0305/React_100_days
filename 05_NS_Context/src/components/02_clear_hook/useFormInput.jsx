import React, { useState } from "react";

// Custom hook to manage form input state
const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue); // State for input value

  const onChange = (e) => {
    setValue(e.target.value); // Update value on input change
  };

  const reset = () => {
    setValue(initialValue); // Reset value to initial
  };

  return { value, onChange, reset }; // Return value, handler, and reset
};

export default useFormInput;
