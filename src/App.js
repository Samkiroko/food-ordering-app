import { useState } from 'react'
import CartProvider from './store/CartProvider'
import Cart from './components/Cart/Cart'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'

function App() {
  const [cartIsShow, setCartIsShow] = useState(false)

  const showCartHandler = () => {
    setCartIsShow(!cartIsShow)
  }
  return (
    <CartProvider>
      {cartIsShow && <Cart onClose={showCartHandler} />}
      <Header onShowCart={showCartHandler} />

      <main>
        <Meals />
      </main>
    </CartProvider>
  )
}

export default App
