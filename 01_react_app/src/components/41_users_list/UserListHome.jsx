import React, { useEffect, useState } from "react";
import UsersList from "./UsersList"; // Importing the UsersList component

// Parent component that manages the list of users and filtering logic
const UserListHome = () => {
  // Static array of user objects, each with an id and name
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "Dave" },
  ];

  // State to hold the starting letter for filtering user names
  const [startingLetter, setStartingLetter] = useState("A");

  useEffect(() => {
    console.log("UserListHome re-rendered");
  }, [startingLetter]); // Log when startingLetter changes

  // Render the component
  return (
    <div id="main">
      <h1>welcome</h1> {/* Header for the page */}
      <section>
        {/* Input field for the user to set the starting letter */}
        <label>
          starting letter:
          <input
            type="text"
            value={startingLetter} // Controlled component: value tied to `startingLetter` state
            onChange={(e) => setStartingLetter(e.target.value)} // Update state on user input
            maxLength="1" // Restrict input to a single character
          />
        </label>
      </section>
      {/* Pass the users and the startingLetter as props to the UsersList component */}
      <UsersList users={users} startingLetter={startingLetter} />
    </div>
  );
};

export default UserListHome;
