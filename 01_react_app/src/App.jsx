import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hello from './components/01_Hello/Hello'
import './App.css'
import Sports from './components/02_static_sports/Sports'
import Food from './components/03_static_food/Food'
import Toggle from './components/04_toggle_text/Toggle'
import Counter from './components/05_counter_app/Counter'
import ShoppingLIst from './components/06_shoppingList/ShoppingLIst'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Hello/> */}
      {/* <Sports/> */}
      {/* <Food/> */}
      {/* <Toggle/> */}
      {/* <Counter/> */}
      <ShoppingLIst/>
    </>
  )
}

export default App
