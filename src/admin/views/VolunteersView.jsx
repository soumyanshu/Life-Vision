import React from 'react';
import StatusBadge from '../components/Common/StatusBadge';
import { Users } from 'lucide-react';

export default function VolunteersView({ volunteers, onShowToast }) {
  const handleApprove = (id) => {
    onShowToast(`Volunteer application ${id} approved & assigned!`, 'success');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Volunteer Management</h1>
          <p className="text-xs text-slate-500">Manage volunteer applications, skill matching & community health mentors</p>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 bg-slate-50 uppercase tracking-wider font-bold">
                <th className="p-4">Volunteer Name</th>
                <th className="p-4">Location</th>
                <th className="p-4">Skills</th>
                <th className="p-4">Area of Interest</th>
                <th className="p-4">App Date</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {volunteers.map((vol) => (
                <tr key={vol.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-bold text-slate-900">
                    <div>{vol.name}</div>
                    <div className="text-[10px] text-pink-700 font-mono">{vol.id}</div>
                  </td>
                  <td className="p-4 text-slate-700">{vol.location}</td>
                  <td className="p-4 text-slate-900 font-bold">{vol.skills}</td>
                  <td className="p-4 text-pink-700 font-bold">{vol.interest}</td>
                  <td className="p-4 text-slate-500">{vol.applicationDate}</td>
                  <td className="p-4">
                    <StatusBadge status={vol.status} />
                  </td>
                  <td className="p-4 text-right">
                    <button
                      onClick={() => handleApprove(vol.id)}
                      className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold cursor-pointer shadow-xs"
                    >
                      Approve & Assign
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
