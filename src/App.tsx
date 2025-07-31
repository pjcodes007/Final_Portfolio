import { useState } from 'react'
import Home from './Pages/Home'
import './App.css'
import CustomCursorWrapper from './components/CustomCursor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <CustomCursorWrapper>
      <Home />
    </CustomCursorWrapper>
  )
}

export default App;