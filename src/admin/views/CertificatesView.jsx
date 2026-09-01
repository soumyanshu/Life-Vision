import React, { useState } from 'react';
import StatusBadge from '../components/Common/StatusBadge';
import CertificateModal from './CertificateModal';
import { Award, Eye, Download, ShieldCheck, Plus } from 'lucide-react';

export default function CertificatesView({ certificates, onShowToast }) {
  const [selectedCert, setSelectedCert] = useState(null);

  const handleVerify = (certNo) => {
    onShowToast(`Certificate ${certNo} verified on National Skill Registry!`, 'success');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Certificate Management</h1>
          <p className="text-xs text-slate-500">Issue, preview, verify & download official Life Vision Society certificates</p>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 bg-slate-50 uppercase tracking-wider font-bold">
                <th className="p-4">Certificate No</th>
                <th className="p-4">Student</th>
                <th className="p-4">Course</th>
                <th className="p-4">Batch</th>
                <th className="p-4">Issue Date</th>
                <th className="p-4">Grade</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {certificates.map((cert) => (
                <tr key={cert.certNo} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-mono font-bold text-pink-700">{cert.certNo}</td>
                  <td className="p-4 font-bold text-slate-900">{cert.student}</td>
                  <td className="p-4 text-slate-800">{cert.course}</td>
                  <td className="p-4 font-mono text-slate-600">{cert.batch}</td>
                  <td className="p-4 text-slate-600">{cert.issueDate}</td>
                  <td className="p-4 font-extrabold text-emerald-700">{cert.grade}</td>
                  <td className="p-4">
                    <StatusBadge status={cert.status} />
                  </td>
                  <td className="p-4 text-right space-x-1">
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-bold flex items-center space-x-1 inline-flex cursor-pointer shadow-xs"
                    >
                      <Eye className="w-3.5 h-3.5 text-pink-400" />
                      <span>Preview</span>
                    </button>
                    <button
                      onClick={() => handleVerify(cert.certNo)}
                      className="p-1.5 text-emerald-700 hover:bg-emerald-50 rounded-lg inline-flex cursor-pointer"
                      title="Verify Certificate"
                    >
                      <ShieldCheck className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Official Certificate Preview Modal */}
      {selectedCert && (
        <CertificateModal
          certificate={selectedCert}
          onClose={() => setSelectedCert(null)}
          onShowToast={onShowToast}
        />
      )}
    </div>
  );
}
