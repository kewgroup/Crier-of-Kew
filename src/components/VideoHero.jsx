import "./VideoHero.css";

export default function VideoHero() {
  return (
    <section className="hero-section">
      {/* Background Video */}
      <div className="hero-video-container">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src="/videos/roblox.mp4" type="video/mp4" />
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
                Online
              </div>
              <div className="hero-badge">No Setup Fees</div>
            </div>

            {/* Main Content */}
            <div className="hero-text">
              <h1 className="hero-title">Kew A nostalgia do arcade, com potência de hoje </h1>

              <h2 className="hero-subtitle">
                
              </h2>

              <p className="hero-description">
                Kew é um jogo arcade acelerado com estilo retrô, trilha sonora vibrante e desafios intensos.
              </p>

              <div className="hero-features">
                <div className="feature-item">
                  <span className="feature-dot">•</span>
                  <span>50+ Skins</span>
                </div>
                <div className="feature-item">
                  <span className="feature-dot">•</span>
                  <span>Eventos</span>
                </div>
                <div className="feature-item">
                  <span className="feature-dot">•</span>
                  <span>Servidor Online</span>
                </div>
                <div className="feature-item">
                  <span className="feature-dot">•</span>
                  <span>24/7 Support</span>
                </div>
              </div>

              <div className="hero-actions">
                <button className="hero-btn primary">
                  Jogue Agora
                  <span className="btn-arrow">→</span>
                </button>
                <button className="hero-btn secondary">Veja mais</button>
              </div>
            </div>
          </div>

          {/* Hero Right - Character */}
          <div className="hero-right">
            <div className="hero-character">
              <div className="character-container">
                <div className="monkey-face"></div>
                <div className="monkey-hat"></div>
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
      </div>
    </section>
  );
}
