import React, { use, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../components/style/login.css";

const LoginForm = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
    appType: "music",
  });

  const[error,setError] = useState('');

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const validateForm=()=>{
    const emailRegex =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(!emailRegex.test(userDetails.email)){
        setError('pls enter valid email')
        return false;
    }
    if(!userDetails.password){
        setError('password cannot be empty')
        return false;
    }
    if(!userDetails.email || !userDetails.password){
        setError("Please fill in both fields.");
        return false;
    }
    setError('');
    return true;
  }

  const loginFnc = () => {
    axios
      .post(
        `https://academics.newtonschool.co/api/v1/user/login`,
        userDetails,
        {
          headers: {
            projectId: "6marrwzascw6",
          },
        }
      )
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setError('Invaid email or password')
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validateForm()){
        loginFnc();
    }
   
    // console.log(userDetails);
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Email:</label>
          <input
            type="email"
            id="username"
            name="email"
            onChange={handleChange}
            placeholder="Username here..."
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            placeholder="Password here..."
          />
          <br />
          <button type="submit">Login</button>
        </form>
        {error && <div>{error}</div>}
        <div className="ear-l"></div>
        <div className="ear-r"></div>
        <div className="panda-face">
          <div className="blush-l"></div>
          <div className="blush-r"></div>
          <div className="eye-l">
            <div className="eyeball-l"></div>
          </div>
          <div className="eye-r">
            <div className="eyeball-r"></div>
          </div>
          <div className="nose"></div>
          <div className="mouth"></div>
        </div>
        <div className="hand-l"></div>
        <div className="hand-r"></div>
        <div className="paw-l"></div>
        <div className="paw-r"></div>
      </div>
    </>
  );
};

export default LoginForm;
