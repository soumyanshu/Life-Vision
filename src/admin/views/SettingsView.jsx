import React, { useState } from 'react';
import { User, Lock, Bell, Settings as SettingsIcon, Building, Save, CheckCircle2 } from 'lucide-react';

export default function SettingsView({ onShowToast }) {
  const [activeTab, setActiveTab] = useState('profile');
  
  const [name, setName] = useState('Dr. Sunita Sharma');
  const [email, setEmail] = useState('admin@lifevisionsociety.org');
  const [phone, setPhone] = useState('+91 98610 00001');
  const [orgName, setOrgName] = useState('Life Vision Society NGO');
  const [regNo, setRegNo] = useState('LVS/NGO/2018/8891');
  const [taxId, setTaxId] = useState('80G / 12A Certified');

  const handleSave = (e) => {
    e.preventDefault();
    onShowToast('Admin settings saved successfully!', 'success');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Admin System Settings</h1>
          <p className="text-xs text-slate-500">Configure profile details, security, notification alerts, and NGO credentials</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-3">
        <button
          onClick={() => setActiveTab('profile')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center space-x-2 ${
            activeTab === 'profile' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100 bg-white border border-slate-200'
          }`}
        >
          <User className="w-4 h-4 text-pink-400" />
          <span>Profile Settings</span>
        </button>

        <button
          onClick={() => setActiveTab('security')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center space-x-2 ${
            activeTab === 'security' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100 bg-white border border-slate-200'
          }`}
        >
          <Lock className="w-4 h-4 text-slate-400" />
          <span>Password & Security</span>
        </button>

        <button
          onClick={() => setActiveTab('notifications')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center space-x-2 ${
            activeTab === 'notifications' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100 bg-white border border-slate-200'
          }`}
        >
          <Bell className="w-4 h-4 text-slate-400" />
          <span>Notifications</span>
        </button>

        <button
          onClick={() => setActiveTab('organization')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center space-x-2 ${
            activeTab === 'organization' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100 bg-white border border-slate-200'
          }`}
        >
          <Building className="w-4 h-4 text-slate-400" />
          <span>Organization Information</span>
        </button>
      </div>

      {/* Profile Tab */}
      {activeTab === 'profile' && (
        <form onSubmit={handleSave} className="p-6 rounded-2xl bg-white border border-slate-200 space-y-5 max-w-2xl shadow-sm text-slate-900">
          <h3 className="text-base font-bold text-slate-900">Administrator Profile</h3>

          <div className="space-y-4 text-xs">
            <div>
              <label className="font-semibold text-slate-700">Admin Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-1.5 p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900"
              />
            </div>

            <div>
              <label className="font-semibold text-slate-700">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1.5 p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900"
              />
            </div>

            <div>
              <label className="font-semibold text-slate-700">Contact Number</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full mt-1.5 p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900"
              />
            </div>
          </div>

          <button
            type="submit"
            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold shadow-md flex items-center space-x-2 cursor-pointer"
          >
            <Save className="w-4 h-4 text-pink-400" />
            <span>Save Profile Settings</span>
          </button>
        </form>
      )}

      {/* Security Tab */}
      {activeTab === 'security' && (
        <form onSubmit={handleSave} className="p-6 rounded-2xl bg-white border border-slate-200 space-y-5 max-w-2xl shadow-sm text-slate-900">
          <h3 className="text-base font-bold text-slate-900">Change Password</h3>

          <div className="space-y-4 text-xs">
            <div>
              <label className="font-semibold text-slate-700">Current Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full mt-1.5 p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900"
              />
            </div>

            <div>
              <label className="font-semibold text-slate-700">New Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full mt-1.5 p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900"
              />
            </div>
          </div>

          <button
            type="submit"
            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold shadow-md cursor-pointer"
          >
            Update Password
          </button>
        </form>
      )}

      {/* Organization Info Tab */}
      {activeTab === 'organization' && (
        <form onSubmit={handleSave} className="p-6 rounded-2xl bg-white border border-slate-200 space-y-5 max-w-2xl shadow-sm text-slate-900">
          <h3 className="text-base font-bold text-slate-900">NGO Legal & Registration Info</h3>

          <div className="space-y-4 text-xs">
            <div>
              <label className="font-semibold text-slate-700">Organization Legal Name</label>
              <input
                type="text"
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
                className="w-full mt-1.5 p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900"
              />
            </div>

            <div>
              <label className="font-semibold text-slate-700">Society Registration Number</label>
              <input
                type="text"
                value={regNo}
                onChange={(e) => setRegNo(e.target.value)}
                className="w-full mt-1.5 p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900"
              />
            </div>

            <div>
              <label className="font-semibold text-slate-700">Tax Exemption Status</label>
              <input
                type="text"
                value={taxId}
                onChange={(e) => setTaxId(e.target.value)}
                className="w-full mt-1.5 p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900"
              />
            </div>
          </div>

          <button
            type="submit"
            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold shadow-md cursor-pointer"
          >
            Save Organization Details
          </button>
        </form>
      )}
    </div>
  );
}
