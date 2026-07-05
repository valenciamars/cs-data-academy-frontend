import { Link } from 'react-router-dom'

function ModulePage() {
  const lessons = [
    { id: 1, title: 'Lesson 1: What Is Coding?' },
    { id: 2, title: 'Lesson 2: Variables' },
    { id: 3, title: 'Lesson 3: Data Types' },
    { id: 4, title: 'Lesson 4: Operators' },
    { id: 5, title: 'Lesson 5: Conditionals' },
    { id: 6, title: 'Lesson 6: Loops' },
    { id: 7, title: 'Lesson 7: Functions' },
    { id: 8, title: 'Lesson 8: Arrays' },
    { id: 9, title: 'Lesson 9: Mini Practice Project' },
  ]

  return (
    <main className="lessons-page">
      <h1>Module 1: Coding Basics</h1>
      <p>Complete each lesson to build your foundation.</p>

      <section className="lesson-grid">
        {lessons.map((lesson) => (
          <Link
            key={lesson.id}
            to={`/lessons/${lesson.id}`}
            className="lesson-card"
          >
            <h2>{lesson.title}</h2>
            <p>Start lesson →</p>
          </Link>
        ))}
      </section>
    </main>
  )
}

export default ModulePage