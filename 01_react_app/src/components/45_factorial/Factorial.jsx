import React, { useMemo } from "react";

const factorial = (num) => {
  console.log("factorial");
  if (num <= 1) return 1;
  return num * factorial(num - 1);
};

const Factorial = ({ num }) => {
  let result = useMemo(() => factorial(num), [num]);
  return (
    <div>
      The factorial of {num} is {result}
    </div>
  );
};

export default Factorial;
