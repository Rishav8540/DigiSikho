import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Apps from './pages/Apps';
import Tutorial from './pages/Tutorial';
import Safety from './pages/Safety';
import Help from './pages/Help';
import './index.css';

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/tutorial/:id" element={<Tutorial />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}
