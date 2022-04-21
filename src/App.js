import './App.css';
import { HashRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './pages/HomePage';
import Navbar from './components/Navbar';
import ArtistPage from './pages/ArtistPage';
import AlbumPage from './pages/AlbumPage';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="artist/:ArtistID" element={<ArtistPage />} />
          <Route path="album/:albumID" element={<AlbumPage />} />
        </Routes>      
      </Router>
    </div>
  );
}

export default App;