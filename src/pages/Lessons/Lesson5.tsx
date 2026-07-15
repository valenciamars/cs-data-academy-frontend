import { Link } from 'react-router-dom'
import QuickCheck from '../../components/lessons/QuickCheck'
import PracticeSolution from '../../components/lessons/PracticeSolution'

function Lesson5() {
  return (
    <main className="lesson-page">
      <section className="lesson-hero">
        <p className="lesson-label">Module 1 · Lesson 5</p>
        <h1>Conditionals</h1>
        <p>
          Conditionals let your program make choices. They check whether a
          condition is true and then choose the right path.
        </p>
      </section>

      <section className="lesson-section">
        <h2>Using if, else if, and else</h2>
        <p>
          The if statement runs code when a condition is true. The else if and
          else branches help you handle other cases.
        </p>
        <ul className="lesson-list">
          <li>if runs when the condition is true</li>
          <li>else if handles another possible case</li>
          <li>else runs when none of the earlier cases match</li>
        </ul>
      </section>

      <section className="lesson-section">
        <h2>Code Example</h2>
        <p>
          This example gives a message depending on a score:
        </p>
        <pre>
          <code>{`const score = 85

if (score >= 90) {
  console.log('Great job!')
} else if (score >= 70) {
  console.log('Nice work!')
} else {
  console.log('Keep practicing!')
}`}</code>
        </pre>
        <p>
          The program checks the score and selects a matching message.
        </p>
      </section>

      <section className="lesson-section">
        <h2>Quick Check</h2>
        <p>Choose one answer for each question:</p>

        <div className="knowledge-check">
          <QuickCheck
            question="1. What does if do?"
            options={[
              { label: 'A', text: 'Runs code when a condition is true' },
              { label: 'B', text: 'Stops the program' },
              { label: 'C', text: 'Repeats code forever' },
            ]}
            correctAnswer="A"
            explanation="if runs code whenever its condition is true."
          />

          <QuickCheck
            question="2. What does else handle?"
            options={[
              { label: 'A', text: 'The first condition only' },
              { label: 'B', text: 'A fallback case' },
              { label: 'C', text: 'A loop' },
            ]}
            correctAnswer="B"
            explanation="else handles the case when earlier conditions are not true."
          />

          <QuickCheck
            question="3. Why are conditionals useful?"
            options={[
              { label: 'A', text: 'They let programs make choices' },
              { label: 'B', text: 'They define variables' },
              { label: 'C', text: 'They create arrays' },
            ]}
            correctAnswer="A"
            explanation="Conditionals let a program choose different paths."
          />
        </div>
      </section>

      <section className="lesson-section">
        <h2>Practice</h2>
        <PracticeSolution
          instructions="Create a simple condition that prints a message when a number is greater than 10."
          solutionCode={`const number = 12

if (number > 10) {
  console.log('The number is greater than 10')
}`}
          languageLabel="JavaScript"
          explanation="This checks whether a number is greater than 10 and prints a message when it is."
        />
      </section>

      <section className="lesson-nav">
        <Link to="/lessons/4" className="lesson-nav-button secondary">
          Previous Lesson
        </Link>
        <Link to="/lessons/6" className="lesson-nav-button primary">
          Next Lesson
        </Link>
      </section>
    </main>
  )
}

export default Lesson5
