import styles from './About.module.css';

const STATS = [
  { value: '4+', label: 'Years Experience' },
  { value: '4+', label: 'Production Projects' },
  { value: '4', label: 'Companies' },
];

const EXPERIENCE = [
  {
    role: 'Frontend — React Developer',
    company: 'OneData Software Solutions',
    period: 'Aug 2025 — Present',
    location: 'Coimbatore',
    desc: 'Engineered a high-performance React 19 frontend with TanStack Query, reducing API overhead by 60%. Architected modular microservices using Kotlin & Spring Boot for IAM, Subscription, Billing & Notifications.',
    tech: ['React 19', 'TypeScript', 'TanStack Suite', 'PostgreSQL', 'Kotlin 1.9', 'Spring Boot'],
  },
  {
    role: 'MERN Full Stack Developer',
    company: 'Information Evolution',
    period: 'Jan 2023 — Jul 2025',
    location: 'Coimbatore',
    desc: 'Architected a production-ready music streaming ecosystem supporting 6 platforms from a single Flutter codebase. Developed a scalable Node.js/Express REST API with 40+ endpoints, JWT auth & RBAC.',
    tech: ['React', 'Node.js', 'Express', 'MySQL', 'XAMPP', 'Stripe', 'Flutter'],
  },
  {
    role: 'HTML Developer — Web Designer',
    company: 'Information Evolution Inc',
    period: 'Apr 2014 — Dec 2022',
    location: 'Coimbatore',
    desc: 'Updated existing websites by modifying HTML and other coding as needed.',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    role: 'HTML Developer — Web Designer',
    company: '365 Media',
    period: 'Jun 2012 — Dec 2013',
    location: 'Coimbatore',
    desc: 'Developing web app structures and maintaining client websites.',
    tech: ['HTML', 'CSS'],
  },
];

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <p className="section-label">About Me</p>
        <h2 className="section-title">
          Building <span className="highlight">Scalable Solutions</span> for Complex Problems
        </h2>
        <div className={styles.grid}>
          <div className={styles.text}>
            <p>
              Frontend-focused Full-Stack Developer specializing in React 19 applications
              integrated with JVM/Spring Boot microservices. Expert in building secure IAM
              dashboards and data tools using PostgreSQL.
            </p>
            <p>
              High-velocity engineer leveraging Cursor and AI (Claude, Gemini, Copilot) to
              deliver type-safe code. Proven success managing the full SDLC — from Flutter
              ecosystems to scalable Node.js APIs.
            </p>
            <div className={styles.timeline}>
              {EXPERIENCE.map((exp) => (
                <div key={exp.company} className={styles.expCard}>
                  <span className={styles.expPeriod}>{exp.period} · {exp.location}</span>
                  <h4 className={styles.expRole}>{exp.role}</h4>
                  <span className={styles.expCompany}>{exp.company}</span>
                  <p className={styles.expDesc}>{exp.desc}</p>
                  {exp.tech && (
                    <div className={styles.expTech}>
                      {exp.tech.map((t) => (
                        <span key={t} className={styles.expTag}>{t}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.stats}>
            {STATS.map((s) => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
            <div className={styles.education}>
              <h4 className={styles.eduTitle}>Education</h4>
              <div className={styles.eduItem}>
                <span className={styles.eduDegree}>MCA</span>
                <span className={styles.eduSchool}>SRM University (2025–2027)</span>
              </div>
              <div className={styles.eduItem}>
                <span className={styles.eduDegree}>BSc Chemistry</span>
                <span className={styles.eduSchool}>Bharathiyar University (2009–2012)</span>
              </div>
              <div className={styles.eduItem}>
                <a href="https://www.guvi.in/certificate?id=85071s8Y9T2032159M" target="_blank" rel="noopener noreferrer" className={styles.certLink}>
                  🎓 Full Stack Certification ↗ 
                </a>
                <span className={styles.eduSchool}> GUVI — IIT Chennai (2024)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
