import React from "react";

const Settings = ({ userDetails, setUserDetails }) => {
  const { theme } = userDetails;

  const handleChange = (e) => {
    setUserDetails((prev) => ({
      ...prev,
      theme: e.target.name,
    }));
  };

  // const handleSubmit = () => {
  //   console.log(userDetails);
  // };

  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            name="dark"
            checked={theme === "dark"}
            onChange={handleChange}
          />
          dark
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="light"
            checked={theme === "light"}
            onChange={handleChange}
          />
        </label>
        light
      </div>
      {/* <button onClick={handleSubmit}>click</button> */}
    </div>
  );
};

export default Settings;
