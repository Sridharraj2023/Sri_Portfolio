import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

const About = lazy(() => import('./components/About/About'));
const Projects = lazy(() => import('./components/Projects/Projects'));
const TechStack = lazy(() => import('./components/TechStack/TechStack'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Footer = lazy(() => import('./components/Footer/Footer'));

const Loader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', padding: '80px 0' }}>
    <div style={{
      width: 32, height: 32, border: '3px solid rgba(108,99,255,0.2)',
      borderTopColor: '#6c63ff', borderRadius: '50%',
      animation: 'spin 0.6s linear infinite',
    }} />
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback={<Loader />}>
        <About />
        <Projects />
        <TechStack />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
}
