import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import nesImg from '../assets/NES.png';
import sercImg from '../assets/SERCpacket.png';
import quizImg from '../assets/lilysquiz.png';

import lanterns from '../assets/lanterns.jpg';
import lilyreveal from '../assets/lilyreveal.jpg';
import imvolley from '../assets/imvolley.jpg';
import bakesale from '../assets/bakesale.jpg';
import ucfsaseaward from '../assets/ucfsaseaward.jpg';
import towerworkshop from '../assets/towerworkshop.jpg';

import perseusad from '../assets/perseusad.jpg';
import ersticker from '../assets/ersticker.jpg';
import Intro from '../assets/Intro.jpg';
import knighted from '../assets/knighted.jpg';
import KnightedSticker from '../assets/KnightedSticker.jpg';
import csv from '../assets/csv.jpg';

import './Projects.css';

const saseImages = [
  { src: lanterns, alt: 'Lanterns' },
  { src: lilyreveal, alt: 'Lily Reveal' },
  { src: imvolley, alt: 'IM Volleyball' },
  { src: bakesale, alt: 'Bake Sale' },
  { src: ucfsaseaward, alt: 'UCF SASE Award' },
  { src: towerworkshop, alt: 'Tower Workshop' },
];

const fboImages = [
  { src: perseusad, alt: 'Perseus Ad' },
  { src: ersticker, alt: 'ER Sticker' },
  { src: Intro, alt: 'Intro' },
  { src: knighted, alt: 'Knighted' },
  { src: KnightedSticker, alt: 'Knighted Sticker' },
  { src: csv, alt: 'CSV' },
];

const projects = [
  {
    title: 'Never Ending Summer',
    description:
      "NES is an interactive experience built to promote Zara Larsson's latest album, Midnight Sun. It is intended to promote and spread awareness of the music through a unique experience, as well as personalized quizzes. All of these paths lead to Larsson's website to drive sales and engagement.",
    link: 'https://www.figma.com/proto/J8PsvZJQY2FUYX6mM8nRCY/NES-LoFi-Prototype?node-id=27-356&starting-point-node-id=1%3A4&t=yn8Ndy62yS6zQosD-1',
    linkLabel: 'View Lo-Fi Prototype',
    image: nesImg,
    color: '#e8637a',
  },
  {
    title: 'SERC 2026 Sponsorship Packet',
    description:
      "This is a packet developed to inform prospective sponsors on our organization and event's offerings, the logistics, as well as the benefits of it.",
    link: 'https://drive.google.com/file/u/0/d/1FfHl1Sbo2axAHEbiikb_qHX3WNTHXcbY/view',
    linkLabel: 'View the File',
    image: sercImg,
    color: '#7aab7a',
  },
  {
    title: "Lily's Quiz App",
    description:
      "Lily's Quiz App is an application developed with React Native. It was developed as a part of a course that helps students learn mobile app development. The quiz offers a few features that are interactive.",
    link: 'https://lilnguyener.github.io/quiz-app/',
    linkLabel: 'View the Demo',
    image: quizImg,
    color: '#f4a261',
  },
];

function Gallery({ images, title, color }) {
  const [lightbox, setLightbox] = useState(null);

  return (
    <div className="gallery-section">
      <h2 className="gallery-title" style={{ color }}>{title}</h2>
      <div className="gallery-grid">
        {images.map((img, i) => (
          <motion.div
            key={i}
            className="gallery-item"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05, duration: 0.3 }}
            onClick={() => setLightbox(img)}
            whileHover={{ scale: 1.03 }}
          >
            <img src={img.src} alt={img.alt} />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.img
              src={lightbox.src}
              alt={lightbox.alt}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button className="lightbox-close" onClick={() => setLightbox(null)}>x</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Projects() {
  return (
    <div className="projects">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h1>

      <div className="projects-divider">
        <h2 className="section-title">Featured Projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
          >
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-overlay" style={{ backgroundColor: project.color }} />
            </div>
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-link"
                style={{ backgroundColor: project.color }}
              >
                {project.linkLabel} →
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="projects-divider" style={{ marginTop: 48 }}>
        <h2 className="section-title">Graphic Design Work</h2>
      </div>

      <div className="galleries-row">
        <Gallery
          images={saseImages}
          title="UCF SASE — Creative Director"
          color="#e8637a"
        />
        <Gallery
          images={fboImages}
          title="UCF FBO — Digital Media Coordinator"
          color="#7aab7a"
        />
      </div>
    </div>
  );
}

export default Projects;
