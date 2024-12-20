import React, { createContext, useState } from "react";

export const MealCon = createContext();
const todayMeals = [
  { id: 1, name: "Gobi Chilli" },
  { id: 2, name: "Panner Satay" },
  { id: 3, name: "Veg pulav" },
];

const MealPro = ({ children }) => {
  const [meals, setMeals] = useState(todayMeals);

  const tickMeal = (id) => {
    let result = meals.map((meal) =>
      meal.id === id ? { ...meal, ticked: !meal.ticked } : meal
    );
    setMeals(result);
  };

  return (
    <MealCon.Provider value={{ meals, tickMeal }}>{children}</MealCon.Provider>
  );
};

export default MealPro;
