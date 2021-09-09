import React from 'react'
import { DUMMY_MEALS } from './dummy-meals'
import classes from './AvailableMeals.module.css'
impoet Card from "../UI/Card.js"

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <div className={classes.Meal} key={meal.id}>
      {/* <img src={meal.imageUrl} alt={meal.name} /> */}
      <div className={classes.MealInfo}>
        <h1>{meal.name}</h1>
        <h3>{meal.description}</h3>
        <p>
          <strong>{meal.price}</strong>
        </p>
      </div>
    </div>
  ))

  return <section className={classes.meals}>
    <Card>{mealsList}<Card/>
    
  </section>
}

export default AvailableMeals
