import './Articles.css'
import Form from './Form';

const Articles = () => {
  return (
    <div className="articles-container">
      {/* Gaming Products Section */}
      <section className="gaming-section">
        <div className="section-header">
          <h1 className="section-title">Skins</h1>
          <div className="section-subtitle">
            <span className="subtitle-text">Everything you need to launch and scale</span>
            <p className="subtitle-description">
              One platform, infinite possibilities. From game aggregation to payment processing, 
              we've built everything you need to run a successful gaming operation.
            </p>
          </div>
        </div>
        
        <div className="infinite-scroll-container">
          <div className="infinite-scroll-track">
            <div className="infinite-scroll-card rpg-card">
              <div className="card-content">
                <i>🎮</i>
                <h3>Jogos Premium</h3>
                <p>Coleção exclusiva de jogos AAA com gráficos de última geração e gameplay imersivo.</p>
                <button className="shop-btn">Explorar</button>
              </div>
            </div>
            <div className="infinite-scroll-card rpg-card">
              <div className="card-content">
                <i>🏆</i>
                <h3>Competições</h3>
                <p>Participe de torneios emocionantes e ganhe prêmios incríveis em dinheiro real.</p>
                <button className="shop-btn">Participar</button>
              </div>
            </div>
            <div className="infinite-scroll-card rpg-card">
              <div className="card-content">
                <i>🎯</i>
                <h3>Esports</h3>
                <p>Liga profissional com times de elite e transmissões ao vivo de alta qualidade.</p>
                <button className="shop-btn">Assistir</button>
              </div>
            </div>
            <div className="infinite-scroll-card rpg-card">
              <div className="card-content">
                <i>💎</i>
                <h3>NFTs Gaming</h3>
                <p>Colete itens únicos e raros que você pode usar em múltiplos jogos.</p>
                <button className="shop-btn">Colecionar</button>
              </div>
            </div>
            <div className="infinite-scroll-card rpg-card">
              <div className="card-content">
                <i>🚀</i>
                <h3>Lançamentos</h3>
                <p>Seja o primeiro a jogar os títulos mais aguardados do ano.</p>
                <button className="shop-btn">Pré-venda</button>
              </div>
            </div>
            <div className="infinite-scroll-card rpg-card">
              <div className="card-content">
                <i>🎪</i>
                <h3>Eventos</h3>
                <p>Festivais de gaming, convenções e meetups com a comunidade.</p>
                <button className="shop-btn">Inscrever</button>
              </div>
            </div>
            <div className="infinite-scroll-card rpg-card">
              <div className="card-content">
                <i>🎁</i>
                <h3>Rewards</h3>
                <p>Sistema de recompensas exclusivo com benefícios para jogadores fiéis.</p>
                <button className="shop-btn">Resgatar</button>
              </div>
            </div>
            {/* Duplicando os cards para o efeito infinito */}
            <div className="infinite-scroll-card rpg-card">
              <div className="card-content">
                <i>🎮</i>
                <h3>Jogos Premium</h3>
                <p>Coleção exclusiva de jogos AAA com gráficos de última geração e gameplay imersivo.</p>
                <button className="shop-btn">Explorar</button>
              </div>
            </div>
            <div className="infinite-scroll-card rpg-card">
              <div className="card-content">
                <i>🏆</i>
                <h3>Competições</h3>
                <p>Participe de torneios emocionantes e ganhe prêmios incríveis em dinheiro real.</p>
                <button className="shop-btn">Participar</button>
              </div>
            </div>
            <div className="infinite-scroll-card rpg-card">
              <div className="card-content">
                <i>🎯</i>
                <h3>Esports</h3>
                <p>Liga profissional com times de elite e transmissões ao vivo de alta qualidade.</p>
                <button className="shop-btn">Assistir</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Form />
    </div>
  )
}

export default Articles