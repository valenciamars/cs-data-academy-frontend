import { Link } from 'react-router-dom'

const learningTopics = [
  'Coding Basics',
  'Web Development',
  'Data Analytics',
  'SQL and Databases',
  'Python',
  'Beginner Projects',
]

const whyChooseUs = [
  'Beginner-friendly explanations',
  'Hands-on practice',
  'Accessible learning',
  'Step-by-step lesson progression',
  'A welcoming approach to technology',
]

function Home() {
  return (
    <main className="home-page">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="hero-label">CS Data Academy</p>
          <h1>Making Coding and Data Feel Less Intimidating</h1>
          <p className="hero-subtitle">
            Beginner-friendly lessons designed to make technical concepts easier
            to understand, practice, and apply.
          </p>
          <p className="hero-intro">
            CS Data Academy is a warm and welcoming space for learners who want
            to build confidence with coding, computer science, and data topics.
          </p>
        </div>

        <div className="hero-card" aria-label="Learning highlights">
          <div className="hero-card-shape one" />
          <div className="hero-card-shape two" />
          <div className="hero-card-content">
            <h2>Learn with clarity</h2>
            <p>Thoughtful lessons, gentle explanations, and practical practice.</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="section-heading">
          <p className="section-label">About the project</p>
          <h2>Why I created CS Data Academy</h2>
        </div>

        <p className="about-text">
          Hi, I’m Maria, a Latina and first-generation college graduate with a degree
          in Computer Science. I created CS Data Academy because I know how overwhelming
          technical subjects can feel without the right guidance or accessible resources.
          My goal is to break down coding, computer science, and data concepts into clear,
          beginner-friendly lessons that help more people feel confident exploring technology.
        </p>
      </section>

      <section className="info-section">
        <div className="section-heading">
          <p className="section-label">What you’ll learn</p>
          <h2>Topics that shape a strong foundation</h2>
        </div>

        <div className="card-grid">
          {learningTopics.map((topic) => (
            <article key={topic} className="info-card">
              <h3>{topic}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="info-section alt">
        <div className="section-heading">
          <p className="section-label">Why CS Data Academy?</p>
          <h2>A learning experience built for beginners</h2>
        </div>

        <div className="feature-list">
          {whyChooseUs.map((point) => (
            <div key={point} className="feature-pill">
              {point}
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section-home">
        <h2>Ready to take the next step?</h2>
        <p>Explore the lesson modules and begin building your foundation with guided practice.</p>
        <Link to="/lessons" className="home-cta-link">
          Explore the Modules
        </Link>
      </section>
    </main>
  )
}

export default Home