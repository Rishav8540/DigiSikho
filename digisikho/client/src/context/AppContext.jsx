import { createContext, useContext, useState, useCallback } from 'react';

const Ctx = createContext();
export const useApp = () => useContext(Ctx);

export function AppProvider({ children }) {
  const [progress, setProgress] = useState({});   // { appId: [stepIndexes] }
  const [toast, setToast] = useState({ msg: '', show: false });

  const toggleStep = useCallback((appId, idx) => {
    setProgress(prev => {
      const arr = prev[appId] ? [...prev[appId]] : [];
      const pos = arr.indexOf(idx);
      if (pos > -1) arr.splice(pos, 1); else arr.push(idx);
      return { ...prev, [appId]: arr };
    });
  }, []);

  const showToast = useCallback((msg) => {
    setToast({ msg, show: true });
    setTimeout(() => setToast(t => ({ ...t, show: false })), 3000);
  }, []);

  return (
    <Ctx.Provider value={{ progress, toggleStep, showToast }}>
      {children}
      <div className={`toast ${toast.show ? 'show' : ''}`}>{toast.msg}</div>
    </Ctx.Provider>
  );
}
