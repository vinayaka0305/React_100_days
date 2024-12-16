import React, { useMemo } from "react";

// Child component to display a filtered list of users based on the starting letter
const UsersList = ({ users, startingLetter }) => {
  // useMemo ensures that the filter logic is recomputed only when `users` or `startingLetter` changes
  const filterUser = useMemo(() => {
    console.log("Recomputing filterUser...");
    // Filter the users whose name starts with the specified letter, case-insensitive
    return users.filter((user) =>
      user.name.toLowerCase().startsWith(startingLetter.toLowerCase())
    );
  }, [users, startingLetter]); // Dependencies: recompute if `users` or `startingLetter` changes

  // Render the filtered list of users
  return (
    <div>
      {/* Map through the filtered users and render each name in a <li> element */}
      {filterUser.map((user) => (
        <li key={user.id}>{user.name}</li> // Use `user.id` as a unique key for each list item
      ))}
    </div>
  );
};

export default UsersList;
