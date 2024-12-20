import React, { useMemo } from "react";

const UserSlist = ({ users, startingLetter }) => {
  // console.log(users,startingLetter);

    const filterUser = useMemo(() => {
      console.log('rendering')
      return users.filter((user) =>
        user.name.toLowerCase().startsWith(startingLetter)
      );
    }, [startingLetter]);

//   const filterUser = users.filter((user) =>
//     user.name.toLowerCase().startsWith(startingLetter)
//   );

  return (
    <div>
      {filterUser.map((user) => {
        return <li key={user.id}>{user.name}</li>;
      })}
    </div>
  );
};

export default UserSlist;
