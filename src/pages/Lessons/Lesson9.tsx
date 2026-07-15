import { Link } from 'react-router-dom'
import QuickCheck from '../../components/lessons/QuickCheck'
import PracticeSolution from '../../components/lessons/PracticeSolution'

function Lesson9() {
  return (
    <main className="lesson-page">
      <section className="lesson-hero">
        <p className="lesson-label">Module 1 · Lesson 9</p>
        <h1>Mini Practice Project</h1>
        <p>
          This project combines variables, data types, operators, conditionals,
          loops, functions, and arrays into one small beginner-friendly example.
        </p>
      </section>

      <section className="lesson-section">
        <h2>Student Score Analyzer</h2>
        <p>
          Imagine you want to check whether a group of student scores passes a target.
          You can store the scores in an array, loop through them, and decide which
          students passed.
        </p>
        <pre>
          <code>{`const scores = [70, 82, 65, 91]
const passingScore = 75

function isPassing(score) {
  return score >= passingScore
}

for (let i = 0; i < scores.length; i++) {
  if (isPassing(scores[i])) {
    console.log('Student ' + i + ' passed')
  } else {
    console.log('Student ' + i + ' needs practice')
  }
}`}</code>
        </pre>
        <p>
          The code uses an array of scores, a function to test each score, and a loop
          with a conditional to decide whether each student passed.
        </p>
      </section>

      <section className="lesson-section">
        <h2>Quick Check</h2>
        <p>Choose one answer for each question:</p>

        <div className="knowledge-check">
          <QuickCheck
            question="1. What does the array store?"
            options={[
              { label: 'A', text: 'A list of scores' },
              { label: 'B', text: 'A single string' },
              { label: 'C', text: 'A browser button' },
            ]}
            correctAnswer="A"
            explanation="The array stores a list of values, such as scores."
          />

          <QuickCheck
            question="2. What does the function check?"
            options={[
              { label: 'A', text: 'Whether a score passes the target' },
              { label: 'B', text: 'Whether a loop is open' },
              { label: 'C', text: 'Whether the page loads' },
            ]}
            correctAnswer="A"
            explanation="The function checks whether a score meets the passing target."
          />

          <QuickCheck
            question="3. Why is the loop useful?"
            options={[
              { label: 'A', text: 'It checks each score without repeating code' },
              { label: 'B', text: 'It creates new variables' },
              { label: 'C', text: 'It changes the CSS' },
            ]}
            correctAnswer="A"
            explanation="Loops help you inspect each item in a list efficiently."
          />
        </div>
      </section>

      <section className="lesson-section">
        <h2>Practice</h2>
        <PracticeSolution
          instructions="Try changing one score in the array and see how the output changes."
          solutionCode={`const scores = [70, 82, 65, 91]
const passingScore = 75

function isPassing(score) {
  return score >= passingScore
}

for (let i = 0; i < scores.length; i++) {
  console.log(isPassing(scores[i]))
}`}
          languageLabel="JavaScript"
          explanation="Changing a score changes whether the function returns true or false for that item."
        />
      </section>

      <section className="lesson-nav">
        <Link to="/lessons/8" className="lesson-nav-button secondary">
          Previous Lesson
        </Link>
        <Link to="/lessons" className="lesson-nav-button primary">
          Next Lesson
        </Link>
      </section>
    </main>
  )
}

export default Lesson9
