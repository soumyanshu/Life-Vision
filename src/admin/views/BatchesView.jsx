import React, { useState } from 'react';
import StatusBadge from '../components/Common/StatusBadge';
import { Plus, Calendar, User, Building2, Edit, Trash2 } from 'lucide-react';

export default function BatchesView({ batches, onAddBatch }) {
  const [showAddModal, setShowAddModal] = useState(false);
  const [course, setCourse] = useState('Tailoring & Stitching');
  const [trainer, setTrainer] = useState('Sunita Sahu');
  const [startDate, setStartDate] = useState('2026-09-15');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Batch Management</h1>
          <p className="text-xs text-slate-500">Schedule, assign trainers, and track active student batches across centers</p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-md flex items-center space-x-2 transition-all cursor-pointer"
        >
          <Plus className="w-4 h-4 text-pink-400" />
          <span>[ + Create Batch ]</span>
        </button>
      </div>

      {/* Batches Table */}
      <div className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 bg-slate-50 uppercase tracking-wider font-bold">
                <th className="p-4">Batch ID</th>
                <th className="p-4">Course</th>
                <th className="p-4">Training Center</th>
                <th className="p-4">Trainer</th>
                <th className="p-4">Start - End Date</th>
                <th className="p-4">Capacity</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {batches.map((b) => (
                <tr key={b.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-mono font-bold text-pink-700">{b.id}</td>
                  <td className="p-4 font-bold text-slate-900">{b.course}</td>
                  <td className="p-4 text-slate-700">{b.center}</td>
                  <td className="p-4 text-slate-900 font-semibold">{b.trainer}</td>
                  <td className="p-4 text-slate-600">{b.startDate} to {b.endDate}</td>
                  <td className="p-4 text-slate-900 font-bold">{b.students} / {b.capacity}</td>
                  <td className="p-4">
                    <StatusBadge status={b.status} />
                  </td>
                  <td className="p-4 text-right space-x-1">
                    <button className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg">
                      <Edit className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Create Batch Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl p-6 space-y-5 text-slate-900">
            <h3 className="text-lg font-bold text-slate-900">Create New Batch</h3>
            <div className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-slate-700">Course</label>
                <select
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="w-full mt-1 p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900"
                >
                  <option value="Tailoring & Stitching">Tailoring & Stitching</option>
                  <option value="Beautician & Wellness">Beautician & Wellness</option>
                  <option value="Agriculture & Farming">Agriculture & Farming</option>
                  <option value="Healthcare & Caregiving">Healthcare & Caregiving</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-700">Trainer Name</label>
                <input
                  type="text"
                  value={trainer}
                  onChange={(e) => setTrainer(e.target.value)}
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
                  onAddBatch({
                    id: `BATCH-2026-X${batches.length + 1}`,
                    course,
                    center: 'Bhubaneswar LVS Skill Center',
                    trainer,
                    startDate,
                    endDate: '2026-12-15',
                    students: 0,
                    capacity: 30,
                    status: 'Upcoming'
                  });
                  setShowAddModal(false);
                }} 
                className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold shadow-md"
              >
                Create Batch
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
