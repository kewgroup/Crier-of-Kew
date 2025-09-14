import './Section.css'

const Section = () => {
  return (
    <div className="section-wrapper">
      {/* Gaming Products Section */}
      <section className="infinite-scroll-container rpg-shop-section">
        <h1 className="shop-title">Skins</h1>
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
        </div>
      </section>
    </div>
  )
}

export default Section
