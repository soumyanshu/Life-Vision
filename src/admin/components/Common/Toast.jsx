import React, { useEffect } from 'react';
import { CheckCircle2, AlertTriangle, Info, X } from 'lucide-react';

export default function Toast({ message, type = 'success', onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const icons = {
    success: CheckCircle2,
    warning: AlertTriangle,
    info: Info
  };

  const Icon = icons[type] || CheckCircle2;

  const styles = {
    success: 'bg-slate-900 border-emerald-500/40 text-emerald-300 shadow-emerald-950/40',
    warning: 'bg-slate-900 border-amber-500/40 text-amber-300 shadow-amber-950/40',
    info: 'bg-slate-900 border-pink-500/40 text-pink-300 shadow-pink-950/40'
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 flex items-center space-x-3 px-4 py-3 rounded-2xl border shadow-2xl backdrop-blur-md animate-slide-up ${styles[type]}`}>
      <Icon className="w-5 h-5 shrink-0" />
      <span className="text-xs font-semibold text-slate-100">{message}</span>
      <button 
        onClick={onClose}
        className="p-1 text-slate-400 hover:text-white rounded-lg"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
