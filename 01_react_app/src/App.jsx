import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hello from './components/01_Hello/Hello'
import './App.css'
import Sports from './components/02_static_sports/Sports'
import Food from './components/03_static_food/Food'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Hello/> */}
      {/* <Sports/> */}
      <Food/>
    </>
  )
}

export default App
