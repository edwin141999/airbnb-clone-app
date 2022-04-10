import './App.css';
import Navbar from './pages/Navbar';
import HomePage from './pages/HomePage';
import { RoomProvider } from './context/roomContext';

function App() {
  return (
    <div>
      <RoomProvider>
        <header>
          <Navbar />
        </header>
        <section>
          <HomePage />
        </section>
      </RoomProvider>
    </div>
  );
}

export default App;
