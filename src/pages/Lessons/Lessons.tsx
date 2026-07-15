import { useState } from 'react'
import { Link } from 'react-router-dom'

const modules = [
  {
    id: 'module-1',
    title: 'Module 1: Coding Basics',
    description: 'Beginner-friendly lessons on coding fundamentals.',
    lessons: [
      { id: 1, title: 'Lesson 1: What Is Coding?', path: '/lessons/1' },
      { id: 2, title: 'Lesson 2: Variables', path: '/lessons/2' },
      { id: 3, title: 'Lesson 3: Data Types', path: '/lessons/3' },
      { id: 4, title: 'Lesson 4: Operators', path: '/lessons/4' },
      { id: 5, title: 'Lesson 5: Conditionals', path: '/lessons/5' },
      { id: 6, title: 'Lesson 6: Loops', path: '/lessons/6' },
      { id: 7, title: 'Lesson 7: Functions', path: '/lessons/7' },
      { id: 8, title: 'Lesson 8: Arrays', path: '/lessons/8' },
      { id: 9, title: 'Lesson 9: Mini Practice Project', path: '/lessons/9' },
    ],
  },
]

function Lessons() {
  const [openModule, setOpenModule] = useState<string | null>(null)

  const toggleModule = (moduleId: string) => {
    setOpenModule((current) => (current === moduleId ? null : moduleId))
  }

  return (
    <main className="lessons-page">
      <h1>Modules</h1>
      <p>Choose a module to explore the lessons inside.</p>

      <section className="module-grid" aria-label="Course modules">
        {modules.map((module) => {
          const isOpen = openModule === module.id

          return (
            <article key={module.id} className="module-card">
              <button
                type="button"
                className="module-card-button"
                onClick={() => toggleModule(module.id)}
                aria-expanded={isOpen}
                aria-controls={`module-panel-${module.id}`}
              >
                <div className="module-card-header">
                  <h2 className="module-card-title">{module.title}</h2>
                  <span className="module-card-toggle">{isOpen ? '−' : '+'}</span>
                </div>
                <p className="module-card-description">{module.description}</p>
                <span className="module-card-meta">{module.lessons.length} lessons</span>
              </button>

              {isOpen && (
                <ul
                  id={`module-panel-${module.id}`}
                  className="module-lessons-list"
                >
                  {module.lessons.map((lesson) => (
                    <li key={lesson.id}>
                      <Link to={lesson.path} className="module-lesson-link">
                        {lesson.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          )
        })}
      </section>
    </main>
  )
}

export default Lessons