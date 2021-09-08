import React from 'react'
import { Fragment } from 'react'
import classes from './Header.module.css'
import hero from '../assets/meals.jpg'

const Header = () => {
  return (
    <Fragment>
      <Header className={classes.Header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </Header>
      <div className={classes['main-image']}>
        <img src={hero} alt='hero' />
      </div>
    </Fragment>
  )
}

export default Header
