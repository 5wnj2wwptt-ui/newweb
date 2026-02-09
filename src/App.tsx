import ReactLenis, { useLenis } from 'lenis/react'
import './index.css'
import Landing from './Pages/Landing'
import Navigation from './Components/Navigation'

function App() {
  return (
    <>
      <ReactLenis root />
      <Navigation />
      <Landing />
    </>
  )
}

export default App
