import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css';

function Contact() {
  const [state, handleSubmit] = useForm('mpqknljw');

  return (
    <div className="contact">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact
      </motion.h1>

      <div className="contact-grid">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2>Let's Connect</h2>
          <p>Feel free to reach out for questions, opportunities, or just to chat!</p>
          <div className="social-links">
            <a href="https://github.com/lilnguyener" target="_blank" rel="noreferrer" className="social-btn github">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/lilynguyenfl/" target="_blank" rel="noreferrer" className="social-btn linkedin">
              LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          className="contact-form-wrapper"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {state.succeeded ? (
            <div className="success-msg">
              <h3>Message Sent!</h3>
              <p>Thanks for reaching out — I'll get back to you soon!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />
                <ValidationError field="name" prefix="Name" errors={state.errors} className="error-msg" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                />
                <ValidationError field="email" prefix="Email" errors={state.errors} className="error-msg" />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Say something nice"
                  rows={5}
                  required
                />
                <ValidationError field="message" prefix="Message" errors={state.errors} className="error-msg" />
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={state.submitting}
              >
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
