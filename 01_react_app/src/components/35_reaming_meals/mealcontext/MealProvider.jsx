import React, { createContext, useState } from "react";

// Create a Context for the Meal state
export const MealContext = createContext();

// Define the initial list of meals for today
const todayMeals = [
  { id: 1, name: "baked beans" },
  { id: 2, name: "baked sweet potatoes" },
  { id: 3, name: "baked potatoes" },
];

// Define a context provider component
const MealProvider = ({ children }) => {
  // State to hold the list of meals, initialized with `todayMeals`
  const [meals, setMeals] = useState(todayMeals);

  // Function to toggle the `ticked` property of a meal by its ID
  const tickMeal = (id) => {
    // Map through the meals to find the meal with the matching ID
    // and toggle its `ticked` property
    let result = meals.map((meal) =>
      meal.id === id ? { ...meal, ticked: !meal.ticked } : meal
    );
    console.log(result); // Log the updated meal list to the console
    setMeals(result); // Update the state with the modified meal list
  };

  // Provide the `meals` state and `tickMeal` function to the context consumers
  return (
    <MealContext.Provider value={{ meals, tickMeal }}>
      {children}
    </MealContext.Provider>
  );
};

export default MealProvider;
