import "./VideoHero.css";

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
              <div className="hero-badge">No Setup Fees</div>
            </div>

            {/* Main Content */}
            <div className="hero-text">
              <h1 className="hero-title">Kew </h1>

              <h2 className="hero-subtitle">
                A nostalgia do arcade, com potência de hoje
              </h2>

              <p className="hero-description">
                Kew Arcade com adrenalina e estilo Mergulhe em Kew, um jogo
                arcade frenético com visual retrô, trilha sonora pulsante e
                desafios eletrizantes. Domine fases intensas, desbloqueie
                power-ups insanos e dispute seu lugar no ranking global.
                Reflexos rápidos e estratégia são tudo. Está pronto para o topo?
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
