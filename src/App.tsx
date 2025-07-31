import { useState } from 'react'
import Background from './background/Background'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Background/>
      <Navbar/>
    </>
  )
}

export default App
