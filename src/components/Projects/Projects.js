import { useState, useMemo, useCallback } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import styles from './Projects.module.css';

import elevate1 from '../../assets/WhatsApp Image 2026-03-11 at 11.49.52 AM.jpeg';
import elevate2 from '../../assets/2026-02-28 13-20-24 High Res Screenshot.png';
import elevate3 from '../../assets/WhatsApp Image 2026-03-13 at 10.04.01 AM.jpeg';
import okb3t1 from '../../assets/WhatsApp Image 2026-03-02 at 6.33.24 PM.jpeg';
import okb3t2 from '../../assets/WhatsApp Image 2026-03-02 at 6.33.25 PM (1).jpeg';
import relevantRecovery from '../../assets/Screenshot 2026-03-26 112324.png';

const PROJECTS = [
  {
    id: 1,
    title: 'Healthcare IAM & Subscription Management',
    category: 'Healthcare / Enterprise',
    images: [],
    challenge: 'Enterprise healthcare teams needed a unified system for user management, organization hierarchy, role-based access, and multi-tier subscriptions — replacing fragmented admin tools.',
    solution: 'Architected a React SPA with Vite 7 and TanStack Router, leveraging Zustand and 50+ TanStack Query hooks to reduce API overhead by 60%. Engineered complex MFA/OTP flows using TanStack Form + Zod for real-time validation.',
    impact: 'Sub-second load times via code splitting, 100% test coverage on critical components with Vitest',
    tech: ['React', 'TypeScript', 'Vite 7', 'TanStack Suite', 'Zustand', 'Tailwind CSS', 'Vitest', 'Zod'],
    live: '#',
    github: 'https://github.com/Sridharraj2023',
    color: '#3b82f6',
  },
  {
    id: 2,
    title: 'Elevate — Frequency Tuning Music App',
    category: 'Mobile / Streaming',
    images: [elevate1, elevate2, elevate3],
    challenge: 'Users needed a cross-platform mobile app to stream binaural beats and isochronic tones with background playback, offline caching, category-based browsing (Home/Binaural/Music), and seamless audio transitions.',
    solution: 'Built a Flutter + Node.js + MySQL ecosystem with high-fidelity streaming, offline caching, and a React admin dashboard for content management with FCM push notifications and data visualization.',
    impact: 'Live on Google Play Store, smooth playback with zero audio gaps, automated content management pipeline',
    tech: ['Flutter', 'Node.js', 'MySQL', 'React', 'FCM', 'REST API'],
    live: 'https://play.google.com/store/apps/details?id=com.elevateintune.music',
    github: 'https://github.com/Sridharraj2023',
    color: '#6c63ff',
  },
  {
    id: 3,
    title: 'OkB3T — Micro-Betting Gaming Platform',
    category: 'Gaming / SaaS',
    images: [okb3t1, okb3t2],
    challenge: 'A gaming startup needed a real-time micro-betting platform supporting multiple game titles (TFT, Call of Duty) with live odds, wallet management, streamer dashboards, and admin controls.',
    solution: 'Architected a full-stack application with JWT + RBAC authentication, real-time WebSocket updates for live odds, role-based access (Admin/Streamer/User), rate-limiting, and input sanitization to mitigate XSS and SQL injection.',
    impact: 'Handles concurrent bets with sub-200ms API response times, secure multi-role architecture',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'WebSocket', 'JWT', 'RBAC'],
    live: '#',
    github: 'https://github.com/Sridharraj2023',
    color: '#a855f7',
  },
  {
    id: 4,
    title: 'Relevant Recovery — Community Platform',
    category: 'Healthcare / Enterprise',
    images: [relevantRecovery],
    challenge: 'A recovery community needed a modern, accessible web presence to connect individuals with support services, events, and donations — replacing an outdated static site.',
    solution: 'Built a responsive React PWA with optimized Lighthouse scores, integrated event registration with form validation, and implemented a Stripe-powered donation flow with multi-tier subscription webhooks and grace-period logic.',
    impact: '100% billing accuracy with automated Stripe webhooks, improved mobile experience',
    tech: ['React', 'Node.js', 'Stripe API', 'Express', 'MySQL', 'PWA'],
    live: 'https://remarkable-fox-e412b9.netlify.app/',
    github: 'https://github.com/Sridharraj2023',
    color: '#10b981',
  },
];

const CATEGORIES = ['All', ...new Set(PROJECTS.map((p) => p.category))];

export default function Projects() {
  const [active, setActive] = useState('All');

  const filtered = useMemo(
    () => active === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === active),
    [active]
  );

  const handleFilter = useCallback((cat) => setActive(cat), []);

  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="section-label">Projects</p>
        <h2 className="section-title">
          Problem → Solution <span className="highlight">Case Studies</span>
        </h2>

        <div className={styles.filters}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`${styles.filter} ${active === cat ? styles.filterActive : ''}`}
              onClick={() => handleFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filtered.map((project) => (
            <article key={project.id} className={styles.card}>
              {/* Screenshot Preview */}
              {project.images.length > 0 ? (
                <div className={styles.imageWrap}>
                  {project.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${project.title} screenshot ${i + 1}`}
                      className={`${styles.screenshot} ${project.images.length > 1 ? styles.screenshotHalf : ''}`}
                      loading="lazy"
                    />
                  ))}
                </div>
              ) : (
                <div className={styles.placeholder} style={{ background: `linear-gradient(135deg, ${project.color}22, ${project.color}08)` }}>
                  <span className={styles.placeholderText}>🏗️ Screenshots Coming Soon</span>
                </div>
              )}

              <div className={styles.cardTop} style={{ '--card-accent': project.color }}>
                <span className={styles.badge}>{project.category}</span>
                <h3 className={styles.cardTitle}>{project.title}</h3>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.caseStudy}>
                  <div className={styles.csBlock}>
                    <span className={styles.csLabel}>🔴 Challenge</span>
                    <p>{project.challenge}</p>
                  </div>
                  <div className={styles.csBlock}>
                    <span className={styles.csLabel}>🟢 Solution</span>
                    <p>{project.solution}</p>
                  </div>
                  <div className={styles.csBlock}>
                    <span className={styles.csLabel}>📈 Impact</span>
                    <p className={styles.impact}>{project.impact}</p>
                  </div>
                </div>
                <div className={styles.techRow}>
                  {project.tech.map((t) => (
                    <span key={t} className={styles.techTag}>{t}</span>
                  ))}
                </div>
                <div className={styles.cardLinks}>
                  {project.live !== '#' && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                      <FiExternalLink /> Live Demo
                    </a>
                  )}
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                    <FiGithub /> Source Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
