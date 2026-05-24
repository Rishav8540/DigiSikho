import { useNavigate } from 'react-router-dom';

export default function Help() {
  const nav = useNavigate();

  return (
    <>
      <div className="section">
        <div className="sec-header">
          <div className="sec-tag">मदद</div>
          <h2 className="sec-title">❓ आपकी मदद के लिए हम हैं</h2>
          <p className="sec-sub hindi">परेशान मत होइए — नीचे दिए options से मदद लें</p>
        </div>

        <div className="emergency-banner">
          <div className="eb-icon">📞</div>
          <div className="eb-title">अपने बच्चे / परिवार को Call करें</div>
          <div className="eb-sub hindi">अगर कोई चीज़ समझ नहीं आ रही — बस call कीजिए, वो ज़रूर मदद करेंगे</div>
          <button className="eb-btn" onClick={() => alert('📞 अपने phone का dial pad खोलें और परिवार को call करें')}>
            📞 Call करें
          </button>
        </div>

        <div className="help-grid">
          {[
            { icon: '🎥', title: 'Video Tutorial देखें', desc: 'हर App की step-by-step Hindi video — जितनी बार चाहें देखें', btn: '📱 Apps देखें →', action: () => nav('/apps') },
            { icon: '🛡️', title: 'Safety Tips पढ़ें', desc: 'Online fraud और scam से कैसे बचें — ज़रूर पढ़ें', btn: '🛡️ Safety देखें →', action: () => nav('/safety') },
            { icon: '🆘', title: 'Cyber Crime Helpline', desc: 'Online fraud हो जाए तो — तुरंत यहाँ call करें: 1930', btn: '📞 1930 Helpline', action: () => alert('Cyber Crime Helpline: 1930\nअपने phone से dial करें') },
            { icon: '🏦', title: 'Bank Helpline', desc: 'किसी भी Bank की customer care — 24 घंटे available', btn: '📞 Bank Call करें', action: () => alert('अपने ATM card के पीछे helpline number देखें') },
          ].map((c, i) => (
            <div key={i} className="help-card">
              <div className="help-card-icon">{c.icon}</div>
              <div className="help-card-title">{c.title}</div>
              <div className="help-card-desc hindi">{c.desc}</div>
              <button className="help-card-btn" onClick={c.action}>{c.btn}</button>
            </div>
          ))}
        </div>

        <div className="helpline-grid">
          {[
            { label: 'Cyber Crime', num: '1930' },
            { label: 'Police', num: '100' },
            { label: 'Ambulance', num: '108' },
            { label: 'Women Helpline', num: '1091' },
            { label: 'Senior Citizen', num: '14567' },
            { label: 'Consumer', num: '1800-11-4000' },
          ].map((h, i) => (
            <div key={i} className="helpline-card">
              <div className="hl-label hindi">{h.label}</div>
              <div className="hl-num">{h.num}</div>
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
