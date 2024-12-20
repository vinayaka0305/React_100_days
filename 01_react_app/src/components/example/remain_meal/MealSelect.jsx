import React, { useContext } from "react";
import { MealCon } from "./MealPro";

const MealSelect = () => {
  const { meals, tickMeal } = useContext(MealCon);
  return (
    <div id="main">
      <h1>Meals:</h1>
      <ul>
        {meals.map((meal) => (
          <li key={meal.id}>
            <input
              type="checkbox"
              checked={meal.ticked || false}
              onChange={() => tickMeal(meal.id)}
            />
            {meal.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealSelect;
