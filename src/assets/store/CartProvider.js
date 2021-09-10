import React from 'react'
import CartContext from './cart-context'

const CartProvider = (props) => {
  const addItemTocartHandler = (item) => {}

  const removeItemFromCartHandler = (id) => {}

  const CartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemTocartHandler,
    removeItem: removeItemFromCartHandler,
  }
  return <CartContext.Provider>{props.children}</CartContext.Provider>
}

export default CartProvider
