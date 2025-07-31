import { useState } from 'react'
import NoiseBackground from './background/NoiseBackground'
import Navbar from './components/Navbar'
import Landing from './components/LandingPage'
import ProjectsSection from './components/ProjectsSection'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NoiseBackground/>
      <Navbar/>
      <ProjectsSection/>
    </>
  )
}

export default App
