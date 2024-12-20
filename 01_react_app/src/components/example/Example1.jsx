import React from "react";
import MealSelect from "./remain_meal/MealSelect";
import { MealCon } from "./remain_meal/MealPro";
import MealCou from "./remain_meal/MealCou";

const Example1 = () => {
  return (
    <>
      <div id="main">Meal Home</div>
      <MealSelect/>
      <MealCou/>
    </>
  );
};

export default Example1;
