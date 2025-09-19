import Footer from './Footer';
import './VideoHero.css';
import Section from './Section'; // importa o Section
import Articles from './Articles';

export default function VideoHero() {
  return (
    <div className="video-hero">
      <video autoPlay loop muted playsInline>
        <source src="/videos/carros.mp4" type="video/mp4" />
      </video>
    
      {/* Macaco central */}
      <div className="jungle-monkey">
        <div className="monkey-face"></div>
        <div className="monkey-hat"></div>
      </div>
      
      <div className="video-overlay jungle-overlay">
        <div className="video-badges">
          <div className="video-badge">
            <span className="badge-icon">🔴</span>
            Live in 48 Hours
          </div>
          <div className="video-badge">
            No Setup Fees
          </div>
        </div>
        
        <h1 className="video-title">
          Conheça o poder que desperta mundos<br />
          <span className="video-highlight">KEW: Jogue, explore, vença!</span>
        </h1>
        
        <p className="video-desc">
          Lançe sua plataforma white-label com 250+ provedores de jogos integrados, recursos avançados de sportsbook e controle visual completo. Projete cada detalhe, possua cada experiência do jogador.
        </p>
        
        <div className="video-features">
          <span className="feature-item">
            <span className="feature-dot">•</span>
            250+ Providers
          </span>
          <span className="feature-item">
            <span className="feature-dot">•</span>
            3 Sportsbooks
          </span>
          <span className="feature-item">
            <span className="feature-dot">•</span>
            99.9% Uptime
          </span>
          <span className="feature-item">
            <span className="feature-dot">•</span>
            24/7 Support
          </span>
        </div>
        
        <div className="video-actions">
          <button className="video-btn main">Talk to us →</button>
          <button className="video-btn secondary">See more</button>
        </div>
        <Articles/>
        {/* Section vem logo abaixo dos botões */}
        <Section />
        <Footer />
      </div>
    </div>
  );
}
