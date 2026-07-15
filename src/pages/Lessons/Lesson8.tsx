import { Link } from 'react-router-dom'
import QuickCheck from '../../components/lessons/QuickCheck'
import PracticeSolution from '../../components/lessons/PracticeSolution'

function Lesson8() {
  return (
    <main className="lesson-page">
      <section className="lesson-hero">
        <p className="lesson-label">Module 1 · Lesson 8</p>
        <h1>Arrays</h1>
        <p>
          Arrays store lists of values in one place. They are useful when you
          want to keep track of several items, such as scores, names, or tasks.
        </p>
      </section>

      <section className="lesson-section">
        <h2>What Is an Array?</h2>
        <p>
          An array is a special variable that holds multiple values. You can access
          items by position, change values, check the length, and add new items.
        </p>
        <ul className="lesson-list">
          <li>Arrays use square brackets []</li>
          <li>Items are stored in order</li>
          <li>push adds a new item to the end</li>
        </ul>
      </section>

      <section className="lesson-section">
        <h2>Code Example</h2>
        <p>
          This example creates an array, reads an item, and adds another one:
        </p>
        <pre>
          <code>{`const colors = ['red', 'blue', 'green']
console.log(colors[0])
colors.push('yellow')
console.log(colors.length)`}</code>
        </pre>
        <p>
          The code shows the first item, adds a new color, and prints the new length.
        </p>
      </section>

      <section className="lesson-section">
        <h2>Quick Check</h2>
        <p>Choose one answer for each question:</p>

        <div className="knowledge-check">
          <QuickCheck
            question="1. What is an array?"
            options={[
              { label: 'A', text: 'A list of values' },
              { label: 'B', text: 'A single number' },
              { label: 'C', text: 'A condition' },
            ]}
            correctAnswer="A"
            explanation="An array stores a list of values in one place."
          />

          <QuickCheck
            question="2. How do you add an item to the end of an array?"
            options={[
              { label: 'A', text: 'With push' },
              { label: 'B', text: 'With if' },
              { label: 'C', text: 'With return' },
            ]}
            correctAnswer="A"
            explanation="push adds a new item to the end of an array."
          />

          <QuickCheck
            question="3. What does length tell you?"
            options={[
              { label: 'A', text: 'How many items are in the array' },
              { label: 'B', text: 'The first item in the array' },
              { label: 'C', text: 'The type of the array' },
            ]}
            correctAnswer="A"
            explanation="length tells you how many items are stored in the array."
          />
        </div>
      </section>

      <section className="lesson-section">
        <h2>Practice</h2>
        <PracticeSolution
          instructions="Create an array with three favorite foods and print the second item."
          solutionCode={`const favoriteFoods = ['pizza', 'tacos', 'sushi']
console.log(favoriteFoods[1])`}
          languageLabel="JavaScript"
          explanation="This creates a list and prints the item at index 1, which is the second item."
        />
      </section>

      <section className="lesson-nav">
        <Link to="/lessons/7" className="lesson-nav-button secondary">
          Previous Lesson
        </Link>
        <Link to="/lessons/9" className="lesson-nav-button primary">
          Next Lesson
        </Link>
      </section>
    </main>
  )
}

export default Lesson8
