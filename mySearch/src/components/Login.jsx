import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MusicProvider } from "../context/MusicContext";

const Login = () => {
  const { setUser } = useContext(MusicProvider);

  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
    appType: "music",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios
      .post("https://academics.newtonschool.co/api/v1/user/login", userDetails)
      .then((result) => {
        sessionStorage.setItem("token", result.data.token);
        sessionStorage.setItem("name", result.data.data.user.name);
        sessionStorage.setItem("id", result.data.data.user._id);
        sessionStorage.setItem("loginStatus", JSON.stringify(true));
        setUser({ username: result.data.data.user.name, loginStatus: true });
        navigate('/')
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div id="form-container">
      <form onSubmit={handleSubmit}>
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

export default Login;
