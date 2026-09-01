import React, { useState } from 'react';
import StatusBadge from '../components/Common/StatusBadge';
import { Plus, Edit, Eye, Clock, Users, BookOpen, Layers } from 'lucide-react';

export default function TrainingProgramsView({ programs, onAddProgram }) {
  const [showAddModal, setShowAddModal] = useState(false);
  const [newProgName, setNewProgName] = useState('');
  const [newProgCategory, setNewProgCategory] = useState('Skill Vocational');
  const [newProgDuration, setNewProgDuration] = useState('3 Months (300 Hours)');

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#1E293B] tracking-tight">Training Programs</h1>
          <p className="text-xs text-[#64748B]">Managing Life Vision Society's 6 core vocational skill courses</p>
        </div>

        {/* Primary Action Button: Green #16A34A */}
        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2.5 bg-[#16A34A] hover:bg-emerald-700 text-white font-extrabold text-xs rounded-xl shadow-md flex items-center space-x-2 transition-all cursor-pointer"
        >
          <Plus className="w-4 h-4 text-white" />
          <span>+ Add New Program</span>
        </button>
      </div>

      {/* 6 Core Programs Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((prog) => (
          <div 
            key={prog.id}
            className="rounded-2xl bg-white border border-[#E2E8F0] shadow-xs overflow-hidden hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Program Image */}
              <div className="h-44 w-full relative overflow-hidden bg-[#F8FAFC]">
                <img 
                  src={prog.image} 
                  alt={prog.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-3 right-3">
                  <StatusBadge status={prog.status} />
                </div>
                <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-[#123B5D]/90 backdrop-blur-md text-[10px] font-bold text-white border border-white/20">
                  {prog.category}
                </div>
              </div>

              {/* Details */}
              <div className="p-5 space-y-3">
                <h3 className="text-lg font-bold text-[#1E293B] leading-snug">{prog.name}</h3>
                <p className="text-xs text-[#64748B] leading-relaxed line-clamp-2">{prog.description}</p>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#E2E8F0] text-xs text-[#64748B]">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-[#2563EB]" />
                    <span>{prog.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-[#16A34A]" />
                    <span>{prog.students} Trainees</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Layers className="w-4 h-4 text-[#7C3AED]" />
                    <span>{prog.activeBatches} Active Batches</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="p-4 bg-[#F8FAFC] border-t border-[#E2E8F0] flex items-center justify-between">
              <button className="text-xs font-semibold text-[#2563EB] hover:underline flex items-center space-x-1 cursor-pointer">
                <Eye className="w-3.5 h-3.5" />
                <span>View Syllabus</span>
              </button>
              <button className="px-3 py-1.5 bg-white border border-[#E2E8F0] hover:bg-slate-100 text-[#1E293B] rounded-lg text-xs font-bold flex items-center space-x-1 cursor-pointer shadow-xs">
                <Edit className="w-3.5 h-3.5" />
                <span>Edit</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Program Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#123B5D]/60 backdrop-blur-xs">
          <div className="w-full max-w-md bg-white border border-[#E2E8F0] rounded-2xl p-6 space-y-5 text-[#1E293B]">
            <h3 className="text-lg font-bold text-[#1E293B]">Add New Skill Training Program</h3>

            <div className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-[#64748B]">Program Name</label>
                <input
                  type="text"
                  value={newProgName}
                  onChange={(e) => setNewProgName(e.target.value)}
                  placeholder="e.g. Solar Technician & Repair"
                  className="w-full mt-1 p-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-xs text-[#1E293B]"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-[#64748B]">Category</label>
                <input
                  type="text"
                  value={newProgCategory}
                  onChange={(e) => setNewProgCategory(e.target.value)}
                  className="w-full mt-1 p-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-xs text-[#1E293B]"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-[#64748B]">Duration</label>
                <input
                  type="text"
                  value={newProgDuration}
                  onChange={(e) => setNewProgDuration(e.target.value)}
                  className="w-full mt-1 p-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-xs text-[#1E293B]"
                />
              </div>
            </div>

            <div className="flex items-center justify-end space-x-3 pt-2">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 bg-slate-100 text-[#64748B] rounded-xl text-xs font-semibold"
              >
                Cancel
              </button>
              {/* Primary Action Button: Green #16A34A */}
              <button
                onClick={() => {
                  if (newProgName) {
                    onAddProgram({
                      id: `PROG-0${programs.length + 1}`,
                      name: newProgName,
                      slug: newProgName.toLowerCase().replace(/\s+/g, '-'),
                      category: newProgCategory,
                      duration: newProgDuration,
                      activeBatches: 1,
                      students: 30,
                      status: 'Active',
                      image: '/image/Tailoring_training.png',
                      description: 'Newly added vocational training course.'
                    });
                  }
                  setShowAddModal(false);
                }}
                className="px-4 py-2 bg-[#16A34A] hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-md"
              >
                Create Program
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
