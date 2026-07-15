import { Link } from 'react-router-dom'
import QuickCheck from '../../components/lessons/QuickCheck'
import PracticeSolution from '../../components/lessons/PracticeSolution'

function Lesson1() {
  return (
    <main className="lesson-page">
      <section className="lesson-hero">
        <p className="lesson-label">Module 1 · Lesson 1</p>
        <h1>What Is Coding?</h1>
        <p>
          Coding is how people give instructions to a computer. These
          instructions help the computer solve problems, show information,
          and create apps, websites, and games.
        </p>
      </section>

      <section className="lesson-section">
        <h2>Why Do People Code?</h2>
        <p>
          A computer does exactly what it is told. Coding lets us tell it what
          to do in a clear, step-by-step way. Beginners often start with small
          commands and build their skills over time.
        </p>
        <ul className="lesson-list">
          <li>Code tells a computer what to do</li>
          <li>Programs can make tasks faster</li>
          <li>Small steps can build big projects</li>
        </ul>
      </section>

      <section className="lesson-section">
        <h2>Code Example</h2>
        <p>
          This tiny example shows a message on the screen using JavaScript:
        </p>
        <pre>
          <code>{`console.log('Hello, world!')`}</code>
        </pre>
        <p>
          The code prints the words Hello, world! to the console. A console is
          a place where programmers can see messages from their code.
        </p>
      </section>

      <section className="lesson-section">
        <h2>Quick Check</h2>
        <p>Choose one answer for each question:</p>

        <div className="knowledge-check">
          <QuickCheck
            question="1. What is coding?"
            options={[
              { label: 'A', text: 'Writing instructions for a computer' },
              { label: 'B', text: 'Drawing pictures' },
              { label: 'C', text: 'Making music' },
            ]}
            correctAnswer="A"
            explanation="Coding is giving clear instructions to a computer."
          />

          <QuickCheck
            question="2. What does console.log do?"
            options={[
              { label: 'A', text: 'Plays a video' },
              { label: 'B', text: 'Prints a message' },
              { label: 'C', text: 'Deletes files' },
            ]}
            correctAnswer="B"
            explanation="console.log prints information to the console."
          />

          <QuickCheck
            question="3. Why do people use code?"
            options={[
              { label: 'A', text: 'To solve problems with computers' },
              { label: 'B', text: 'To paint walls' },
              { label: 'C', text: 'To fold laundry' },
            ]}
            correctAnswer="A"
            explanation="Code helps people build solutions for computers and other technology."
          />
        </div>
      </section>

      <section className="lesson-section">
        <h2>Practice</h2>
        <PracticeSolution
          instructions="Try writing your own message in the console. Change the text inside the quotes and see what happens."
          solutionCode={`console.log('Hello, world!')`}
          languageLabel="JavaScript"
          explanation="This prints a message to the console so you can see your first line of code working."
        />
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