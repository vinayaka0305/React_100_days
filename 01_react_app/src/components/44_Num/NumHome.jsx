import React, { useMemo, useState } from "react";

const isArmstrongNumber = (num) => {
  console.log("expesive calculation function execution for armstrong");
  const numberOfDigits = `${num}`.length;
  let sum = 0;
  let temp = num;
  while (temp > 0) {
    let remainder = temp % 10;
    sum += remainder ** numberOfDigits;
    temp = parseInt(temp / 10);
  }
  return sum === num;
};

const isPrimerNumber = (num) => {
  console.log("expesive calculation function execution for primeNumber");
  if (num === 0 || num === 1) return false;
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const NumHome = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  const isArmstrong = useMemo(() => {
    isArmstrongNumber(num1);
  }, [num1]);

  const isPrime = useMemo(() => {
    isPrimerNumber(num2);
  }, [num2]);

  return (
    <div id="main">
      <h1>Armstrong Checked</h1>
      <br />
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(+e.target.value)}
      />
      <br />
      <br />
      <h3>
        result:{" "}
        {num1
          ? isArmstrong
            ? `${num1} is armstrong`
            : `${num1} is not armstrong`
          : `enter a number`}
      </h3>
      ----------------------------------------------------------------
      <br />
      <h1>PrimeChecker</h1>
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(+e.target.value)}
      />
      <br />
      <br />
      <h3>
        result:{" "}
        {num2
          ? isPrime
            ? `${num2} is Prime`
            : `${num2} is not prime`
          : `enter a number`}
      </h3>
    </div>
  );
};

export default NumHome;
