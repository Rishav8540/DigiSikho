import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AppCard from '../components/AppCard';

const API = '/api';

const HERO_APPS = [
  { name: 'WhatsApp', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/120px-WhatsApp.svg.png', bg: '#dcfce7' },
  { name: 'PhonePe', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/PhonePe_Logo.svg/120px-PhonePe_Logo.svg.png', bg: '#ede9fe' },
  { name: 'Paytm', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/120px-Paytm_Logo_%28standalone%29.svg.png', bg: '#dbeafe' },
  { name: 'Instagram', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/120px-Instagram_icon.png', bg: '#fce7f3' },
  { name: 'YouTube', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/120px-YouTube_full-color_icon_%282017%29.svg.png', bg: '#fee2e2' },
  { name: 'Maps', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Google_Maps_Logo_2020.svg/120px-Google_Maps_Logo_2020.svg.png', bg: '#fef9c3' },
];

export default function Home() {
  const [apps, setApps] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    axios.get(`${API}/apps`).then(r => setApps(r.data.slice(0, 6))).catch(() => {});
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-badge"><span>🇮🇳</span> भारत के बुज़ुर्गों के लिए — With Love</div>
            <h1 className="hero-title">
              अपने <span className="hl">माँ-बाबा</span> को<br />
              Mobile सिखाएं आसानी से
            </h1>
            <p className="hero-sub">
              बिना किसी की मदद के — घर बैठे सीखें<br />
              Step-by-step Hindi videos • आसान भाषा • बड़े बटन
            </p>
            <div className="hero-btns">
              <button className="btn-primary" onClick={() => nav('/apps')}>📱 Apps सीखना शुरू करें</button>
              <button className="btn-outline" onClick={() => nav('/help')}>📞 मदद चाहिए?</button>
            </div>
          </div>
          <div className="hero-right">
            {HERO_APPS.map(a => (
              <div key={a.name} className="hero-pill">
                <img src={a.iconUrl} alt={a.name} style={{ width: 40, height: 40, borderRadius: 10, objectFit: 'contain', background: a.bg, padding: 3 }} onError={e => e.target.style.display='none'} />
                <span className="pill-name">{a.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-strip">
        <div className="stats-inner">
          <div className="stat-item"><div className="stat-num">9+</div><div className="stat-label hindi">Apps की जानकारी</div></div>
          <div className="stat-item"><div className="stat-num">100%</div><div className="stat-label hindi">हिंदी में</div></div>
          <div className="stat-item"><div className="stat-num">Free</div><div className="stat-label hindi">बिल्कुल मुफ्त</div></div>
          <div className="stat-item"><div className="stat-num">✔</div><div className="stat-label hindi">Real YouTube Videos</div></div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="section">
        <div className="sec-header">
          <div className="sec-tag">How it works</div>
          <h2 className="sec-title">इतना आसान है! 😊</h2>
          <p className="sec-sub">बस 3 steps — और आप Expert बन जाएंगे</p>
        </div>
        <div className="how-grid">
          {[
            { icon: '📱', n: 1, title: 'App चुनें', desc: 'जो App सीखनी है उसके icon पर click करें — बस इतना काफी है' },
            { icon: '▶️', n: 2, title: 'Hindi Video देखें', desc: 'Real YouTube Hindi videos देखें — subtitles भी हैं' },
            { icon: '✅', n: 3, title: 'Practice करें', desc: 'हर step को खुद अपने phone पर try करें — गलती से मत डरें!' },
          ].map(h => (
            <div key={h.n} className="how-card">
              <div className="how-icon">{h.icon}</div>
              <div className="how-num">{h.n}</div>
              <div className="how-title">{h.title}</div>
              <div className="how-desc hindi">{h.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* POPULAR APPS */}
      <div style={{ background: 'var(--white)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="section">
          <div className="sec-header">
            <div className="sec-tag">Popular Apps</div>
            <h2 className="sec-title">सबसे ज़्यादा सीखी जाने वाली Apps</h2>
            <p className="sec-sub">इन पर click करके शुरू करें</p>
          </div>
          <div className="apps-grid">
            {apps.map(a => <AppCard key={a.id} app={a} />)}
          </div>
          <div style={{ textAlign: 'center', marginTop: 28 }}>
            <button className="btn-primary" onClick={() => nav('/apps')}>सभी Apps देखें →</button>
          </div>
        </div>
      </div>

      <footer>
        <div className="f-logo">📚 DigiSikho</div>
        <div className="hindi">आसान सीखो • आगे बढ़ो • India के बुज़ुर्गों के लिए</div>
        <div style={{ marginTop: 6, fontSize: 12 }}>Made with ❤️ for Indian families &nbsp;|&nbsp; Free forever &nbsp;|&nbsp; Hindi + English</div>
      </footer>
    </>
  );
}
