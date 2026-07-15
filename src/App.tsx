import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'

import Footer from './components/layout/Footer'

import Home from './pages/Home.tsx'
import Lessons from './pages/Lessons/Lessons.tsx'
import ModulePage from './pages/Lessons/ModulePage.tsx'
import Projects from './pages/Projects.tsx'

import Lesson1 from './pages/Lessons/Lesson1.tsx'
import Lesson2 from './pages/Lessons/Lesson2.tsx'
import Lesson3 from './pages/Lessons/Lesson3.tsx'
import Lesson4 from './pages/Lessons/Lesson4.tsx'
import Lesson5 from './pages/Lessons/Lesson5.tsx'
import Lesson6 from './pages/Lessons/Lesson6.tsx'
import Lesson7 from './pages/Lessons/Lesson7.tsx'
import Lesson8 from './pages/Lessons/Lesson8.tsx'
import Lesson9 from './pages/Lessons/Lesson9.tsx'

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
        <Route path="/lessons/4" element={<Lesson4 />} />
        <Route path="/lessons/5" element={<Lesson5 />} />
        <Route path="/lessons/6" element={<Lesson6 />} />
        <Route path="/lessons/7" element={<Lesson7 />} />
        <Route path="/lessons/8" element={<Lesson8 />} />
        <Route path="/lessons/9" element={<Lesson9 />} />

        <Route path="/projects" element={<Projects />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App