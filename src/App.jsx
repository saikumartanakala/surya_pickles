import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SuryaPickles from './Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SuryaPickles/>
    </>
  )
}

export default App
