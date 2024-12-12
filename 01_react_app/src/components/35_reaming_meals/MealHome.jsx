import React from 'react'
import MealProvider, { MealContext } from './mealcontext/MealProvider'
import MealSelect from './MealSelect'
import MealCounter from './MealCounter'

const MealHome = () => {
  return (
    <MealProvider>
          <div>MealHome</div>
          <MealSelect/>
            <MealCounter/>
    </MealProvider>
  
  )
}

export default MealHome