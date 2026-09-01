import React, { useState } from 'react';
import StatusBadge from '../components/Common/StatusBadge';
import { FolderArchive, Upload, Download, Eye, Trash2, FileText, CheckCircle2 } from 'lucide-react';

export default function DocumentsView({ documents, onAddDocument, onShowToast }) {
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [docTitle, setDocTitle] = useState('');
  const [category, setCategory] = useState('Annual Reports');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Documents & Compliance</h1>
          <p className="text-xs text-slate-500">Manage annual audit reports, 80G tax certificates, NSDC curricula, and policies</p>
        </div>

        <button
          onClick={() => setShowUploadModal(true)}
          className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-md flex items-center space-x-2 transition-all cursor-pointer"
        >
          <Upload className="w-4 h-4 text-pink-400" />
          <span>[ + Upload Document ]</span>
        </button>
      </div>

      {/* Table */}
      <div className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 bg-slate-50 uppercase tracking-wider font-bold">
                <th className="p-4">Document Title</th>
                <th className="p-4">Category</th>
                <th className="p-4">Size</th>
                <th className="p-4">Upload Date</th>
                <th className="p-4">Access Level</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {documents.map((doc) => (
                <tr key={doc.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-bold text-slate-900">
                    <div className="flex items-center space-x-2.5">
                      <FileText className="w-4 h-4 text-pink-600 shrink-0" />
                      <span>{doc.title}</span>
                    </div>
                  </td>
                  <td className="p-4 text-slate-800 font-semibold">{doc.category}</td>
                  <td className="p-4 text-slate-500">{doc.fileSize}</td>
                  <td className="p-4 text-slate-500">{doc.uploadDate}</td>
                  <td className="p-4 font-semibold text-slate-900">{doc.access}</td>
                  <td className="p-4">
                    <StatusBadge status={doc.status} />
                  </td>
                  <td className="p-4 text-right space-x-1">
                    <button
                      onClick={() => onShowToast(`Downloading ${doc.title}...`, 'success')}
                      className="p-2 text-pink-700 hover:bg-pink-50 rounded-lg cursor-pointer"
                      title="Download"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onShowToast(`Publish status toggled for ${doc.title}`, 'info')}
                      className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer"
                      title="Preview"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl p-6 space-y-4 text-slate-900">
            <h3 className="text-lg font-bold text-slate-900">Upload Compliance Document</h3>
            <div className="space-y-3 text-xs">
              <div>
                <label className="font-semibold text-slate-700">Document Title</label>
                <input
                  type="text"
                  value={docTitle}
                  onChange={(e) => setDocTitle(e.target.value)}
                  placeholder="e.g. Audit Report 2025-26"
                  className="w-full mt-1 p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full mt-1 p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900"
                >
                  <option value="Annual Reports">Annual Reports</option>
                  <option value="Financial Reports">Financial Reports</option>
                  <option value="Audit Reports">Audit Reports</option>
                  <option value="Policies">Policies</option>
                  <option value="Publications">Publications</option>
                  <option value="Brochures">Brochures</option>
                  <option value="Training Documents">Training Documents</option>
                </select>
              </div>
            </div>

            <div className="flex items-center justify-end space-x-3 pt-2">
              <button onClick={() => setShowUploadModal(false)} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl text-xs font-semibold">
                Cancel
              </button>
              <button
                onClick={() => {
                  if (docTitle) {
                    onAddDocument({
                      id: `DOC-OD-0${documents.length + 1}`,
                      title: docTitle,
                      category,
                      fileSize: '2.4 MB',
                      uploadDate: '2026-08-30',
                      access: 'Public',
                      status: 'Published'
                    });
                  }
                  setShowUploadModal(false);
                }}
                className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold shadow-md"
              >
                Upload File
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
