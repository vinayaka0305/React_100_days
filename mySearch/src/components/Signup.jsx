import axios from "axios";
import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
const Signup = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    appType: "music",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://academics.newtonschool.co/api/v1/user/signup", userDetails)
      .then((result) => {
        // console.log(result.data);
        navigate('/login')
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div id="form-container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            onChange={handleChange}
            value={userDetails.name}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={handleChange}
            value={userDetails.email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            onChange={handleChange}
            value={userDetails.password}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Signup;
