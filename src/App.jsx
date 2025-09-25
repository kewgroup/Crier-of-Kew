import AsideMenu from './components/AsideMenu';
import VideoHero from './components/VideoHero';
import './components/AsideMenu.css';
import Footer from './components/Footer';
import Articles from './components/Articles';
import './App.css';

const stages = [
  {id: 1, name: 'eventos'},
  {id: 2, name: 'noticias'},
  {id: 3, name: 'download'},
  {id: 4, name: 'recargar'},
  {id: 5, name: 'suporte'},
  {id: 6, name: 'cadastra-se'},
]
function App() {
  return (
    <div className="app-container">
      <AsideMenu />
      <main className="main-content">
        <VideoHero />
        <Articles />
      </main>
      <Footer />
    </div>
  );
}

export default App;
