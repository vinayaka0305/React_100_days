import React from "react";

const Users = ({ loading, items }) => {
    // Log the current loading state for debugging purposes
    console.log(loading);

    return (
        <>
            {/* Check if the data is still loading */}
            {loading ? (
                // If loading is true, display a loading message
                <div>loading...</div>
            ) : (
                // If loading is false, display the list of user names
                <div>
                    {items.map((val, index) => (
                        // Render each user's first name inside a <li> element
                        // Use index as the key for each list item
                        <li key={index}>{val.name.first}</li>
                    ))}
                </div>
            )}
        </>
    );
};

export default Users;
