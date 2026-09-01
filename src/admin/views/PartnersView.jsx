import React, { useState } from 'react';
import StatusBadge from '../components/Common/StatusBadge';
import { Plus, Building2, Mail, Phone, MapPin, Handshake } from 'lucide-react';

export default function PartnersView({ partners, onAddPartner }) {
  const [showModal, setShowModal] = useState(false);
  const [orgName, setOrgName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [partnerType, setPartnerType] = useState('CSR Partner');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#1E293B] tracking-tight">Partner Organizations</h1>
          <p className="text-xs text-[#64748B]">Official Sector Skill Councils (SSCs), corporate healthcare partners & NGO alliances</p>
        </div>

        {/* Primary Action Button: Green #16A34A */}
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2.5 bg-[#16A34A] hover:bg-emerald-700 text-white font-extrabold text-xs rounded-xl shadow-md flex items-center space-x-2 transition-all cursor-pointer"
        >
          <Plus className="w-4 h-4 text-white" />
          <span>+ Add Partner</span>
        </button>
      </div>

      {/* Table */}
      <div className="rounded-2xl bg-white border border-[#E2E8F0] shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-[#E2E8F0] text-[#64748B] bg-[#F8FAFC] uppercase tracking-wider font-bold">
                <th className="p-4">Organization</th>
                <th className="p-4">Contact Person & Email</th>
                <th className="p-4">Partner Category</th>
                <th className="p-4">Location</th>
                <th className="p-4">MoU Date</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Impact / Focus Area</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F1F5F9]">
              {partners.length === 0 ? (
                <tr>
                  <td colSpan="7" className="p-12 text-center text-slate-500">
                    <div className="max-w-xs mx-auto space-y-2">
                      <Building2 className="w-10 h-10 text-slate-300 mx-auto" />
                      <p className="font-bold text-slate-700 text-sm">No CSR / Partner Applications Yet</p>
                      <p className="text-xs text-slate-500">Corporate & CSR partner requests submitted via the public site will appear here live.</p>
                    </div>
                  </td>
                </tr>
              ) : (
                partners.map((prt) => (
                  <tr key={prt.id} className="hover:bg-[#F8FAFC] transition-colors">
                    <td className="p-4 font-bold text-[#1E293B]">
                      <div className="flex items-center space-x-3">
                        {prt.logo ? (
                          <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] p-1 flex items-center justify-center shrink-0 overflow-hidden shadow-2xs">
                            <img src={prt.logo} alt={prt.orgName} className="max-h-full max-w-full object-contain" />
                          </div>
                        ) : (
                          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-[#2563EB] flex items-center justify-center shrink-0">
                            <Building2 className="w-5 h-5" />
                          </div>
                        )}
                        <div>
                          <div className="font-bold text-[#1E293B]">{prt.orgName}</div>
                          <div className="text-[10px] text-[#2563EB] font-mono">{prt.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-[#1E293B]">
                      <div className="font-semibold text-[#1E293B]">{prt.contactPerson}</div>
                      <div className="text-[10px] text-[#64748B]">{prt.email}</div>
                    </td>
                    <td className="p-4">
                      <span className="px-2.5 py-1 bg-purple-50 text-[#7C3AED] border border-purple-200 rounded-full font-bold text-[10px]">
                        {prt.partnerType}
                      </span>
                    </td>
                    <td className="p-4 text-[#64748B]">{prt.location}</td>
                    <td className="p-4 text-[#64748B]">{prt.dateJoined}</td>
                    <td className="p-4">
                      <StatusBadge status={prt.status} />
                    </td>
                    <td className="p-4 text-right font-extrabold text-[#16A34A]">
                      {prt.grantAmount || `${prt.hiredStudents || 50}+ Placements`}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Partner Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#123B5D]/60 backdrop-blur-xs">
          <div className="w-full max-w-md bg-white border border-[#E2E8F0] rounded-2xl p-6 space-y-4 text-[#1E293B]">
            <h3 className="text-lg font-bold text-[#1E293B]">Add New Partner Organization</h3>
            <div className="space-y-3 text-xs">
              <div>
                <label className="font-semibold text-[#64748B]">Organization Name</label>
                <input
                  type="text"
                  value={orgName}
                  onChange={(e) => setOrgName(e.target.value)}
                  placeholder="e.g. Healthcare Sector Skill Council"
                  className="w-full mt-1 p-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-xs text-[#1E293B]"
                />
              </div>
              <div>
                <label className="font-semibold text-[#64748B]">Contact Person</label>
                <input
                  type="text"
                  value={contactPerson}
                  onChange={(e) => setContactPerson(e.target.value)}
                  placeholder="e.g. Dr. K.V. Subbarao"
                  className="w-full mt-1 p-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-xs text-[#1E293B]"
                />
              </div>
              <div>
                <label className="font-semibold text-[#64748B]">Partner Type</label>
                <select
                  value={partnerType}
                  onChange={(e) => setPartnerType(e.target.value)}
                  className="w-full mt-1 p-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-xs text-[#1E293B]"
                >
                  <option value="Sector Skill Council">Sector Skill Council (SSC)</option>
                  <option value="Healthcare Partner">Healthcare Partner</option>
                  <option value="Employment Partner">Employment Partner</option>
                  <option value="CSR Partner">CSR Partner</option>
                  <option value="Training Partner">Training Partner</option>
                </select>
              </div>
            </div>

            <div className="flex items-center justify-end space-x-3 pt-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-slate-100 text-[#64748B] rounded-xl text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  if (orgName) {
                    onAddPartner({
                      id: `PRT-OD-0${partners.length + 1}`,
                      orgName: orgName,
                      contactPerson: contactPerson || 'Authorized Representative',
                      email: 'partner@organization.org',
                      partnerType: partnerType,
                      location: 'Odisha',
                      dateJoined: '2026-08-30',
                      status: 'Active',
                      grantAmount: 'Skill & Placement MoU'
                    });
                  }
                  setShowModal(false);
                }}
                className="px-4 py-2 bg-[#16A34A] hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-md"
              >
                Add Partner
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
