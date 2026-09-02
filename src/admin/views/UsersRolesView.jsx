import React, { useState } from 'react';
import StatusBadge from '../components/Common/StatusBadge';
import { Shield, Plus, UserCheck, Edit, Trash2, Key } from 'lucide-react';

export default function UsersRolesView({ users, onAddUser, onShowToast }) {
  const [showModal, setShowModal] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [role, setRole] = useState('Admin');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Admin Users & Access Roles</h1>
          <p className="text-xs text-slate-500">Manage administrator privileges, trainer roles & staff permissions</p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-md flex items-center space-x-2 transition-all cursor-pointer"
        >
          <Plus className="w-4 h-4 text-pink-400" />
          <span>[ + Add Admin User ]</span>
        </button>
      </div>

      {/* Table */}
      <div className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 bg-slate-50 uppercase tracking-wider font-bold">
                <th className="p-4">User ID</th>
                <th className="p-4">Name & Email</th>
                <th className="p-4">Assigned Role</th>
                <th className="p-4">Status</th>
                <th className="p-4">Last Login</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {users.map((usr) => (
                <tr key={usr.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-mono font-bold text-pink-700">{usr.id}</td>
                  <td className="p-4 font-bold text-slate-900">
                    <div>{usr.name}</div>
                    <div className="text-[10px] text-slate-500 font-mono">{usr.email}</div>
                  </td>
                  <td className="p-4">
                    <span className="px-2.5 py-1 bg-purple-50 text-purple-800 border border-purple-200 rounded-full font-extrabold text-[10px]">
                      {usr.role}
                    </span>
                  </td>
                  <td className="p-4">
                    <StatusBadge status={usr.status} />
                  </td>
                  <td className="p-4 text-slate-600">{usr.lastLogin}</td>
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

      {/* Add User Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl p-6 space-y-4 text-slate-900">
            <h3 className="text-lg font-bold text-slate-900">Add New Admin User</h3>
            <div className="space-y-3 text-xs">
              <div>
                <label className="font-semibold text-slate-700">Full Name</label>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="e.g. Minati Nayak"
                  className="w-full mt-1 p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700">Email Address</label>
                <input
                  type="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  placeholder="e.g. minati@lifevisionsociety.org"
                  className="w-full mt-1 p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700">Role & Access Level</label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full mt-1 p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900"
                >
                  <option value="Super Admin">Super Admin</option>
                  <option value="Admin">Admin</option>
                  <option value="Training Manager">Training Manager</option>
                  <option value="Trainer">Trainer</option>
                  <option value="Content Manager">Content Manager</option>
                  <option value="Finance">Finance</option>
                </select>
              </div>
            </div>

            <div className="flex items-center justify-end space-x-3 pt-2">
              <button onClick={() => setShowModal(false)} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl text-xs font-semibold">
                Cancel
              </button>
              <button
                onClick={() => {
                  if (userName && userEmail) {
                    onAddUser({
                      id: `USR-OD-0${users.length + 1}`,
                      name: userName,
                      email: userEmail,
                      role,
                      status: 'Active',
                      lastLogin: 'Never'
                    });
                  }
                  setShowModal(false);
                }}
                className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold shadow-md"
              >
                Save User
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
