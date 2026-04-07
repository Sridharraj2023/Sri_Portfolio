import { useEffect, useState } from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import styles from './Hero.module.css';

const ROLES = ['React Developer', 'Full-Stack Engineer', 'MERN Stack Builder'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const role = ROLES[roleIndex];
    let timeout;

    if (typing) {
      if (displayed.length < role.length) {
        timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.bg} />
      <div className={`container ${styles.content}`}>
        <p className={styles.greeting}>Hi, I'm</p>
        <h1 className={styles.name}>Sridhar R</h1>
        <div className={styles.roleWrap}>
          <span className={styles.role}>{displayed}</span>
          <span className={styles.cursor}>|</span>
        </div>
        <p className={styles.tagline}>
          Frontend-focused Full-Stack Developer specializing in React &amp; Node.js.
          <br />Building secure IAM dashboards, healthcare systems &amp; scalable REST APIs.
        </p>
        <div className={styles.actions}>
          <a href="#projects" className={styles.primary}>View My Work</a>
          <a href="#contact" className={styles.secondary}>Get in Touch</a>
        </div>
        <div className={styles.socials}>
          <a href="https://github.com/Sridharraj2023" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FiGithub /></a>
          <a href="https://www.linkedin.com/in/sridharraj0110" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
          <a href="mailto:sridharraj0110@gmail.com" aria-label="Email"><FiMail /></a>
        </div>
      </div>
    </section>
  );
}
