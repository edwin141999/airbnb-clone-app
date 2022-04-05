import './App.css';
import Navbar from './pages/Navbar';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div className='px-16'>
      <SearchPage/>
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
