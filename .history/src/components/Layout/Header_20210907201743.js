import React from 'react'
import { Fragment } from 'react'
import classes from './Header.module.css'
import hero from '../assets/meals'

const Header = () => {
  return (
    <Fragment>
      <Header>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </Header>
      <div>
        <img src={hero} alt='hero' />
      </div>
    </Fragment>
  )
}

export default Header
