import { useEffect, useState } from 'react';
import axios from 'axios';
import AppCard from '../components/AppCard';

const API = '/api';
const CATS = ['All', 'Communication', 'Payment', 'Social Media', 'Entertainment', 'Navigation', 'Government'];

export default function Apps() {
  const [allApps, setAllApps] = useState([]);
  const [cat, setCat] = useState('All');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${API}/apps`).then(r => { setAllApps(r.data); setLoading(false); }).catch(() => setLoading(false));
  }, []);

  const filtered = allApps.filter(a => {
    const matchCat = cat === 'All' || a.category === cat;
    const q = search.toLowerCase();
    const matchSearch = !q || a.name.toLowerCase().includes(q) || a.categoryHi.includes(q) || a.descHi.includes(q);
    return matchCat && matchSearch;
  });

  return (
    <>
      <div className="section">
        <div className="sec-header">
          <div className="sec-tag">सभी Apps</div>
          <h2 className="sec-title">कौन सा App सीखना है?</h2>
          <p className="sec-sub hindi">नीचे दिए App पर click करें और सीखना शुरू करें</p>
        </div>

        <div className="search-wrap">
          <input
            type="text"
            placeholder="App का नाम खोजें... जैसे WhatsApp"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <span className="search-icon">🔍</span>
        </div>

        <div className="cat-wrap">
          {CATS.map(c => (
            <button key={c} className={`cat-tab ${cat === c ? 'active' : ''}`} onClick={() => setCat(c)}>
              {c === 'All' ? 'सभी' : c}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="loading"><div className="spinner" /><span className="hindi">Apps लोड हो रही हैं...</span></div>
        ) : filtered.length === 0 ? (
          <div className="loading"><span style={{ fontSize: 48 }}>🔍</span><span className="hindi">कोई App नहीं मिली</span></div>
        ) : (
          <div className="apps-grid">
            {filtered.map(a => <AppCard key={a.id} app={a} />)}
          </div>
        )}
      </div>

      <footer>
        <div className="f-logo">📚 DigiSikho</div>
        <div className="hindi">आसान सीखो • आगे बढ़ो</div>
      </footer>
    </>
  );
}
