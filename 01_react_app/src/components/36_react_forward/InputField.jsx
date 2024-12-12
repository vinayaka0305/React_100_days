import React, { forwardRef } from "react";

// InputField component uses forwardRef to allow the parent component to directly interact with the input element
const InputField = forwardRef((props, ref) => {
  return (
    <div>
      {/* Input element with ref passed from parent for direct access */}
      <input id="input" type="text" ref={ref} />
    </div>
  );
});

export default InputField;
