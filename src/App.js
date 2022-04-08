import './App.css';
import Navbar from './pages/Navbar';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <section>
        <HomePage />
      </section>
    </div>
  );
}

export default App;
