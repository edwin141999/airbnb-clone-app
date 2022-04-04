import './App.css';
import Navbar from './pages/Navbar';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <section>
        <SearchPage />
      </section>
    </div>
  );
}

export default App;
