import { useState } from 'react'
import LandingPage from './layout/LandingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="absolute w-full h-full bg-slate-300  flex items-center justify-center">
      <LandingPage/>
      </div>

    </>
  )
}

export default App