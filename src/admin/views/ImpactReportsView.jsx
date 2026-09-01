import React from 'react';
import StatCard from '../components/Common/StatCard';
import DashboardCharts from '../components/Charts/DashboardCharts';
import { BarChart3, Download, FileSpreadsheet, FileText, Sparkles } from 'lucide-react';

export default function ImpactReportsView({ onShowToast }) {
  const handleExport = (format) => {
    onShowToast(`Exporting Life Vision Society Impact Analytics as ${format}...`, 'success');
  };

  return (
    <div className="space-y-6">
      {/* Header & Export Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Impact & Analytics Reports</h1>
          <p className="text-xs text-slate-500">Comprehensive LVS metrics, demographic reach, and livelihood outcome analytics</p>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => handleExport('PDF')}
            className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold shadow-sm flex items-center space-x-1.5 cursor-pointer"
          >
            <FileText className="w-4 h-4 text-pink-400" />
            <span>[ Export PDF ]</span>
          </button>
          <button
            onClick={() => handleExport('Excel')}
            className="px-3.5 py-2 bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl text-xs font-bold shadow-sm flex items-center space-x-1.5 cursor-pointer"
          >
            <FileSpreadsheet className="w-4 h-4" />
            <span>[ Export Excel ]</span>
          </button>
          <button
            onClick={() => handleExport('CSV')}
            className="px-3.5 py-2 bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 rounded-xl text-xs font-bold flex items-center space-x-1.5 cursor-pointer shadow-xs"
          >
            <Download className="w-4 h-4 text-slate-600" />
            <span>[ Export CSV ]</span>
          </button>
        </div>
      </div>

      {/* 8 Impact KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1 shadow-sm">
          <span className="text-[11px] font-bold text-slate-500 uppercase">Women Empowered</span>
          <div className="text-2xl font-extrabold text-pink-700">5,000+</div>
          <span className="text-[10px] text-pink-700 font-bold">68% of Total Trainees</span>
        </div>
        <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1 shadow-sm">
          <span className="text-[11px] font-bold text-slate-500 uppercase">Trainees Certified</span>
          <div className="text-2xl font-extrabold text-emerald-700">7,500+</div>
          <span className="text-[10px] text-emerald-700 font-bold">NSDC & LVS Verified</span>
        </div>
        <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1 shadow-sm">
          <span className="text-[11px] font-bold text-slate-500 uppercase">Placement Support</span>
          <div className="text-2xl font-extrabold text-sky-700">85%</div>
          <span className="text-[10px] text-sky-700 font-bold">Livelihood Outcome</span>
        </div>
        <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1 shadow-sm">
          <span className="text-[11px] font-bold text-slate-500 uppercase">Health & Insurance Camps</span>
          <div className="text-2xl font-extrabold text-amber-700">150+</div>
          <span className="text-[10px] text-amber-700 font-bold">Community Drives</span>
        </div>
      </div>

      {/* Interactive Visual Charts */}
      <DashboardCharts />
    </div>
  );
}
