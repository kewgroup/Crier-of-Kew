const Eventos = () => {
  const handleStart = () => {
    // abre a página de eventos em uma nova aba
    window.open("/eventos", "_blank");
  };

  return (
    <div>
      <h1>Eventos</h1>
      <p>Hoje o evento será de "esconde-esconde"</p>
      <button onClick={handleStart}>Iniciar Eventos</button>
    </div>
  );
};

export default Eventos;
