import React from "react";

const Profile = ({ setUserDetails, errors }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <div>
        <label>name: </label>
        <input type="text" name="name" onChange={handleChange} />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
      <div>
        <label>email: </label>
        <input type="email" name="email" onChange={handleChange} />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div>
        <label>age: </label>
        <input type="number" name="age" onChange={handleChange} />
        {errors.age && <p className="error">{errors.age}</p>}
      </div>
    </div>
  );
};

export default Profile;
