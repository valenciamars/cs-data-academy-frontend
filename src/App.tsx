import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'

import Footer from './components/layout/Footer'

import Home from './pages/Home'
import Lessons from './pages/Lessons/Lessons'
import ModulePage from './pages/Lessons/ModulePage'
import Projects from './pages/Projects'

import Lesson1 from './pages/Lessons/Lesson1'
import Lesson2 from './pages/Lessons/Lesson2'
import Lesson3 from './pages/Lessons/Lesson3'

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

          <Link to="/lessons">Modules</Link>

          <Link to="/projects">Projects</Link>

          <a href="#">About</a>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/lessons" element={<Lessons />} />

        <Route
          path="/lessons/module-1"
          element={<ModulePage />}
        />

        <Route path="/lessons/1" element={<Lesson1 />} />
        <Route path="/lessons/2" element={<Lesson2 />} />
        <Route path="/lessons/3" element={<Lesson3 />} />

        <Route path="/projects" element={<Projects />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App