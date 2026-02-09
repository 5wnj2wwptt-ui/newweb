import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './Pages/Landing'
import NotFound from './Pages/NotFound'
import { Lenis } from 'lenis/react'

function App() {
  return (
    <Lenis root>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </Lenis>
  )
}

export default App
