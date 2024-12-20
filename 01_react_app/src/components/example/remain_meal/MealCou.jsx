import React, { useContext } from 'react'
import { MealCon } from './MealPro'

const MealCou = () => {
    
const{meals} = useContext(MealCon);

const result = meals.filter((meal)=> !meal.ticked);

  return (
    <div>
        <h1>Remaining Meal Count :{result.length}</h1>
    </div>
  )
}

export default MealCou