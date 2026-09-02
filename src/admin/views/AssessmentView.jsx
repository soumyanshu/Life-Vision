import React, { useState } from 'react';
import StatusBadge from '../components/Common/StatusBadge';
import { Award, Edit, Save, CheckCircle2 } from 'lucide-react';

export default function AssessmentView({ onShowToast }) {
  const [assessments, setAssessments] = useState([
    {
      id: 'ASM-101',
      student: 'Sunita Sahu',
      course: 'Tailoring & Stitching',
      batch: 'BATCH-2026-T1',
      theoryMarks: 46,
      practicalMarks: 48,
      total: 94,
      percentage: '94%',
      result: 'Pass',
      remarks: 'Top scorer in boutique garment drafting'
    },
    {
      id: 'ASM-102',
      student: 'Priya Ranjita Das',
      course: 'Beautician & Wellness',
      batch: 'BATCH-2026-B1',
      theoryMarks: 48,
      practicalMarks: 48,
      total: 96,
      percentage: '96%',
      result: 'Pass',
      remarks: 'Excellent bridal makeup & styling practicals'
    },
    {
      id: 'ASM-103',
      student: 'Minati Nayak',
      course: 'Tailoring & Stitching',
      batch: 'BATCH-2026-T2',
      theoryMarks: 42,
      practicalMarks: 46,
      total: 88,
      percentage: '88%',
      result: 'Pass',
      remarks: 'Mastered commercial sewing machine operation'
    },
    {
      id: 'ASM-104',
      student: 'Kalyani Swain',
      course: 'Healthcare & Caregiving',
      batch: 'BATCH-2026-H1',
      theoryMarks: 0,
      practicalMarks: 0,
      total: 0,
      percentage: '0%',
      result: 'Pending',
      remarks: 'Exam scheduled for Sept 15'
    }
  ]);

  const [editingId, setEditingId] = useState(null);
  const [editTheory, setEditTheory] = useState(0);
  const [editPractical, setEditPractical] = useState(0);

  const startEdit = (item) => {
    setEditingId(item.id);
    setEditTheory(item.theoryMarks);
    setEditPractical(item.practicalMarks);
  };

  const saveEdit = (id) => {
    const total = Number(editTheory) + Number(editPractical);
    const result = total >= 50 ? 'Pass' : 'Fail';

    setAssessments(prev => prev.map(a => {
      if (a.id === id) {
        return {
          ...a,
          theoryMarks: Number(editTheory),
          practicalMarks: Number(editPractical),
          total,
          percentage: `${total}%`,
          result
        };
      }
      return a;
    }));

    setEditingId(null);
    onShowToast('Assessment marks updated successfully!', 'success');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Student Assessments</h1>
          <p className="text-xs text-slate-500">Record theory & practical exam marks for certification eligibility</p>
        </div>
      </div>

      {/* Assessment Table */}
      <div className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 bg-slate-50 uppercase tracking-wider font-bold">
                <th className="p-4">Student</th>
                <th className="p-4">Course & Batch</th>
                <th className="p-4 text-center">Theory (/50)</th>
                <th className="p-4 text-center">Practical (/50)</th>
                <th className="p-4 text-center">Total (/100)</th>
                <th className="p-4 text-center">Percentage</th>
                <th className="p-4">Result</th>
                <th className="p-4">Remarks</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {assessments.map((asm) => {
                const isEditing = editingId === asm.id;
                return (
                  <tr key={asm.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 font-bold text-slate-900">{asm.student}</td>
                    <td className="p-4 text-slate-700">
                      <div className="font-bold text-slate-900">{asm.course}</div>
                      <div className="text-[10px] font-mono text-slate-500">{asm.batch}</div>
                    </td>

                    <td className="p-4 text-center font-bold text-slate-900">
                      {isEditing ? (
                        <input
                          type="number"
                          max={50}
                          min={0}
                          value={editTheory}
                          onChange={(e) => setEditTheory(e.target.value)}
                          className="w-16 p-1 bg-slate-50 border border-slate-300 rounded text-center text-xs text-slate-900 font-bold"
                        />
                      ) : (
                        asm.theoryMarks
                      )}
                    </td>

                    <td className="p-4 text-center font-bold text-slate-900">
                      {isEditing ? (
                        <input
                          type="number"
                          max={50}
                          min={0}
                          value={editPractical}
                          onChange={(e) => setEditPractical(e.target.value)}
                          className="w-16 p-1 bg-slate-50 border border-slate-300 rounded text-center text-xs text-slate-900 font-bold"
                        />
                      ) : (
                        asm.practicalMarks
                      )}
                    </td>

                    <td className="p-4 text-center font-extrabold text-pink-700">{asm.total}</td>
                    <td className="p-4 text-center font-bold text-emerald-700">{asm.percentage}</td>
                    <td className="p-4">
                      <StatusBadge status={asm.result} />
                    </td>
                    <td className="p-4 text-slate-600 text-[11px] font-medium">{asm.remarks}</td>
                    <td className="p-4 text-right">
                      {isEditing ? (
                        <button
                          onClick={() => saveEdit(asm.id)}
                          className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg text-xs flex items-center space-x-1 ml-auto cursor-pointer"
                        >
                          <Save className="w-3.5 h-3.5" />
                          <span>Save</span>
                        </button>
                      ) : (
                        <button
                          onClick={() => startEdit(asm)}
                          className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg cursor-pointer"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
