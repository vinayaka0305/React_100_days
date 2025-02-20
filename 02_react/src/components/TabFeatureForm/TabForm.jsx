import { useState } from "react";
import Interests from "./Interests";
import Profile from "./Profile";
import Settings from "./Settings";

const TabForm = () => {

    const[errors,setErros] = useState({
        
    })
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState({
    name: "vinayaka",
    age: "28",
    email: "vav6473@gmail.com",
    interests: ["coding", "music", "javascript"],
    theme: "dark",
  });

  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate:()=>{
      const err={};
        if(!data.name || data.name.length<2){
            err.name = "name is not valid"
        }
        if(!data.age || data.age<18){
            err.age = "age is not valid"
        }
        if(!data.email || data.email.length<2){
            err.email = "email is not valid"
        }
        setErros(err)

        return err.name || err.age || err.email ? false : true;
      }
    },
    {
      name: "Interests",
      component: Interests,
      validate:()=>{
        const err = {}
        if(!data.interests.length<2){
            err.interests = "select atleast one"
        }
        setErros(err)
        return err.interests?false :true;
      }
    },
    {
      name: "Settings",
      component: Settings,
      validate:()=>{
        return true;
      }
    },
  ];

  const ActiveTabComponent = tabs[activeTab].component;

  const handleNextClick = () => {
    if(tabs[activeTab].validate()){
        setActiveTab((prev)=>prev+1)
    }
  };
  const handlePrevClick = () => {
  if(tabs[activeTab].validate()){
        setActiveTab((prev)=>prev-1)
    }
  };
  const handleSubmitClick = () => {
    console.log(data);
  };

  return (
    <div>
      <div className="h-container">
        {tabs.map((t, index) => (
          <div
            className="heading"
            key={index}
            onClick={() => setActiveTab(index)}
          >
            {t.name}
          </div>
        ))}
      </div>
      <div className="t-body">
        <ActiveTabComponent data={data} setData={setData} errors={errors} />
      </div>
      <div>
        {activeTab > 0 && <button onClick={handlePrevClick}>prev</button>}
        {activeTab < tabs.length - 1 && (
          <button onClick={handleNextClick}>Next</button>
        )}
        {activeTab === tabs.length - 1 && (
          <button onClick={handleSubmitClick}>submit</button>
        )}
      </div>
    </div>
  );
};

export default TabForm;
