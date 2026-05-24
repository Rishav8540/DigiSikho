import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  const active = (path) => loc.pathname === path ? 'nav-btn active' : 'nav-btn';

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <Link to="/" className="nav-logo" onClick={() => setOpen(false)}>
          <div className="nav-logo-icon">📚</div>
          <div>
            <div className="brand">DigiSikho</div>
            <div className="tagline">आसान सीखो • आगे बढ़ो</div>
          </div>
        </Link>
        <div className="nav-links">
          <Link to="/"><button className={active('/')}>🏠 Home</button></Link>
          <Link to="/apps"><button className={active('/apps')}>📱 Apps सीखें</button></Link>
          <Link to="/safety"><button className={active('/safety')}>🛡️ Safety</button></Link>
          <Link to="/help"><button className={active('/help')}>❓ Help</button></Link>
        </div>
        <Link to="/help"><button className="nav-cta">📞 मदद चाहिए?</button></Link>
        <button className="hamburger" onClick={() => setOpen(o => !o)} aria-label="Menu">
          <span/><span/><span/>
        </button>
      </div>
      <div className={`mob-menu ${open ? 'open' : ''}`}>
        <Link to="/" onClick={() => setOpen(false)}><button className="nav-btn">🏠 Home</button></Link>
        <Link to="/apps" onClick={() => setOpen(false)}><button className="nav-btn">📱 Apps सीखें</button></Link>
        <Link to="/safety" onClick={() => setOpen(false)}><button className="nav-btn">🛡️ Safety</button></Link>
        <Link to="/help" onClick={() => setOpen(false)}><button className="nav-btn">❓ Help</button></Link>
      </div>
    </nav>
  );
}
