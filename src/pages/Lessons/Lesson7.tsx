import { Link } from 'react-router-dom'
import QuickCheck from '../../components/lessons/QuickCheck'
import PracticeSolution from '../../components/lessons/PracticeSolution'

function Lesson7() {
  return (
    <main className="lesson-page">
      <section className="lesson-hero">
        <p className="lesson-label">Module 1 · Lesson 7</p>
        <h1>Functions</h1>
        <p>
          Functions are reusable blocks of code. They help you organize your
          program and avoid repeating the same instructions.
        </p>
      </section>

      <section className="lesson-section">
        <h2>What Is a Function?</h2>
        <p>
          A function has a name, can take inputs called parameters, and can return
          a value. You define a function once and call it whenever you need it.
        </p>
        <ul className="lesson-list">
          <li>Parameters are placeholders for input values</li>
          <li>Arguments are the values you pass in</li>
          <li>Return values send a result back to the caller</li>
        </ul>
      </section>

      <section className="lesson-section">
        <h2>Code Example</h2>
        <p>
          This example defines a function that adds two numbers:
        </p>
        <pre>
          <code>{`function addNumbers(a, b) {
  return a + b
}

console.log(addNumbers(2, 3))`}</code>
        </pre>
        <p>
          The function receives two values, adds them, and returns the result.
        </p>
      </section>

      <section className="lesson-section">
        <h2>Quick Check</h2>
        <p>Choose one answer for each question:</p>

        <div className="knowledge-check">
          <QuickCheck
            question="1. What is a function?"
            options={[
              { label: 'A', text: 'A reusable block of code' },
              { label: 'B', text: 'A data type' },
              { label: 'C', text: 'A loop' },
            ]}
            correctAnswer="A"
            explanation="A function is a reusable block of code."
          />

          <QuickCheck
            question="2. What are parameters?"
            options={[
              { label: 'A', text: 'Values passed into a function' },
              { label: 'B', text: 'Variables outside the function' },
              { label: 'C', text: 'HTML tags' },
            ]}
            correctAnswer="A"
            explanation="Parameters are the values a function receives."
          />

          <QuickCheck
            question="3. What does return do?"
            options={[
              { label: 'A', text: 'Sends a result back' },
              { label: 'B', text: 'Deletes a function' },
              { label: 'C', text: 'Repeats a loop' },
            ]}
            correctAnswer="A"
            explanation="return sends a value back to the place that called the function."
          />
        </div>
      </section>

      <section className="lesson-section">
        <h2>Practice</h2>
        <PracticeSolution
          instructions="Write a function that multiplies two numbers and returns the result."
          solutionCode={`function multiply(a, b) {
  return a * b
}

console.log(multiply(3, 4))`}
          languageLabel="JavaScript"
          explanation="This function takes two numbers, multiplies them, and sends the result back."
        />
      </section>

      <section className="lesson-nav">
        <Link to="/lessons/6" className="lesson-nav-button secondary">
          Previous Lesson
        </Link>
        <Link to="/lessons/8" className="lesson-nav-button primary">
          Next Lesson
        </Link>
      </section>
    </main>
  )
}

export default Lesson7
