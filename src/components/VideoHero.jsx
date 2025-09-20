import './VideoHero.css';

export default function VideoHero() {
  return (
    <section className="hero-section">
      {/* Background Video */}
      <div className="hero-video-container">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src="/videos/carros.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <div className="hero-container">
          <div className="hero-left">
            {/* Badges */}
            <div className="hero-badges">
              <div className="hero-badge">
                <span className="badge-icon">⚡</span>
                Live in 48 Hours
              </div>
              <div className="hero-badge">
                No Setup Fees
              </div>
            </div>

            {/* Main Content */}
            <div className="hero-text">
              <h1 className="hero-title">
                Your Premium Gaming Platform
              </h1>
              
              <h2 className="hero-subtitle">
                Fully Customized, Instantly Live
              </h2>
              
              <p className="hero-description">
                Launch your white-label platform with 250+ integrated game providers, 
                advanced sportsbook features, and complete visual control. Design every 
                detail, own every player experience.
              </p>
              
              <div className="hero-features">
                <div className="feature-item">
                  <span className="feature-dot">•</span>
                  <span>250+ Providers</span>
                </div>
                <div className="feature-item">
                  <span className="feature-dot">•</span>
                  <span>3 Sportsbooks</span>
                </div>
                <div className="feature-item">
                  <span className="feature-dot">•</span>
                  <span>99.9% Uptime</span>
                </div>
                <div className="feature-item">
                  <span className="feature-dot">•</span>
                  <span>24/7 Support</span>
                </div>
              </div>
              
              <div className="hero-actions">
                <button className="hero-btn primary">
                  Talk to us 
                  <span className="btn-arrow">→</span>
                </button>
                <button className="hero-btn secondary">See more</button>
              </div>
            </div>
          </div>

          {/* Hero Right - Character */}
          <div className="hero-right">
            <div className="hero-character">
              <div className="character-container">
                <div className="monkey-face">🐵</div>
                <div className="monkey-hat">🎩</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="hero-decorations">
        <div className="decoration-vines">
          <div className="vine vine-1"></div>
          <div className="vine vine-2"></div>
          <div className="vine vine-3"></div>
        </div>
        <div className="decoration-coins">
          <div className="coin coin-1">🪙</div>
          <div className="coin coin-2">🪙</div>
          <div className="coin coin-3">🪙</div>
        </div>
      </div>
    </section>
  );
}
