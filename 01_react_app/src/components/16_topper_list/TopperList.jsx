import React from "react";
import "./topper.css";

const TopperList = () => {
  const list = [
    {
      name: "naman",
      percent: 60.0,
    },
    {
      name: "ritesh",
      percent: 99.9431,
    },
    {
      name: "hitesh",
      percent: 65.3365,
    },
    {
      name: "shreya",
      percent: 80.64,
    },
    {
      name: "ankur",
      percent: 78.897,
    },
    {
      name: "vanshu",
      percent: 78.9876,
    },
    {
      name: "krupal",
      percent: 85.3214,
    },
  ];

  return (
    <div id="main">
      {list.map((item, index) => {
        if (item.percent > 75) {
          return (
            <>
              <div key={index}>
                <div className={item.percent >= 90 ? "bg-pink" : ""}>
                  {item.name}
                </div>
                <div>{item.percent.toFixed(2)}%</div>
              </div>
            </>
          );
        }
        return null
      })}
    </div>
  );
};

export default TopperList;
