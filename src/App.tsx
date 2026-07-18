import { useState } from 'react'
import './index.css'

const ZAPIER_WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/28284462/444bmro/'

async function submitToWebhook(name: string, email: string) {
  const res = await fetch(ZAPIER_WEBHOOK_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      email: email,
      submittedAt: new Date().toISOString(),
    }),
  })
  return res
}

/* ── Cloud SVG component ── */
function Cloud({ className }: { className: string }) {
  return (
    <div className={`cloud ${className}`}>
      <svg width="120" height="50" viewBox="0 0 120 50">
        <ellipse cx="60" cy="35" rx="55" ry="15" />
        <ellipse cx="35" cy="25" rx="25" ry="18" />
        <ellipse cx="70" cy="20" rx="30" ry="22" />
        <ellipse cx="50" cy="28" rx="35" ry="16" />
      </svg>
    </div>
  )
}

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim()) return

    setStatus('loading')
    try {
      await submitToWebhook(name.trim(), email.trim())
      setStatus('success')
      setName('')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  const openModal = () => {
    setShowModal(true)
    setStatus('idle')
  }

  const closeModal = () => {
    setShowModal(false)
    setStatus('idle')
    setName('')
    setEmail('')
  }

  return (
    <div className="page-wrapper">
      <div className="page-card">
        {/* ── Floating clouds ── */}
        <div className="clouds">
          <Cloud className="cloud-1" />
          <Cloud className="cloud-2" />
          <Cloud className="cloud-3" />
        </div>

        {/* ── Nav ── */}
        <nav className="nav">
          <img
            src="/assets/Logo.png"
            alt="Meetverse"
            className="nav-logo"
          />
          <button className="nav-cta" onClick={openModal}>
            Join The Waitlist
          </button>
        </nav>

        {/* ── Hero ── */}
        <section className="hero">
          <div className="hero-content">
            <p className="hero-eyebrow">Get Hyped</p>
            <h1 className="hero-heading">
              Meetverse Is Launching Soon!
            </h1>
            <p className="hero-sub">
              The ultimate community for Africans is being redefined. Be one of
              the first to join our brand new tribe. Join the{' '}
              <strong>waitlist</strong> to get exclusive early access!
            </p>

            <div className="hero-cta-row">
              <button className="hero-cta" onClick={openModal}>
                Join The Waitlist
                <span className="arrow-circle">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M5 12l7 7 7-7" />
                  </svg>
                </span>
              </button>
              <span className="rocket-icon" role="img" aria-label="rocket">🚀</span>
            </div>
          </div>

          {/* ── Hero Illustration ── */}
          <div className="hero-illustration">
            <img
              src="/assets/hero_people.png"
              alt="Diverse group of young Africans representing the Meetverse community"
            />
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="footer">
          <p>© 2026 Meetverse · All rights reserved</p>
        </footer>

        {/* ── Modal ── */}
        {showModal && (
          <div className="modal-overlay" onClick={(e) => {
            if (e.target === e.currentTarget) closeModal()
          }}>
            <div className="modal-card">
              <button className="modal-close" onClick={closeModal}>✕</button>

              {status === 'success' ? (
                <div className="success-card">
                  <div className="success-icon">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="success-title">You're on the list! 🎉</h2>
                  <p className="success-text">
                    We'll be in touch soon with exclusive updates.<br />
                    Get ready for something amazing.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="modal-title">Join The Waitlist</h2>
                  <p className="modal-subtitle">
                    Be among the first to experience Meetverse. Drop your details below and we'll notify you at launch.
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="waitlist-name">Your Name</label>
                      <input
                        id="waitlist-name"
                        type="text"
                        required
                        placeholder="e.g. Amara Johnson"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="waitlist-email">Email Address</label>
                      <input
                        id="waitlist-email"
                        type="email"
                        required
                        placeholder="name@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-input"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="form-submit"
                    >
                      {status === 'loading' ? 'Joining...' : 'Join The Waitlist 🚀'}
                    </button>
                    {status === 'error' && (
                      <p className="form-error">Something went wrong. Please try again.</p>
                    )}
                  </form>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
