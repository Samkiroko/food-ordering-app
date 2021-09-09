import { Fragment, useState } from 'react'
import Cart from './components/Cart/Cart'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'

function App() {
  const [cartIsShow, setCartIsShow] = useState(false)

  const showCartHandler = () => {
    setCartIsShow(!cartIsShow)
  }
  return (
    <Fragment>
      {cartIsShow && <Cart onClose={showCartHandler} />}
      <Header onShowCart={showCartHandler} />

      <main>
        <Meals />
      </main>
    </Fragment>
  )
}

export default App
