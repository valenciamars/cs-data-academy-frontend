import { Link } from 'react-router-dom'
import QuickCheck from '../../components/lessons/QuickCheck'
import PracticeSolution from '../../components/lessons/PracticeSolution'

function Lesson2() {
  return (
    <main className="lesson-page">
      <section className="lesson-hero">
        <p className="lesson-label">Module 1 · Lesson 2</p>
        <h1>Variables</h1>
        <p>
          Variables are containers for information. You can store a name, a
          number, or a true/false value in a variable and use it later.
        </p>
      </section>

      <section className="lesson-section">
        <h2>What Are Variables?</h2>
        <p>
          A variable gives a piece of data a name. That makes your code easier
          to read and reuse. In JavaScript, you can create variables with let or const.
        </p>
        <ul className="lesson-list">
          <li>let lets you change the value later</li>
          <li>const keeps the value the same</li>
          <li>Good names make code easier to understand</li>
        </ul>
      </section>

      <section className="lesson-section">
        <h2>Code Example</h2>
        <p>
          This example creates two variables and uses them in a message:
        </p>
        <pre>
          <code>{`let studentName = 'Ava'
const lessonCount = 2

console.log(studentName + ' is learning lesson ' + lessonCount)`}</code>
        </pre>
        <p>
          The code stores a name and a number, then combines them into one message.
        </p>
      </section>

      <section className="lesson-section">
        <h2>Quick Check</h2>
        <p>Choose one answer for each question:</p>

        <div className="knowledge-check">
          <QuickCheck
            question="1. What is a variable?"
            options={[
              { label: 'A', text: 'A container for data' },
              { label: 'B', text: 'A keyboard key' },
              { label: 'C', text: 'A type of browser' },
            ]}
            correctAnswer="A"
            explanation="A variable stores data with a name."
          />

          <QuickCheck
            question="2. Which keyword usually means the value will not change?"
            options={[
              { label: 'A', text: 'let' },
              { label: 'B', text: 'const' },
              { label: 'C', text: 'if' },
            ]}
            correctAnswer="B"
            explanation="const is used when the value should stay the same."
          />

          <QuickCheck
            question="3. Why do developers use variables?"
            options={[
              { label: 'A', text: 'To make code easier to read' },
              { label: 'B', text: 'To delete information' },
              { label: 'C', text: 'To slow down the computer' },
            ]}
            correctAnswer="A"
            explanation="Variables make code easier to understand and reuse."
          />
        </div>
      </section>

      <section className="lesson-section">
        <h2>Practice</h2>
        <PracticeSolution
          instructions="Create a variable for your favorite color and print it to the console."
          solutionCode={`const favoriteColor = 'blue'
console.log(favoriteColor)`}
          languageLabel="JavaScript"
          explanation="This stores a favorite color and prints it so you can see the variable in action."
        />
      </section>

      <section className="lesson-nav">
        <Link to="/lessons/1" className="lesson-nav-button secondary">
          Previous Lesson
        </Link>
        <Link to="/lessons/3" className="lesson-nav-button primary">
          Next Lesson
        </Link>
      </section>
    </main>
  )
}

export default Lesson2