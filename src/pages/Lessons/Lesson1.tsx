function Lesson1() {
  return (
    <main className="lesson-page">
      <section className="lesson-hero">
        <p className="lesson-label">Module 1 · Lesson 1</p>
        <h1>Introduction to HTML</h1>
        <p>
          HTML is the language used to structure content on a webpage.
        </p>
      </section>

      <section className="lesson-section">
        <h2>What is HTML?</h2>
        <p>
          HTML stands for HyperText Markup Language. It helps create headings,
          paragraphs, links, images, buttons, forms, and more.
        </p>
      </section>

      <section className="lesson-section">
        <h2>Example</h2>
        <pre>
          <code>{`<h1>Welcome to My Website</h1>
<p>This is my first webpage.</p>
<button>Click Me</button>`}</code>
        </pre>
      </section>

      <section className="lesson-section">
        <h2>Quick Check</h2>
        <p>What does HTML help you do?</p>
        <ul className="quiz-list">
          <li>Structure content on a webpage</li>
          <li>Store money in a bank account</li>
          <li>Edit photos</li>
        </ul>
      </section>
    </main>
  )
}

export default Lesson1