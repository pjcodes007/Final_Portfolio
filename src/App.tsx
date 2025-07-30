import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className='bg-red-300 text-black'>Hello World</p>
    </>
  )
}

export default App
