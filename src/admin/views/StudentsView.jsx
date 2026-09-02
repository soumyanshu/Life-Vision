import React, { useState } from 'react';
import StatusBadge from '../components/Common/StatusBadge';
import { 
  Eye, GraduationCap, CheckCircle2, Award, Briefcase, 
  Calendar, Phone, MapPin, X, UserCheck
} from 'lucide-react';

export default function StudentsView({ students }) {
  const [selectedStudent, setSelectedStudent] = useState(null);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Student Management</h1>
          <p className="text-xs text-slate-500">View enrolled trainees, attendance records, assessment results & placements</p>
        </div>
      </div>

      {/* Students Table */}
      <div className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 bg-slate-50 uppercase tracking-wider font-bold">
                <th className="p-4">Student ID</th>
                <th className="p-4">Name</th>
                <th className="p-4">Course</th>
                <th className="p-4">Batch</th>
                <th className="p-4">Training Center</th>
                <th className="p-4">Attendance</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {students.map((stu) => (
                <tr key={stu.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-mono font-bold text-pink-700">{stu.id}</td>
                  <td className="p-4 font-semibold text-slate-900">
                    <div className="flex items-center space-x-3">
                      <img src={stu.photo} alt={stu.name} className="w-9 h-9 rounded-xl object-cover ring-1 ring-slate-200 shrink-0" />
                      <div>
                        <div className="font-bold text-slate-900">{stu.name}</div>
                        <div className="text-[10px] text-slate-500">{stu.phone}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 font-bold text-slate-900">{stu.course}</td>
                  <td className="p-4 font-mono text-slate-700">{stu.batch}</td>
                  <td className="p-4 text-slate-600">{stu.center}</td>
                  <td className="p-4 font-extrabold text-emerald-700">{stu.attendance}</td>
                  <td className="p-4">
                    <StatusBadge status={stu.status} />
                  </td>
                  <td className="p-4 text-right">
                    <button
                      onClick={() => setSelectedStudent(stu)}
                      className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold flex items-center space-x-1.5 ml-auto cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 text-pink-400" />
                      <span>View Profile</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Student Profile Modal */}
      {selectedStudent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="w-full max-w-3xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden space-y-0 text-slate-900">
            
            {/* Header */}
            <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img src={selectedStudent.photo} alt={selectedStudent.name} className="w-14 h-14 rounded-2xl object-cover ring-2 ring-slate-300" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{selectedStudent.name}</h3>
                  <p className="text-xs text-slate-500 font-mono">ID: {selectedStudent.id} • Phone: {selectedStudent.phone}</p>
                </div>
              </div>
              <button onClick={() => setSelectedStudent(null)} className="p-2 text-slate-400 hover:text-slate-900 rounded-xl">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="text-slate-500 font-bold uppercase text-[10px]">Attendance Record</span>
                  <div className="text-xl font-extrabold text-emerald-700">{selectedStudent.attendance}</div>
                  <span className="text-[10px] text-slate-500">Regular Trainee Attendance</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="text-slate-500 font-bold uppercase text-[10px]">Assessment Marks</span>
                  <div className="text-xl font-extrabold text-slate-900">{selectedStudent.assessmentScore}</div>
                  <span className="text-[10px] text-slate-500">Practical & Theory Final Exam</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="text-slate-500 font-bold uppercase text-[10px]">Placement Status</span>
                  <div className="text-xs font-bold text-pink-700 mt-1">{selectedStudent.placementStatus}</div>
                  <span className="text-[10px] text-slate-500">Industry Livelihood Pipeline</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                <h4 className="font-bold text-slate-900 uppercase tracking-wider">Course Information</h4>
                <div className="grid grid-cols-2 gap-2 text-slate-700 pt-1">
                  <div>Course: <span className="font-bold text-slate-900">{selectedStudent.course}</span></div>
                  <div>Batch ID: <span className="font-mono text-slate-900">{selectedStudent.batch}</span></div>
                  <div>Training Center: <span className="font-semibold text-slate-900">{selectedStudent.center}</span></div>
                  <div>Certificate Status: <span className="font-bold text-pink-700">{selectedStudent.certificateStatus}</span></div>
                </div>
              </div>

            </div>

            {/* Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 text-right">
              <button
                onClick={() => setSelectedStudent(null)}
                className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold"
              >
                Close Profile
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
