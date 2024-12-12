import React from "react";
import { useContext } from "react";
import { MealContext } from "./mealcontext/MealProvider";

// Functional component to display the count of unticked meals
const MealCounter = () => {
  // Access the meals array from the MealContext
  const { meals } = useContext(MealContext);

  // Filter the meals array to find meals that are not ticked
  const result = meals.filter((meal) => !meal.ticked);

  return (
    <div>
      {/* Display the count of remaining meals */}
      <h3>Meals remaining : {result.length}</h3>
    </div>
  );
};

export default MealCounter;
