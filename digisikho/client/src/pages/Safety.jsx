export default function Safety() {
  const cards = [
    {
      icon: '🔐', title: 'Password & PIN की सुरक्षा',
      type: 'safe',
      items: [
        'अपना UPI PIN किसी को भी मत बताएं — बेटे-बेटी को भी नहीं',
        'Bank का OTP कभी share मत करें — Bank कभी नहीं माँगता',
        'Password में जन्मतिथि या नाम का use न करें',
        'Phone का screen lock हमेशा लगाकर रखें',
      ]
    },
    {
      icon: '📞', title: 'Fraud Call से बचें',
      type: 'alert',
      items: [
        'कोई भी Bank आपसे OTP नहीं माँगता — phone पर OTP बताना खतरनाक है',
        '"आपने lottery जीती" — यह 100% fraud है, तुरंत call काटें',
        'कोई अजनबी screen share करने को बोले — मना करें',
        'अनजान link पर click मत करें — चाहे कितना भी लालच दिखाएं',
      ]
    },
    {
      icon: '💳', title: 'Online Payment सावधानी',
      type: 'safe',
      items: [
        'पैसे भेजने से पहले नाम और नंबर ज़रूर check करें',
        'पहली बार ₹1 भेजकर confirm करें — फिर बड़ी amount भेजें',
        '"Receive करने के लिए PIN डालो" — यह fraud है, कभी मत करें',
        'Transaction के बाद SMS से confirm करें',
      ]
    },
    {
      icon: '📱', title: 'WhatsApp & Social Media',
      type: 'alert',
      items: [
        'अनजान WhatsApp message के link पर click मत करें',
        'Fake News आगे forward मत करें — पहले सच जाँचें',
        'Social media पर Bank details share मत करें',
        'Video call पर अपनी personal जानकारी मत दें',
      ]
    },
  ];

  return (
    <>
      <div className="section">
        <div className="sec-header">
          <div className="sec-tag">Online Safety</div>
          <h2 className="sec-title">🛡️ Online सुरक्षित रहें</h2>
          <p className="sec-sub hindi">इन ज़रूरी बातों का ध्यान रखें — ताकि कोई धोखा न दे सके</p>
        </div>

        <div className="safety-grid">
          {cards.map((c, i) => (
            <div key={i} className="safety-card">
              <div className="safety-card-hdr">
                <span className="safety-icon">{c.icon}</span>
                <span className="safety-title">{c.title}</span>
              </div>
              <ul className={c.type === 'alert' ? 'alert-list' : 'safety-list'}>
                {c.items.map((item, j) => <li key={j} className="hindi">{item}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 28 }}>
          <div style={{ background: '#fff4f4', border: '1.5px solid #e74c3c', borderRadius: 18, padding: '20px 22px', display: 'flex', gap: 14, maxWidth: 700 }}>
            <span style={{ fontSize: 28 }}>🆘</span>
            <div>
              <div style={{ fontWeight: 700, color: '#a93226', fontSize: 15, marginBottom: 4 }}>Fraud हो जाए तो?</div>
              <div className="hindi" style={{ fontSize: 13, color: '#7b241c', lineHeight: 1.7 }}>
                तुरंत Cyber Crime helpline पर call करें: <strong>1930</strong><br />
                National Cyber Crime Report: <strong>cybercrime.gov.in</strong><br />
                अपने Bank को भी तुरंत call करें और account block करवाएं।
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="f-logo">📚 DigiSikho</div>
        <div className="hindi">आसान सीखो • आगे बढ़ो</div>
      </footer>
    </>
  );
}
