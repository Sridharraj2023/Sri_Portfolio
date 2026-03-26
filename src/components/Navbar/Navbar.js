import { useState, useEffect, useCallback } from 'react';
import styles from './Navbar.module.css';

const NAV_LINKS = ['About', 'Projects', 'Tech Stack', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id.toLowerCase().replace(' ', '-'))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="#hero" className={styles.logo}>
          <span className={styles.logoAccent}>&lt;</span>SR<span className={styles.logoAccent}>/&gt;</span>
        </a>
        <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={`${styles.bar} ${menuOpen ? styles.open : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.open : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.open : ''}`} />
        </button>
        <ul className={`${styles.links} ${menuOpen ? styles.active : ''}`}>
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <button className={styles.link} onClick={() => scrollTo(link)}>
                {link}
              </button>
            </li>
          ))}
          <li>
            <a href="mailto:sridharraj0110@gmail.com" className={styles.cta}>Hire Me</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
