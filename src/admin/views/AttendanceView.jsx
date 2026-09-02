import React, { useState } from 'react';
import { Calendar, CheckCircle2, Save, Download, UserCheck } from 'lucide-react';

export default function AttendanceView({ onShowToast }) {
  const [selectedCourse, setSelectedCourse] = useState('Tailoring & Stitching');
  const [selectedBatch, setSelectedBatch] = useState('BATCH-2026-T1');
  const [attendanceDate, setAttendanceDate] = useState('2026-08-30');

  const [studentList, setStudentList] = useState([
    { id: 'LVS-OD-101', name: 'Sunita Sahu', status: 'Present' },
    { id: 'LVS-OD-102', name: 'Priya Ranjita Das', status: 'Present' },
    { id: 'LVS-OD-103', name: 'Minati Nayak', status: 'Leave' },
    { id: 'LVS-OD-104', name: 'Rasmita Behera', status: 'Present' },
    { id: 'LVS-OD-105', name: 'Kalyani Swain', status: 'Present' },
    { id: 'LVS-OD-106', name: 'Kavita Kumari', status: 'Absent' }
  ]);

  const handleStatusChange = (id, newStatus) => {
    setStudentList(prev => prev.map(s => s.id === id ? { ...s, status: newStatus } : s));
  };

  const handleMarkAllPresent = () => {
    setStudentList(prev => prev.map(s => ({ ...s, status: 'Present' })));
    onShowToast('All students marked as Present', 'info');
  };

  const handleSaveAttendance = () => {
    onShowToast(`Attendance saved for ${selectedBatch} on ${attendanceDate}!`, 'success');
  };

  const presentCount = studentList.filter(s => s.status === 'Present').length;
  const attendancePercentage = Math.round((presentCount / studentList.length) * 100);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Daily Trainee Attendance</h1>
          <p className="text-xs text-slate-500">Record and monitor daily attendance across LVS vocational batches</p>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={handleMarkAllPresent}
            className="px-4 py-2.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 rounded-xl text-xs font-bold flex items-center space-x-2 cursor-pointer shadow-xs"
          >
            <UserCheck className="w-4 h-4 text-emerald-600" />
            <span>Mark All Present</span>
          </button>

          <button
            onClick={handleSaveAttendance}
            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-md flex items-center space-x-2 transition-all cursor-pointer"
          >
            <Save className="w-4 h-4 text-pink-400" />
            <span>Save Attendance</span>
          </button>
        </div>
      </div>

      {/* Selectors Bar */}
      <div className="p-5 rounded-2xl bg-white border border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4 shadow-sm">
        <div>
          <label className="text-xs font-semibold text-slate-700">Course</label>
          <select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            className="w-full mt-1 p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none"
          >
            <option value="Tailoring & Stitching">Tailoring & Stitching</option>
            <option value="Beautician & Wellness">Beautician & Wellness</option>
            <option value="Agriculture & Farming">Agriculture & Farming</option>
            <option value="Healthcare & Caregiving">Healthcare & Caregiving</option>
          </select>
        </div>

        <div>
          <label className="text-xs font-semibold text-slate-700">Batch</label>
          <select
            value={selectedBatch}
            onChange={(e) => setSelectedBatch(e.target.value)}
            className="w-full mt-1 p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none"
          >
            <option value="BATCH-2026-T1">BATCH-2026-T1 (Bhubaneswar)</option>
            <option value="BATCH-2026-B1">BATCH-2026-B1 (Cuttack)</option>
            <option value="BATCH-2026-A1">BATCH-2026-A1 (Puri)</option>
          </select>
        </div>

        <div>
          <label className="text-xs font-semibold text-slate-700">Date</label>
          <input
            type="date"
            value={attendanceDate}
            onChange={(e) => setAttendanceDate(e.target.value)}
            className="w-full mt-1 p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none"
          />
        </div>
      </div>

      {/* Stats Bar */}
      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
        <span className="font-semibold text-slate-600">Total Enrolled: <strong className="text-slate-900">{studentList.length}</strong></span>
        <span className="font-bold text-emerald-700">Present: {presentCount}</span>
        <span className="font-bold text-rose-700">Absent: {studentList.filter(s => s.status === 'Absent').length}</span>
        <span className="font-bold text-amber-700">On Leave: {studentList.filter(s => s.status === 'Leave').length}</span>
        <span className="px-3 py-1 rounded-full bg-slate-900 text-white font-extrabold">
          Batch Attendance Rate: {attendancePercentage}%
        </span>
      </div>

      {/* Table */}
      <div className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-slate-200 text-slate-500 bg-slate-50 uppercase tracking-wider font-bold">
              <th className="p-4">Student ID</th>
              <th className="p-4">Trainee Name</th>
              <th className="p-4 text-center">Present</th>
              <th className="p-4 text-center">Absent</th>
              <th className="p-4 text-center">Leave</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {studentList.map((stu) => (
              <tr key={stu.id} className="hover:bg-slate-50/80 transition-colors">
                <td className="p-4 font-mono font-bold text-pink-700">{stu.id}</td>
                <td className="p-4 font-bold text-slate-900">{stu.name}</td>
                
                <td className="p-4 text-center">
                  <button
                    onClick={() => handleStatusChange(stu.id, 'Present')}
                    className={`w-8 h-8 rounded-full font-bold transition-all ${
                      stu.status === 'Present' 
                        ? 'bg-emerald-600 text-white shadow-xs' 
                        : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                    }`}
                  >
                    P
                  </button>
                </td>

                <td className="p-4 text-center">
                  <button
                    onClick={() => handleStatusChange(stu.id, 'Absent')}
                    className={`w-8 h-8 rounded-full font-bold transition-all ${
                      stu.status === 'Absent' 
                        ? 'bg-rose-600 text-white shadow-xs' 
                        : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                    }`}
                  >
                    A
                  </button>
                </td>

                <td className="p-4 text-center">
                  <button
                    onClick={() => handleStatusChange(stu.id, 'Leave')}
                    className={`w-8 h-8 rounded-full font-bold transition-all ${
                      stu.status === 'Leave' 
                        ? 'bg-amber-500 text-white shadow-xs' 
                        : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                    }`}
                  >
                    L
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
