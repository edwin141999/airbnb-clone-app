import './App.css';
import Navbar from './pages/Navbar';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className='px-16'>
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
