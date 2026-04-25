import { motion } from 'framer-motion';
import './About.css';

const education = [
  {
    school: 'University of Central Florida',
    degree: 'Bachelor of Arts - BA, Digital Media - Web Development/Design & Interactive Media',
    duration: 'Jun 2024 - May 2027',
    notes: "President's Honor Roll (3x) · GPA: 4.0",
  },
  {
    school: 'Polk State College',
    degree: 'Associate of Arts - AA',
    duration: 'Sep 2021 - May 2024',
    notes: "Dean's List (3x) · Magna Cum Laude · GPA: 3.8",
  },
  {
    school: 'Ridge Community High School',
    degree: 'High School Diploma',
    duration: 'Aug 2021 - May 2024',
    notes: 'GPA: 4.5/4.0 · Class Rank: 5/618',
  },
];

const experience = [
  {
    title: 'Communications Associate',
    company: 'Mitsubishi Power Americas · Internship',
    duration: 'Sep 2025 - Present · 8 mos',
  },
  {
    title: 'Marketing & Media Director',
    company: 'Southeastern Regional Conference (SERC) 2026',
    duration: 'May 2025 - Mar 2026 · 11 mos',
  },
  {
    title: 'Digital Media Coordinator',
    company: 'University of Central Florida · Part-time',
    duration: 'Feb 2025 - Sep 2025 · 8 mos',
  },
  {
    title: 'Social Media Manager',
    company: 'Florida District of Key Club International · Internship',
    duration: 'Jul 2022 - Jul 2023 · 1 yr 1 mo',
  },
];

const skills = [
  { category: 'Graphic Design', items: 'Photoshop · Illustrator · Canva · Affinity' },
  { category: 'Video', items: 'Premiere Pro · CapCut' },
  { category: 'Technical', items: 'Communications · Copywriting · Internal Site Building' },
  { category: 'Languages', items: 'HTML · CSS · JavaScript · Python · PHP' },
];

const interests = [
  'The Sims 4 & Sims 2',
  'Valorant',
  'Animal Crossing: New Horizons',
  'Tomodachi Life',
  'Overcooked',
  'ZEROBASEONE',
  'Matcha everything',
  'Squirrels',
  'My family, Minnie, Rohan, Alyssa & Mai',
];

function About() {
  return (
    <div className="about">
      <motion.div
        className="about-hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>About Me</h1>
        <p className="about-bio">
          I am an aspiring Marketing and Communications professional, currently interning at the
          <strong> Mitsubishi Power Americas Headquarters</strong>! I have a deep background
          in graphic design, starting all the way from when I was in high school.
        </p>
      </motion.div>

      <motion.div
        className="about-card experience-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <h2>Education</h2>
        <div className="experience-list">
          {education.map((edu) => (
            <div key={edu.school} className="experience-row">
              <div className="experience-left">
                <span className="job-title">{edu.school}</span>
                <span className="job-company">{edu.degree}</span>
                <span className="job-notes">{edu.notes}</span>
              </div>
              <span className="job-duration">{edu.duration}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="about-card experience-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2>Experience</h2>
        <div className="experience-list">
          {experience.map((job) => (
            <div key={job.title} className="experience-row">
              <div className="experience-left">
                <span className="job-title">{job.title}</span>
                <span className="job-company">{job.company}</span>
              </div>
              <span className="job-duration">{job.duration}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="about-grid">
        <motion.div
          className="about-card"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2>Skills</h2>
          <div className="skills-list">
            {skills.map((s) => (
              <div key={s.category} className="skill-row">
                <span className="skill-category">{s.category}</span>
                <span className="skill-items">{s.items}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="about-card"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2>Interests</h2>
          <div className="interests-grid">
            {interests.map((item) => (
              <span key={item} className="interest-tag">{item}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
