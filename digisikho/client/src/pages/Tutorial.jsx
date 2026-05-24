import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useApp } from '../context/AppContext';

const API = '/api';

export default function Tutorial() {
  const { id } = useParams();
  const nav = useNavigate();
  const { progress, toggleStep, showToast } = useApp();
  const [app, setApp] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selVid, setSelVid] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get(`${API}/apps/${id}`)
      .then(r => { setApp(r.data); setLoading(false); setSelVid(0); })
      .catch(() => { setLoading(false); nav('/apps'); });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (loading) return <div className="loading"><div className="spinner" /><span className="hindi">लोड हो रहा है...</span></div>;
  if (!app) return null;

  const done = progress[id] || [];
  const total = app.steps.length;
  const pct = total ? Math.round((done.length / total) * 100) : 0;
  const vid = app.videos[selVid];

  const handleStep = (i) => {
    toggleStep(id, i);
    if (!done.includes(i) && done.length + 1 === total) {
      setTimeout(() => showToast('🎉 शाबाश! आपने सभी steps complete किए!'), 300);
    }
  };

  return (
    <>
      {/* APP HEADER */}
      <div className="tut-hero">
        <div className="tut-hero-inner">
          <button className="back-btn" onClick={() => nav('/apps')}>← वापस जाएं (Go Back)</button>
          <div className="tut-app-row">
            <img
              className="tut-app-icon"
              src={app.iconUrl}
              alt={app.name}
              style={{ background: app.bgColor, padding: 6 }}
              onError={e => { e.target.onerror = null; e.target.src = `https://via.placeholder.com/78/cccccc/666?text=${app.name[0]}`; }}
            />
            <div>
              <div className="tut-app-name">{app.name}</div>
              <div className="tut-app-desc hindi">{app.descHi}</div>
              <div className="tut-tags">
                <span className="tag tag-green">🇮🇳 हिंदी</span>
                <span className="tag tag-blue">📝 Subtitles</span>
                <span className="tag tag-orange">Free</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* VIDEO SECTION */}
      <div className="video-section">
        <div className="video-inner">
          {/* Video selector tabs */}
          <div className="vid-tabs">
            {app.videos.map((v, i) => (
              <button key={v.id} className={`vid-tab ${selVid === i ? 'active' : ''}`} onClick={() => setSelVid(i)}>
                {v.label}
              </button>
            ))}
          </div>

          {/* YouTube Embed */}
          <div className="yt-player-wrap">
            <iframe
              key={vid.youtubeId}
              src={`https://www.youtube.com/embed/${vid.youtubeId}?rel=0&modestbranding=1&cc_load_policy=1`}
              title={vid.titleHi}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="vid-badges">
            <span className="vid-badge vb-red">🇮🇳 हिंदी में</span>
            <span className="vid-badge vb-green">✔ Subtitles</span>
            <span className="vid-badge vb-gray">⏱ {vid.duration}</span>
          </div>
          <p className="hindi" style={{ marginTop: 10, fontSize: 14, color: 'var(--text2)' }}>{vid.descHi}</p>
        </div>
      </div>

      {/* STEPS */}
      <div className="steps-section">
        <div className="progress-row">
          <span className="hindi">आपकी Progress</span>
          <span>{done.length} / {total} steps ✓</span>
        </div>
        <div className="prog-bar">
          <div className="prog-fill" style={{ width: `${pct}%` }} />
        </div>

        <div className="steps-hdr">
          <div className="steps-hdr-icon">📋</div>
          <div className="steps-hdr-title">Step-by-Step Guide — एक-एक करके करें</div>
        </div>

        <div className="steps-list">
          {app.steps.map((s, i) => {
            const isDone = done.includes(i);
            return (
              <div key={i} className={`step-card ${isDone ? 'done' : ''}`} onClick={() => handleStep(i)}>
                <div className="step-num">{isDone ? '✓' : i + 1}</div>
                <div style={{ flex: 1 }}>
                  <div className="step-en">{s.en}</div>
                  <div className="step-hi hindi">{s.hi}</div>
                </div>
                <div className="step-chk">{isDone ? '✅' : '○'}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* TIP */}
      {app.tip && (
        <div className="tip-box" style={{ margin: '0 auto 16px', maxWidth: 900, padding: '0 20px' }}>
          <div style={{ background: '#fffbf0', border: '1.5px solid #f5c842', borderRadius: 14, padding: '16px 18px', display: 'flex', gap: 12, width: '100%' }}>
            <span style={{ fontSize: 22 }}>{app.tip.icon}</span>
            <div>
              <div className="t-title" style={{ fontWeight: 700, color: '#7d5c00', fontSize: 13, marginBottom: 3 }}>{app.tip.title}</div>
              <div className="hindi" style={{ fontSize: 13, color: '#5a4200', lineHeight: 1.6 }}>{app.tip.body}</div>
            </div>
          </div>
        </div>
      )}

      {/* WARNING */}
      {app.warning && (
        <div style={{ maxWidth: 900, margin: '12px auto', padding: '0 20px' }}>
          <div style={{ background: '#fff4f4', border: '1.5px solid #e74c3c', borderRadius: 14, padding: '16px 18px', display: 'flex', gap: 12 }}>
            <span style={{ fontSize: 22 }}>{app.warning.icon}</span>
            <div>
              <div style={{ fontWeight: 700, color: '#a93226', fontSize: 13, marginBottom: 3 }}>{app.warning.title}</div>
              <div className="hindi" style={{ fontSize: 13, color: '#7b241c', lineHeight: 1.6 }}>{app.warning.body}</div>
            </div>
          </div>
        </div>
      )}

      {/* FAQ */}
      <div className="faq-section">
        <div className="faq-inner">
          <div className="steps-hdr" style={{ marginBottom: 14 }}>
            <div className="steps-hdr-icon">❓</div>
            <div className="steps-hdr-title">अक्सर पूछे जाने वाले सवाल</div>
          </div>
          {app.faqs.map((f, i) => (
            <div key={i} className="faq-item">
              <div className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <span>{f.q}</span>
                <span className={`faq-arrow ${openFaq === i ? 'open' : ''}`}>▼</span>
              </div>
              <div className={`faq-a hindi ${openFaq === i ? 'open' : ''}`}>{f.a}</div>
            </div>
          ))}
        </div>
      </div>

      <footer>
        <div className="f-logo">📚 DigiSikho</div>
        <div className="hindi">आसान सीखो • आगे बढ़ो</div>
      </footer>
    </>
  );
}
