import styles from './TechStack.module.css';

const STACK = {
  Core: [
    { name: 'React 19', icon: '⚛️' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Express JS', icon: '🚀' },
    { name: 'TanStack Suite', icon: '📊' },
    { name: 'Zustand', icon: '🐻' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'MySQL', icon: '🗄️' },
  ],
  'Testing & Security': [
    { name: 'Vitest', icon: '🧪' },
    { name: 'Testing Library', icon: '✅' },
    { name: 'Postman', icon: '📬' },
    { name: 'JWT / OAuth2', icon: '🔐' },
    { name: 'RBAC', icon: '🛡️' },
    { name: 'Zod', icon: '✔️' },
  ],
  Familiar: [
    { name: 'Spring Boot', icon: '🍃' },
    { name: 'Kotlin', icon: '🟣' },
    { name: 'Flutter', icon: '🦋' },
    { name: 'Stripe API', icon: '💳' },
    { name: 'Git', icon: '📦' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Netlify', icon: '🌐' },
    { name: 'Vercel', icon: '▲' },
    { name: 'Railway', icon: '🚂' },
    { name: 'Cursor / Copilot', icon: '🤖' },
  ],
};

export default function TechStack() {
  return (
    <section id="tech-stack" className={`section ${styles.section}`}>
      <div className="container">
        <p className="section-label">Tech Stack</p>
        <h2 className="section-title">
          Tools I <span className="highlight">Work With</span>
        </h2>
        {Object.entries(STACK).map(([group, items]) => (
          <div key={group} className={styles.group}>
            <h3 className={styles.groupTitle}>{group}</h3>
            <div className={styles.grid}>
              {items.map((item) => (
                <div key={item.name} className={styles.card}>
                  <span className={styles.icon}>{item.icon}</span>
                  <span className={styles.name}>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
