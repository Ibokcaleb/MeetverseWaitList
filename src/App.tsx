import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, X, CheckCircle } from 'lucide-react';
import './index.css';
import './App.css';

import desktopBg from '../assets/Bg.png';
import logo from '../assets/Logo.png';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Replace this URL with your Zapier Webhook URL
      const zapierWebhookUrl = 'https://hooks.zapier.com/hooks/catch/28284462/444bmro/';

      const response = await fetch(zapierWebhookUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: new URLSearchParams(formData),
      });

      if (response.type !== 'opaque' && !response.ok) {
        throw new Error('Failed to submit');
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '' });
    }, 300);
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header-container">
        <div className="logo-container">
          <img src={logo} alt="Meetverse Logo" className="logo-img" />
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="btn-primary join-btn-sm"
        >
          Join The Waitlist
        </button>
      </header>

      {/* Main Content */}
      <main className="main-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-content"
        >
          {/* <span className="hero-subtitle">Get Hyped</span> */}
          <h1 className="hero-title">
            Poised To Become The First Ever Truely Recognized Social Platform for Africans 
          </h1>
          <p className="hero-description">
            Thank you for taking the time to support our journey. We're building a dedicated space to connect, share, and celebrate our vibrant communities. Join the waitlist to be part of the movement from day one.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn-primarytwo join-btn-lg"
          >
            Join The Waitlist
            <ArrowDown />
          </button>
        </motion.div>
      </main>

      {/* Background Images */}
      <div className="bg-container">
        <img 
          src={desktopBg} 
          alt="People illustration" 
          className="bg-img"
        />
      </div>

      {/* Modal Form */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="modal-overlay">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="modal-content"
            >
              <button 
                onClick={closeModal}
                className="modal-close-btn"
              >
                <X />
              </button>
              
              {isSubmitted ? (
                <div style={{ textAlign: 'center', padding: '2rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <CheckCircle style={{ width: '4rem', height: '4rem', color: '#fe610d', marginBottom: '1rem' }} />
                  <h2 className="modal-title">You're on the list!</h2>
                  <p className="modal-description">Thank you for joining the Meetverse waitlist. We'll be in touch soon.</p>
                  <button 
                    onClick={closeModal}
                    className="btn-primary form-submit-btn"
                    style={{ marginTop: '1rem' }}
                  >
                    Done
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="modal-title">Join the Movement</h2>
                  <p className="modal-description">Enter your details to get early access.</p>

                  <form onSubmit={handleSubmit} className="form-container">
                    <div>
                      <label htmlFor="name" className="form-label">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="form-input"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="form-label">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="form-input"
                        placeholder="john@example.com"
                      />
                    </div>
                    {error && (
                      <p style={{ color: '#c92a2a', fontSize: '0.875rem', marginTop: '0.5rem', marginBottom: '0' }}>
                        {error}
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary form-submit-btn"
                      style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
