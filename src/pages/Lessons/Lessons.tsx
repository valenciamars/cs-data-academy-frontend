import { Link } from 'react-router-dom'

function Lessons() {
  return (
    <main className="lessons-page">
      <h1>Modules</h1>
      <p>Choose a module to see the lessons inside.</p>

      <section className="module-grid">
        <Link to="/lessons/module-1" className="module-card">
          <h2>Module 1: Web Development Basics</h2>
          <p>HTML, CSS, JavaScript, and beginner coding concepts.</p>
          <span>View Lessons →</span>
        </Link>
      </section>
    </main>
  )
}

export default Lessons