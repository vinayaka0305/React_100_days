import React, { useState } from "react";
import Profile from "./Profile";
import Interests from "./Interests";
import Settings from "./Settings";

const TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [errors,setErrors] = useState({})
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    age: "",
    interests: ["coding", "music", "javascript"],
    theme: "dark",
  });

  const tabs = [
    { name: "Profile", component: Profile },
    { name: "Interests", component: Interests },
    { name: "Settings", component: Settings },
  ];

  const ActiveComponent = tabs[activeTab].component;

  const validateProfile =()=>{
    let newErrors = {};

    if(!userDetails.name){
        newErrors.name ="Name is required"
    }else if(userDetails.name.length<=2){
        newErrors.name = "pls provide proper name"
    }

    if(!userDetails.email.trim()){
        newErrors.email = "Email is required"
    }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userDetails.email)){
        newErrors.email = "Invalid Email Format"
    }

    if(!userDetails.age){
         newErrors.age = "age is required"
    }else if(userDetails.age<18){
        newErrors.age = "Enter valid age"
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
    
  }

  const validateInterests =()=>{
    const newErros = {};
    if(userDetails.interests.length===0){
        newErros.interests = "At least one interest is required"
    }
    setErrors(newErros);
    return Object.keys(newErros).length === 0;
  }

  const handleNextClick = () => {
    if(activeTab === 0 && !validateProfile())return;
    if(activeTab === 1 && !validateInterests())return
    setActiveTab((prev) => prev + 1);
  };

  const handlePrevClick = () => {
    setActiveTab((prev) => prev - 1);
  };

  const handleSubmit = () => {
    console.log(userDetails);
  };



  return (
    <div>
      <div className="heading-container">
        {tabs.map((tab, index) => (
          <div
            className="heading"
            onClick={() => setActiveTab(index)}
            key={index}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div className="t-body">
        <ActiveComponent
          userDetails={userDetails}
          setUserDetails={setUserDetails}
          errors={errors}
        />
      </div>
      <div>
        {activeTab > 0 && <button onClick={handlePrevClick}>prev</button>}
        {activeTab < tabs.length - 1 && (
          <button onClick={handleNextClick}>next</button>
        )}
        {activeTab === tabs.length - 1 && (
          <button onClick={handleSubmit}>submit</button>
        )}
      </div>
    </div>
  );
};

export default TabForm;
