import { Link } from 'react-router-dom'

function ModulePage() {
  const lessons = [
    { id: 1, title: 'Lesson 1: What Is Coding?', path: '/lessons/1' },
    { id: 2, title: 'Lesson 2: Variables', path: '/lessons/2' },
    { id: 3, title: 'Lesson 3: Data Types', path: '/lessons/3' },
    { id: 4, title: 'Lesson 4: Operators', path: '/lessons/4' },
    { id: 5, title: 'Lesson 5: Conditionals', path: '/lessons/5' },
    { id: 6, title: 'Lesson 6: Loops', path: '/lessons/6' },
    { id: 7, title: 'Lesson 7: Functions', path: '/lessons/7' },
    { id: 8, title: 'Lesson 8: Arrays', path: '/lessons/8' },
    { id: 9, title: 'Lesson 9: Mini Practice Project', path: '/lessons/9' },
  ]

  return (
    <main className="lessons-page">
      <h1>Module 1: Coding Basics</h1>

      <p>Complete each lesson to build your coding foundation.</p>

      <section className="lesson-grid">
        {lessons.map((lesson) => (
          <Link
            key={lesson.id}
            to={lesson.path}
            className="lesson-card"
          >
            <h2>{lesson.title}</h2>
            <p>Start Lesson →</p>
          </Link>
        ))}
      </section>
    </main>
  )
}

export default ModulePage