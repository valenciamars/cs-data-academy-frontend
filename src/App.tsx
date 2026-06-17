import { useState } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="navbar">
        <h2 className="logo">CS Data Academy</h2>

        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <div className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#">Home</a>
          <a href="#">Lessons</a>
          <a href="#">Projects</a>
          <a href="#">About</a>
        </div>
      </nav>

      <main className="home">
        <h1>Learn Coding & Data in a Fun Way ✨</h1>
        <p>
          CS Data Academy is a beginner-friendly learning platform for coding,
          data, and tech skills.
        </p>
        <button className="start-button">Get Started</button>
      </main>
    </>
  )
}

export default App