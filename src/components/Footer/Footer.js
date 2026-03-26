import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>© {new Date().getFullYear()} Sridhar R — Built with React. Designed with purpose.</p>
      </div>
    </footer>
  );
}
