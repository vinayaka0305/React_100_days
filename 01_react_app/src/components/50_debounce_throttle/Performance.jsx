import React, { useCallback, useState } from 'react';

const Performance = () => {
  // State to manage the debounced input value.
  const [debounceInput, setDebounceInput] = useState('');

  // State to manage the throttled input value.
  const [throtleInput, setThrottleInput] = useState('');

  // Custom debounce function:
  // Ensures the function `fn` is executed only after the specified delay,
  // and resets the timer if the function is called again before the delay ends.
  const ourDebounce = (fn, delay) => {
    let timer; // Variable to store the timer ID.
    return (...arg) => {
      // Clear any existing timer to avoid executing the function too soon.
      clearTimeout(timer);

      // Set a new timer to execute the function after the specified delay.
      timer = setTimeout(() => {
        fn(...arg); // Call the function with its arguments.
      }, delay);
    };
  };

  // Custom throttle function:
  // Ensures the function `fn` is executed at most once in every `delay` period,
  // ignoring any additional calls during the delay.
  const ourThrottle = (fn, delay) => {
    let timer; // Variable to manage the timer state.
    return (...arg) => {
      // Only execute the function if no timer is active.
      if (!timer) {
        fn(...arg); // Call the function with its arguments.

        // Set a timer to block further calls until the delay has passed.
        timer = setTimeout(() => {
          timer = null; // Reset the timer to allow future calls.
        }, delay);
      }
    };
  };

  // Handler function for the debounced input.
  // Logs the input value and updates the debounceInput state.
  const debounceHandler = (e) => {
    console.log(e.target.value); // Log the input value to the console.
    setDebounceInput(e.target.value); // Update the debounce input state.
  };

  // Handler function for the throttled input.
  // Logs the input value and updates the throttleInput state.
  const thorttleHandler = (e) => {
    console.log(e.target.value); // Log the input value to the console.
    setThrottleInput(e.target.value); // Update the throttle input state.
  };

  // Memoized version of the debounced handler using useCallback.
  // This ensures the `handleDebounce` function is created only once and does not change on every render.
  const handleDebounce = useCallback(ourDebounce(debounceHandler, 800), []);

  // Memoized version of the throttled handler using useCallback.
  // This ensures the `handleThrottle` function is created only once and does not change on every render.
  const handleThrottle = useCallback(ourThrottle(thorttleHandler, 1000), []);

  return (
    <div id='main'>
      {/* Input field to demonstrate debounce behavior */}
      <div>
        <input type="text" onChange={handleDebounce} />
        <h3>debounce: {debounceInput}</h3>
      </div>
      <br />
      <br />
      {/* Input field to demonstrate throttle behavior */}
      <div>
        <input type="text" onChange={handleThrottle} />
        <h3>throttle: {throtleInput}</h3>
      </div>
    </div>
  );
};


export default Performance;

// Explanation of Changes:
// State Variables:

// debounceInput and throtleInput store the debounced and throttled values, respectively.
// These states are updated only when the debounced or throttled handler functions are called.
// Custom Debounce Function (ourDebounce):

// Clears any existing timer on every call.
// Starts a new timer to execute the function after the specified delay.
// Helps in delaying the function execution until the user stops typing.
// Custom Throttle Function (ourThrottle):

// Executes the function immediately if no timer is active.
// Blocks additional executions during the delay period.
// Useful for handling events that fire continuously, like scrolling or resizing.
// useCallback Usage:

// Wrapping the debounced and throttled handlers with useCallback ensures the functions are memoized and do not change unnecessarily between renders.
// Render Logic:

// The debounceInput state updates only after 800ms of inactivity.
// The throtleInput state updates at most once every 1000ms, even if the input changes more frequently.
// This ensures efficient handling of user input events, optimizing performance for high-frequency event scenarios.
