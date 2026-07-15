import { Link } from 'react-router-dom'
import QuickCheck from '../../components/lessons/QuickCheck'
import PracticeSolution from '../../components/lessons/PracticeSolution'

function Lesson3() {
  return (
    <main className="lesson-page">
      <section className="lesson-hero">
        <p className="lesson-label">Module 1 · Lesson 3</p>
        <h1>Data Types</h1>
        <p>
          Data types tell us what kind of information a value holds. JavaScript
          uses different types for words, numbers, true/false values, and more.
        </p>
      </section>

      <section className="lesson-section">
        <h2>Common Data Types</h2>
        <p>
          Some common types include strings, numbers, booleans, arrays, and objects.
          A string is text, a number is a numeric value, and a boolean is either true or false.
        </p>
        <ul className="lesson-list">
          <li>String: text such as 'hello'</li>
          <li>Number: values like 10 or 3.5</li>
          <li>Boolean: true or false</li>
          <li>Object: a collection of related values</li>
        </ul>
      </section>

      <section className="lesson-section">
        <h2>Code Example</h2>
        <p>
          This example stores different kinds of data in variables:
        </p>
        <pre>
          <code>{`const name = 'Mina'
const age = 16
const isStudent = true
const profile = { city: 'Chicago', grade: 'A' }

console.log(name, age, isStudent, profile.city)`}</code>
        </pre>
        <p>
          The code shows text, a number, a true/false value, and a simple object.
        </p>
      </section>

      <section className="lesson-section">
        <h2>Quick Check</h2>
        <p>Choose one answer for each question:</p>

        <div className="knowledge-check">
          <QuickCheck
            question="1. What is a string?"
            options={[
              { label: 'A', text: 'Text data' },
              { label: 'B', text: 'A number' },
              { label: 'C', text: 'A loop' },
            ]}
            correctAnswer="A"
            explanation="A string is text, like a name or a sentence."
          />

          <QuickCheck
            question="2. What does a boolean represent?"
            options={[
              { label: 'A', text: 'A word' },
              { label: 'B', text: 'True or false' },
              { label: 'C', text: 'A list' },
            ]}
            correctAnswer="B"
            explanation="A boolean stores either true or false."
          />

          <QuickCheck
            question="3. What is an object?"
            options={[
              { label: 'A', text: 'A collection of related values' },
              { label: 'B', text: 'A math sign' },
              { label: 'C', text: 'A function name' },
            ]}
            correctAnswer="A"
            explanation="An object groups related information together."
          />
        </div>
      </section>

      <section className="lesson-section">
        <h2>Practice</h2>
        <PracticeSolution
          instructions="Create a variable with your name as text and another with your age as a number."
          solutionCode={`const name = 'Mina'
const age = 16
console.log(name, age)`}
          languageLabel="JavaScript"
          explanation="This stores text and a number in separate variables."
        />
      </section>

      <section className="lesson-nav">
        <Link to="/lessons/2" className="lesson-nav-button secondary">
          Previous Lesson
        </Link>
        <Link to="/lessons/4" className="lesson-nav-button primary">
          Next Lesson
        </Link>
      </section>
    </main>
  )
}

export default Lesson3