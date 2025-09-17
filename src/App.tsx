import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Pressmeddelanden from './pages/Pressmeddelanden'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Hem</div>} />
        <Route path="/pressmeddelanden" element={<Pressmeddelanden />} />
      </Routes>
    </Router>
  )
}

export default App