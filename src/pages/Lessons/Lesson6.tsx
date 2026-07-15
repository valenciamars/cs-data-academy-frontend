import { Link } from 'react-router-dom'
import QuickCheck from '../../components/lessons/QuickCheck'
import PracticeSolution from '../../components/lessons/PracticeSolution'

function Lesson6() {
  return (
    <main className="lesson-page">
      <section className="lesson-hero">
        <p className="lesson-label">Module 1 · Lesson 6</p>
        <h1>Loops</h1>
        <p>
          Loops let you repeat actions without writing the same code many times.
          They are very helpful when you want to check several items or print
          a list of values.
        </p>
      </section>

      <section className="lesson-section">
        <h2>What Is a Loop?</h2>
        <p>
          A loop repeats a block of code until a condition is no longer true.
          A for loop is often used when you know how many times to repeat, and a
          while loop keeps going as long as a condition remains true.
        </p>
        <ul className="lesson-list">
          <li>for loops repeat a set number of times</li>
          <li>while loops repeat while a condition is true</li>
          <li>loops save time and reduce repetition</li>
        </ul>
      </section>

      <section className="lesson-section">
        <h2>Code Example</h2>
        <p>
          This example uses a for loop to print three messages:
        </p>
        <pre>
          <code>{`for (let i = 0; i < 3; i++) {
  console.log('Round ' + i)
}`}</code>
        </pre>
        <p>
          The loop runs three times and prints a new round number each time.
        </p>
      </section>

      <section className="lesson-section">
        <h2>Quick Check</h2>
        <p>Choose one answer for each question:</p>

        <div className="knowledge-check">
          <QuickCheck
            question="1. What is a loop?"
            options={[
              { label: 'A', text: 'A way to repeat code' },
              { label: 'B', text: 'A type of variable' },
              { label: 'C', text: 'A CSS rule' },
            ]}
            correctAnswer="A"
            explanation="A loop repeats code until a condition is met."
          />

          <QuickCheck
            question="2. Which loop is often used when you know the number of repeats?"
            options={[
              { label: 'A', text: 'for' },
              { label: 'B', text: 'const' },
              { label: 'C', text: 'object' },
            ]}
            correctAnswer="A"
            explanation="for is commonly used when you know how many times to repeat."
          />

          <QuickCheck
            question="3. Why are loops helpful?"
            options={[
              { label: 'A', text: 'They avoid repeating code' },
              { label: 'B', text: 'They make numbers disappear' },
              { label: 'C', text: 'They create HTML tags' },
            ]}
            correctAnswer="A"
            explanation="Loops help you repeat work without writing the same code again."
          />
        </div>
      </section>

      <section className="lesson-section">
        <h2>Practice</h2>
        <PracticeSolution
          instructions="Write a for loop that prints the numbers 1 through 3."
          solutionCode={`for (let i = 1; i <= 3; i++) {
  console.log(i)
}`}
          languageLabel="JavaScript"
          explanation="This loop prints the numbers 1, 2, and 3 one at a time."
        />
      </section>

      <section className="lesson-nav">
        <Link to="/lessons/5" className="lesson-nav-button secondary">
          Previous Lesson
        </Link>
        <Link to="/lessons/7" className="lesson-nav-button primary">
          Next Lesson
        </Link>
      </section>
    </main>
  )
}

export default Lesson6
