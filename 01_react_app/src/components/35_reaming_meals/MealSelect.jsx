import React, { useContext } from "react";
import { MealContext } from "./mealcontext/MealProvider";

// Functional component to display and interact with the list of meals
const MealSelect = () => {
  // Access meals and the tickMeal function from the MealContext
  const { meals, tickMeal } = useContext(MealContext);

  return (
    <div>
      <h2>Meals :</h2>
      <ul>
        {/* Iterate over the meals array and render each meal as a list item */}
        {meals.map((meal) => (
          <li key={meal.id}>
            {/* Checkbox to toggle the ticked state of the meal */}
            <input
              type="checkbox"
              checked={meal.ticked || false} // Default to false if `ticked` is undefined
              onChange={() => tickMeal(meal.id)} // Call tickMeal function on checkbox change
            />
            {/* Display the name of the meal */}
            {meal.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealSelect;
