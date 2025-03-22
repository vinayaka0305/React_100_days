import React from "react";

const Interests = ({ userDetails, setUserDetails, errors }) => {
  const { interests } = userDetails;
  // console.log(interests);
  const handleChange = (e) => {
    setUserDetails((prev) => ({
      ...prev,
      interests: e.target.checked
        ? [...prev.interests, e.target.name]
        : prev.interests.filter((i) => i !== e.target.name),
    }));
  };

  // const handleClick = () => {
  //   console.log(userDetails);
  // };
  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            name="coding"
            onChange={handleChange}
            checked={interests.includes("coding")}
          />
          coding
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="music"
            onChange={handleChange}
            checked={interests.includes("music")}
          />
          music
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="javascript"
            onChange={handleChange}
            checked={interests.includes("javascript")}
          />
          javascript
        </label>
      </div>
      {/* <button onClick={handleClick}>click</button> */}
      {errors.interests && <p className="error">{errors.interests}</p>}
    </div>
  );
};

export default Interests;
