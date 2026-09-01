import React, { useState } from 'react';
import StatusBadge from '../components/Common/StatusBadge';
import { 
  X, User, Mail, Phone, MapPin, GraduationCap, Calendar, 
  FileCheck, CheckCircle2, Award, Clock, ArrowRight, Check, Ban
} from 'lucide-react';

export default function AppDetailsModal({ application, onClose, onUpdateStatus, onAssignBatch }) {
  if (!application) return null;

  const [selectedBatch, setSelectedBatch] = useState(application.preferredBatch || 'BATCH-2026-T1 (Morning)');
  const [showBatchAssignModal, setShowBatchAssignModal] = useState(false);

  const timelineSteps = [
    { step: 1, label: 'Application Submitted', date: application.applicationDate, done: application.timelineStep >= 1 },
    { step: 2, label: 'Under Review', date: 'Document Verification', done: application.timelineStep >= 2 },
    { step: 3, label: 'Shortlisted', date: 'Interview Scheduled', done: application.timelineStep >= 3 },
    { step: 4, label: 'Selected', date: 'Enrolled in LVS', done: application.timelineStep >= 4 },
    { step: 5, label: 'Batch Assigned', date: application.preferredBatch || 'Assigned', done: application.timelineStep >= 5 }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#2C221E]/50 backdrop-blur-xs overflow-y-auto">
      <div className="w-full max-w-4xl bg-[#FFFDF9] border border-[#E5DDD0] rounded-3xl shadow-2xl overflow-hidden my-auto space-y-0 text-[#2C221E]">
        
        {/* Header */}
        <div className="p-6 bg-[#FAF6EE] border-b border-[#E5DDD0] flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src={application.photo} 
              alt={application.name} 
              className="w-14 h-14 rounded-2xl object-cover ring-2 ring-[#E5DDD0]" 
            />
            <div>
              <div className="flex items-center space-x-3">
                <h2 className="text-xl font-bold text-[#2C221E]">{application.name}</h2>
                <StatusBadge status={application.status} />
              </div>
              <p className="text-xs text-[#8C756B] font-mono mt-0.5">
                ID: {application.id} • Applied on {application.applicationDate}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#8C756B] hover:text-[#2C221E] rounded-xl hover:bg-[#F5EFE6] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
          
          {/* Application Timeline Progress */}
          <div className="p-5 rounded-2xl bg-[#FAF6EE] border border-[#E5DDD0] space-y-4">
            <h3 className="text-xs font-bold text-[#8C756B] uppercase tracking-wider">Application Timeline Progress</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 relative">
              {timelineSteps.map((s) => (
                <div key={s.step} className="flex sm:flex-col items-center sm:items-start space-x-3 sm:space-x-0 space-y-1">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                    s.done 
                      ? 'bg-[#3D0A2E] text-white ring-4 ring-[#FAF0E6]' 
                      : 'bg-[#EFE6D8] text-[#8C756B] border border-[#DCD0C0]'
                  }`}>
                    {s.done ? <Check className="w-4 h-4 text-[#F472B6]" /> : s.step}
                  </div>
                  <div>
                    <div className={`text-xs font-bold ${s.done ? 'text-[#2C221E]' : 'text-[#8C756B]'}`}>{s.label}</div>
                    <div className="text-[10px] text-[#8C756B]">{s.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Grid: Personal Info & Education */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Personal Information */}
            <div className="p-5 rounded-2xl bg-[#FAF6EE] border border-[#E5DDD0] space-y-4">
              <h4 className="text-xs font-bold text-[#C52B75] uppercase tracking-wider flex items-center gap-2">
                <User className="w-4 h-4" /> Personal Information
              </h4>

              <div className="space-y-2.5 text-xs text-[#5C4A42]">
                <div className="flex justify-between border-b border-[#E5DDD0] pb-1.5">
                  <span className="text-[#8C756B]">Gender & Age:</span>
                  <span className="font-semibold text-[#2C221E]">{application.gender}, {application.age} Yrs (DOB: {application.dob})</span>
                </div>
                <div className="flex justify-between border-b border-[#E5DDD0] pb-1.5">
                  <span className="text-[#8C756B]">Mobile Number:</span>
                  <span className="font-semibold text-[#2C221E]">{application.mobile}</span>
                </div>
                <div className="flex justify-between border-b border-[#E5DDD0] pb-1.5">
                  <span className="text-[#8C756B]">Email Address:</span>
                  <span className="font-semibold text-[#2C221E]">{application.email}</span>
                </div>
                <div className="flex justify-between border-b border-[#E5DDD0] pb-1.5">
                  <span className="text-[#8C756B]">Full Address:</span>
                  <span className="font-semibold text-[#2C221E] text-right">{application.address}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8C756B]">District & State:</span>
                  <span className="font-semibold text-[#2C221E]">{application.district}, {application.state} - {application.pincode}</span>
                </div>
              </div>
            </div>

            {/* Education & Preferences */}
            <div className="p-5 rounded-2xl bg-[#FAF6EE] border border-[#E5DDD0] space-y-4">
              <h4 className="text-xs font-bold text-[#C52B75] uppercase tracking-wider flex items-center gap-2">
                <GraduationCap className="w-4 h-4" /> Education & Course Preferences
              </h4>

              <div className="space-y-2.5 text-xs text-[#5C4A42]">
                <div className="flex justify-between border-b border-[#E5DDD0] pb-1.5">
                  <span className="text-[#8C756B]">Qualification:</span>
                  <span className="font-semibold text-[#2C221E]">{application.qualification}</span>
                </div>
                <div className="flex justify-between border-b border-[#E5DDD0] pb-1.5">
                  <span className="text-[#8C756B]">School / College:</span>
                  <span className="font-semibold text-[#2C221E]">{application.institution} ({application.passingYear})</span>
                </div>
                <div className="flex justify-between border-b border-[#E5DDD0] pb-1.5">
                  <span className="text-[#8C756B]">Applied Course:</span>
                  <span className="font-bold text-[#2C221E]">{application.course}</span>
                </div>
                <div className="flex justify-between border-b border-[#E5DDD0] pb-1.5">
                  <span className="text-[#8C756B]">Preferred Center:</span>
                  <span className="font-semibold text-[#2C221E]">{application.preferredCenter}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8C756B]">Preferred Batch:</span>
                  <span className="font-semibold text-[#047857]">{application.preferredBatch}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Uploaded Documents */}
          <div className="p-5 rounded-2xl bg-[#FAF6EE] border border-[#E5DDD0] space-y-3">
            <h4 className="text-xs font-bold text-[#C52B75] uppercase tracking-wider flex items-center gap-2">
              <FileCheck className="w-4 h-4" /> Uploaded Verification Documents
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {Object.entries(application.documents || {}).map(([key, val]) => (
                <div key={key} className="p-3 bg-[#FFFDF9] border border-[#E5DDD0] rounded-xl space-y-1 shadow-xs">
                  <span className="text-[10px] uppercase font-bold text-[#8C756B]">{key}</span>
                  <p className="text-xs font-semibold text-[#2C221E] truncate">{val}</p>
                  <button className="text-[10px] text-[#C52B75] font-bold hover:underline cursor-pointer">Preview File</button>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Action Footer Buttons */}
        <div className="p-6 bg-[#FAF6EE] border-t border-[#E5DDD0] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onUpdateStatus(application.id, 'Shortlisted', 3)}
              className="px-4 py-2.5 bg-[#F3E8FF] hover:bg-[#E9D5FF] text-[#6B21A8] border border-[#DDD6FE] rounded-xl text-xs font-bold transition-all cursor-pointer"
            >
              [ Shortlist ]
            </button>
            <button
              onClick={() => onUpdateStatus(application.id, 'Selected', 4)}
              className="px-4 py-2.5 bg-[#ECFDF5] hover:bg-[#D1FAE5] text-[#047857] border border-[#A7F3D0] rounded-xl text-xs font-bold transition-all cursor-pointer"
            >
              [ Select Candidate ]
            </button>
            <button
              onClick={() => onUpdateStatus(application.id, 'Rejected', 1)}
              className="px-4 py-2.5 bg-rose-100 hover:bg-rose-200 text-rose-800 border border-rose-300 rounded-xl text-xs font-bold transition-all cursor-pointer"
            >
              [ Reject ]
            </button>
          </div>

          <button
            onClick={() => setShowBatchAssignModal(true)}
            className="px-5 py-2.5 bg-[#3D0A2E] hover:bg-[#5A1644] text-white font-bold text-xs rounded-xl shadow-md flex items-center space-x-2 transition-all cursor-pointer"
          >
            <Award className="w-4 h-4 text-[#F472B6]" />
            <span>[ Assign Batch ]</span>
          </button>
        </div>

      </div>

      {/* Assign Batch Sub-modal */}
      {showBatchAssignModal && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-[#2C221E]/60 backdrop-blur-xs">
          <div className="w-full max-w-md bg-[#FFFDF9] border border-[#E5DDD0] rounded-2xl p-6 space-y-5 text-[#2C221E]">
            <h3 className="text-lg font-bold text-[#2C221E]">Assign Training Batch</h3>
            <p className="text-xs text-[#8C756B]">Select an active or upcoming batch for {application.name}.</p>
            
            <select
              value={selectedBatch}
              onChange={(e) => setSelectedBatch(e.target.value)}
              className="w-full p-3 bg-[#FAF6EE] border border-[#E5DDD0] rounded-xl text-xs font-semibold text-[#2C221E] focus:outline-none"
            >
              <option value="BATCH-2026-T1 (Morning)">BATCH-2026-T1 (Morning) - Bhubaneswar Hub</option>
              <option value="BATCH-2026-B1 (Afternoon)">BATCH-2026-B1 (Afternoon) - Cuttack Hub</option>
              <option value="BATCH-2026-A1 (Full Day)">BATCH-2026-A1 (Full Day) - Puri Hub</option>
              <option value="BATCH-2026-H1 (Morning)">BATCH-2026-H1 (Morning) - Ganjam Hub</option>
            </select>

            <div className="flex items-center justify-end space-x-3 pt-2">
              <button
                onClick={() => setShowBatchAssignModal(false)}
                className="px-4 py-2 bg-[#F5EFE6] hover:bg-[#EFE6D8] text-[#5C4A42] rounded-xl text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  onAssignBatch(application.id, selectedBatch);
                  setShowBatchAssignModal(false);
                }}
                className="px-4 py-2 bg-[#3D0A2E] hover:bg-[#5A1644] text-white rounded-xl text-xs font-bold shadow-md"
              >
                Confirm Batch Assignment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
