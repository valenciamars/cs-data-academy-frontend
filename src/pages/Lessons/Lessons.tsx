import { useState } from 'react'
import { Link } from 'react-router-dom'

const modules = [
  {
    id: 'module-1',
    title: 'Module 1: Web Development Basics',
    description: 'HTML, CSS, JavaScript, and beginner coding concepts.',
    lessons: [
      { id: 1, title: 'Lesson 1: Introduction to HTML', path: '/lessons/1' },
      { id: 2, title: 'Lesson 2: HTML Elements', path: '/lessons/2' },
      { id: 3, title: 'Lesson 3: HTML Forms', path: '/lessons/3' },
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