import { Link } from 'react-router-dom'

function Lesson1() {
  return (
    <main className="lesson-page">
      <section className="lesson-hero">
        <p className="lesson-label">Module 1 · Lesson 1</p>
        <h1>Introduction to HTML</h1>
        <p>
          HTML is the skeleton of every webpage. It helps you arrange text,
          images, buttons, and links so a browser knows how to display them.
        </p>
      </section>

      <section className="lesson-section">
        <h2>What is HTML?</h2>
        <p>
          Think of HTML as the blueprint for a web page. When you write HTML,
          you are giving the browser clear instructions about what belongs on
          the page and how each section should be organized.
        </p>
        <ul className="lesson-list">
          <li>Use headings to create structure</li>
          <li>Use paragraphs to explain ideas clearly</li>
          <li>Use links and buttons to guide visitors</li>
        </ul>
      </section>

      <section className="lesson-section">
        <h2>HTML Example</h2>
        <p>
          This small example creates a title, a paragraph, and a button:
        </p>
        <pre>
          <code>{`<h1>Welcome to My Website</h1>
<p>This is my first webpage.</p>
<button>Click Me</button>`}</code>
        </pre>
      </section>

      <section className="lesson-section">
        <h2>Knowledge Check</h2>
        <p>Try answering these three quick questions:</p>

        <div className="knowledge-check">
          <div className="quiz-card">
            <h3>1. What does HTML help you build?</h3>
            <ul>
              <li>A. The structure of a webpage</li>
              <li>B. A spreadsheet</li>
              <li>C. A video file</li>
            </ul>
          </div>

          <div className="quiz-card">
            <h3>2. Which tag creates a heading?</h3>
            <ul>
              <li>A. &lt;button&gt;</li>
              <li>B. &lt;h1&gt;</li>
              <li>C. &lt;img&gt;</li>
            </ul>
          </div>

          <div className="quiz-card">
            <h3>3. What does a button help users do?</h3>
            <ul>
              <li>A. Read a paragraph</li>
              <li>B. Click and interact</li>
              <li>C. Play music</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="lesson-nav">
        <Link to="/lessons" className="lesson-nav-button secondary">
          Previous Lesson
        </Link>
        <Link to="/lessons/2" className="lesson-nav-button primary">
          Next Lesson
        </Link>
      </section>
    </main>
  )
}

export default Lesson1