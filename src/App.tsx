import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Próximamente: <Route path="/nepoverse" element={<Nepoverse />} /> */}
    </Routes>
  )
}

export default App
