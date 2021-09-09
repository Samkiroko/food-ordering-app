import { Fragment } from 'react'

import Header from './components/Layout/Header'
import AvailableMeals from './components/Meals/AvailableMeals'
import MealsSummary from './components/Meals/MealsSummary'

function App() {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  )
}

export default App
