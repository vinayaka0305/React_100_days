import React, { useState } from "react";

const Form = () => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [color, setColor] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const { username, email, password } = userDetails;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      setError("All fields must be filled");
      setColor("red");
    } else if (username.length < 4) {
      setError("username must atleast 5 charcter");
      setColor("red");
    } else if (!email.includes("@")) {
      setError("it must include @");
      setColor("red");
    } else {
      setError("congrats user logged in successfully");
      setColor("green");
    }
  };
  return (
    <div id="main">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="usernname">userName</label>
          <input type="text" name="username" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={handleChange} />
        </div>
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
      <div className="error" style={{ color: color }}>
        {error}
      </div>
    </div>
  );
};

export default Form;
