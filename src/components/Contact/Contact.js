import { useState, useCallback } from 'react';
import { FiSend } from 'react-icons/fi';
import styles from './Contact.module.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = useCallback((e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailTo = `mailto:sridharraj0110@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}`;
    window.open(mailTo);
    setStatus('Message ready to send!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <p className="section-label">Contact</p>
        <h2 className="section-title">
          Let's <span className="highlight">Work Together</span>
        </h2>
        <div className={styles.grid}>
          <div className={styles.info}>
            <p className={styles.desc}>
              I'm open to React and Full-Stack developer opportunities.
              Whether you have a project in mind or just want to connect — let's talk.
            </p>
            <div className={styles.detail}>
              <span className={styles.detailLabel}>Email</span>
              <a href="mailto:sridharraj0110@gmail.com">sridharraj0110@gmail.com</a>
            </div>
            <div className={styles.detail}>
              <span className={styles.detailLabel}>Location</span>
              <span>Coimbatore, Tamil Nadu, India</span>
            </div>
            <div className={styles.detail}>
              <span className={styles.detailLabel}>LinkedIn</span>
              <a href="https://www.linkedin.com/in/sridharraj0110" target="_blank" rel="noopener noreferrer">linkedin.com/in/sridharraj0110</a>
            </div>
            <div className={styles.detail}>
              <span className={styles.detailLabel}>GitHub</span>
              <a href="https://github.com/Sridharraj2023" target="_blank" rel="noopener noreferrer">github.com/Sridharraj2023</a>
            </div>
            <div className={styles.detail}>
              <span className={styles.detailLabel}>Availability</span>
              <span className={styles.available}>● Open to work</span>
            </div>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className={styles.input}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className={styles.input}
            />
            <textarea
              name="message"
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className={styles.input}
            />
            <button type="submit" className={styles.submit}>
              <FiSend /> Send Message
            </button>
            {status && <p className={styles.status}>{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
