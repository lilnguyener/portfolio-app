import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import lilyPhoto from '../assets/lilyportfolio.png';
import aboutIcon from '../assets/about.png';
import projectsIcon from '../assets/projects.png';
import contactIcon from '../assets/contactcall.png';
import './Home.css';

const buttons = [
  { label: 'About', icon: aboutIcon, path: '/about', color: '#e8637a' },
  { label: 'Projects', icon: projectsIcon, path: '/projects', color: '#7aab7a' },
  { label: 'Contact', icon: contactIcon, path: '/contact', color: '#f4a261' },
];

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <motion.div
        className="phone-frame"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="phone-header">
          <span className="phone-title">lily's portfolio</span>
        </div>

        <div className="phone-body">
          <div className="profile-section">
            <div className="profile-pic-wrapper">
              <img src={lilyPhoto} alt="Lily" className="profile-pic" />
            </div>
            <div className="speech-bubble">
              <span>hiii, i'm lily!</span>
              <span className="speech-sub">I am a Junior in the Digital Media (Web & Interactive Design Track) program at UCF! &lt;3</span>
            </div>
          </div>

          <div className="nook-grid">
            {buttons.map((btn, i) => (
              <motion.button
                key={btn.label}
                className="nook-btn"
                style={{ backgroundColor: btn.color }}
                onClick={() => navigate(btn.path)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={btn.icon} alt={btn.label} className="nook-icon" />
                <span className="nook-label">{btn.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
