import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function AppCard({ app }) {
  const nav = useNavigate();
  const { progress } = useApp();
  const done = progress[app.id]?.length || 0;

  return (
    <div className="app-card" onClick={() => nav(`/tutorial/${app.id}`)}>
      {app.badge && <div className="app-badge">{app.badge}</div>}
      <img
        className="app-icon-img"
        src={app.iconUrl}
        alt={app.name}
        style={{ background: app.bgColor, padding: 4 }}
        onError={e => { e.target.onerror = null; e.target.src = `https://via.placeholder.com/68/cccccc/666666?text=${app.name[0]}`; }}
      />
      <div className="app-card-name">{app.name}</div>
      <div className="app-card-cat hindi">{app.categoryHi}</div>
      {done > 0 && (
        <div className="progress-mini">
          <div className="progress-mini-fill" style={{ width: `${Math.min(done * 12, 100)}%` }} />
        </div>
      )}
      <div className="app-card-cta">सीखें →</div>
    </div>
  );
}
