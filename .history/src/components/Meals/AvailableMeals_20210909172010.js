import React from 'react'
import { DUMMY_MEALS } from './dummy-meals'
import classes from './AvailableMeals.module.css'
import Card from '../UI/Card.js'
import MealItem from './MealItem/MealItem'

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem id={meal.id} key={meal.id} name={meal.name} description={meal.description} price={meal.price} />
  ))

  return (
    <div className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </div>
  )
}

export default AvailableMeals
