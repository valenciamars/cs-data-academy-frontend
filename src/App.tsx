import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'

import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Lessons from './pages/Lessons'
import Projects from './pages/Projects'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <BrowserRouter>
      <nav className="navbar">
        <h2 className="logo">CS Data Academy</h2>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <div className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <Link to="/">Home</Link>
          <Link to="/lessons">Lessons</Link>
          <Link to="/projects">Projects</Link>
          <a href="#">About</a>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App