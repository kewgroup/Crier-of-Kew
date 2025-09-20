import AsideMenu from './components/AsideMenu';
import VideoHero from './components/VideoHero';
import './components/AsideMenu.css';
import Footer from './components/Footer';
import Articles from './components/Articles';
import './App.css';

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
