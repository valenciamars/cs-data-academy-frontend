import { Link } from 'react-router-dom'
import QuickCheck from '../../components/lessons/QuickCheck'
import PracticeSolution from '../../components/lessons/PracticeSolution'

function Lesson4() {
  return (
    <main className="lesson-page">
      <section className="lesson-hero">
        <p className="lesson-label">Module 1 · Lesson 4</p>
        <h1>Operators</h1>
        <p>
          Operators help you work with values. They can add numbers, compare
          values, and test whether more than one condition is true.
        </p>
      </section>

      <section className="lesson-section">
        <h2>Types of Operators</h2>
        <p>
          Arithmetic operators do math, comparison operators check relationships,
          and logical operators combine conditions.
        </p>
        <ul className="lesson-list">
          <li>+ adds values</li>
          <li>=== checks if two values are equal</li>
          <li>&& means both conditions must be true</li>
        </ul>
      </section>

      <section className="lesson-section">
        <h2>Code Example</h2>
        <p>
          This example shows arithmetic, comparison, and logical operators:
        </p>
        <pre>
          <code>{`const score = 10
const total = 20
const isPassing = score > 5
const isPerfect = score === total

console.log(score + total)
console.log(isPassing)
console.log(isPassing && !isPerfect)`}</code>
        </pre>
        <p>
          The code adds two numbers, checks a comparison, and combines conditions.
        </p>
      </section>

      <section className="lesson-section">
        <h2>Quick Check</h2>
        <p>Choose one answer for each question:</p>

        <div className="knowledge-check">
          <QuickCheck
            question="1. What does + do?"
            options={[
              { label: 'A', text: 'Adds values' },
              { label: 'B', text: 'Compares values' },
              { label: 'C', text: 'Prints text' },
            ]}
            correctAnswer="A"
            explanation="The + operator adds values together."
          />

          <QuickCheck
            question="2. What does === compare?"
            options={[
              { label: 'A', text: 'Whether values are equal' },
              { label: 'B', text: 'Whether a value is missing' },
              { label: 'C', text: 'Whether a loop repeats' },
            ]}
            correctAnswer="A"
            explanation="=== checks if two values are equal."
          />

          <QuickCheck
            question="3. What does && mean?"
            options={[
              { label: 'A', text: 'Either condition is true' },
              { label: 'B', text: 'Both conditions must be true' },
              { label: 'C', text: 'The value changes' },
            ]}
            correctAnswer="B"
            explanation="&& means both conditions must be true."
          />
        </div>
      </section>

      <section className="lesson-section">
        <h2>Practice</h2>
        <PracticeSolution
          instructions="Create a small expression that adds two numbers and checks whether the result is greater than 10."
          solutionCode={`const a = 6
const b = 7
const result = a + b
console.log(result > 10)`}
          languageLabel="JavaScript"
          explanation="This adds two numbers and checks whether the total is greater than 10."
        />
      </section>

      <section className="lesson-nav">
        <Link to="/lessons/3" className="lesson-nav-button secondary">
          Previous Lesson
        </Link>
        <Link to="/lessons/5" className="lesson-nav-button primary">
          Next Lesson
        </Link>
      </section>
    </main>
  )
}

export default Lesson4
