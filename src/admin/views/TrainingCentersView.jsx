import React, { useState } from 'react';
import StatusBadge from '../components/Common/StatusBadge';
import { Plus, MapPin, Users, BookOpen, Phone, Edit, Trash2 } from 'lucide-react';

export default function TrainingCentersView({ centers, onAddCenter }) {
  const [showAddModal, setShowAddModal] = useState(false);
  const [centerName, setCenterName] = useState('');
  const [location, setLocation] = useState('');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Training Centers</h1>
          <p className="text-xs text-slate-500">Managing LVS vocational skill hubs across Odisha and Pan-India</p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-md flex items-center space-x-2 transition-all cursor-pointer"
        >
          <Plus className="w-4 h-4 text-pink-400" />
          <span>[ + Add Training Center ]</span>
        </button>
      </div>

      {/* Centers Table */}
      <div className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 bg-slate-50 uppercase tracking-wider font-bold">
                <th className="p-4">Center ID & Name</th>
                <th className="p-4">Location</th>
                <th className="p-4">Courses Offered</th>
                <th className="p-4">Capacity</th>
                <th className="p-4">Active Trainees</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {centers.map((ctr) => (
                <tr key={ctr.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-bold text-slate-900">
                    <div>{ctr.name}</div>
                    <div className="text-[10px] text-pink-700 font-mono">{ctr.id}</div>
                  </td>
                  <td className="p-4 text-slate-700 font-medium">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5 text-pink-600 shrink-0" />
                      <span>{ctr.location}</span>
                    </div>
                  </td>
                  <td className="p-4 text-slate-700">
                    <div className="flex flex-wrap gap-1">
                      {ctr.courses.map(c => (
                        <span key={c} className="px-2 py-0.5 bg-slate-100 border border-slate-200 rounded text-[10px] text-slate-800 font-semibold">
                          {c}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="p-4 text-slate-800 font-semibold">{ctr.capacity} Trainees</td>
                  <td className="p-4 font-extrabold text-emerald-700">{ctr.activeStudents} Active</td>
                  <td className="p-4">
                    <StatusBadge status={ctr.status} />
                  </td>
                  <td className="p-4 text-right space-x-1">
                    <button className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Center Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl p-6 space-y-5 text-slate-900">
            <h3 className="text-lg font-bold text-slate-900">Add New Training Center</h3>
            <div className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-slate-700">Center Name</label>
                <input
                  type="text"
                  value={centerName}
                  onChange={(e) => setCenterName(e.target.value)}
                  placeholder="e.g. Sambalpur Skill Center"
                  className="w-full mt-1 p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-700">Location</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Sambalpur, Odisha"
                  className="w-full mt-1 p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900"
                />
              </div>
            </div>
            <div className="flex items-center justify-end space-x-3 pt-2">
              <button onClick={() => setShowAddModal(false)} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl text-xs font-semibold">
                Cancel
              </button>
              <button 
                onClick={() => {
                  if (centerName) {
                    onAddCenter({
                      id: `CTR-OD-0${centers.length + 1}`,
                      name: centerName,
                      location: location || 'Sambalpur, Odisha',
                      courses: ['Tailoring', 'Agriculture'],
                      capacity: 300,
                      activeStudents: 0,
                      status: 'Active',
                      contactPerson: 'Admin Assigned'
                    });
                  }
                  setShowAddModal(false);
                }} 
                className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold shadow-md"
              >
                Add Center
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
