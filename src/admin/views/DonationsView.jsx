import React from 'react';
import StatCard from '../components/Common/StatCard';
import StatusBadge from '../components/Common/StatusBadge';
import { Heart, DollarSign, Download, CheckCircle2, Clock } from 'lucide-react';

export default function DonationsView({ donations, onShowToast }) {
  const handleDownloadReceipt = (don) => {
    onShowToast(`Downloaded 80G Tax Exemption Receipt for ${don.donor} (${don.receiptNo})`, 'success');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Donations & 80G Receipts</h1>
          <p className="text-xs text-slate-500">Track online donations, individual giving campaigns & generate 80G tax receipts</p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Raised" value="₹45,00,000" change="+28% YoY" isPositive={true} icon={Heart} color="pink" />
        <StatCard title="This Month" value="₹3,85,000" change="+14% Growth" isPositive={true} icon={DollarSign} color="amber" />
        <StatCard title="Successful Payments" value="98.2%" change="240 Transactions" isPositive={true} icon={CheckCircle2} color="emerald" />
        <StatCard title="Pending Verification" value="₹10,000" change="1 Transaction" isPositive={false} icon={Clock} color="purple" />
      </div>

      {/* Table */}
      <div className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 bg-slate-50 uppercase tracking-wider font-bold">
                <th className="p-4">Donation ID</th>
                <th className="p-4">Donor Name</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Campaign</th>
                <th className="p-4">Payment Status</th>
                <th className="p-4">Date</th>
                <th className="p-4 text-right">80G Receipt</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {donations.length === 0 ? (
                <tr>
                  <td colSpan="7" className="p-12 text-center text-slate-500">
                    <div className="max-w-xs mx-auto space-y-2">
                      <Heart className="w-10 h-10 text-slate-300 mx-auto" />
                      <p className="font-bold text-slate-700 text-sm">No Donations Recorded Yet</p>
                      <p className="text-xs text-slate-500">Real donations submitted via the public website form will appear here live with 80G receipt generation.</p>
                    </div>
                  </td>
                </tr>
              ) : (
                donations.map((don) => (
                  <tr key={don.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 font-mono font-bold text-pink-700">{don.id}</td>
                    <td className="p-4 font-bold text-slate-900">{don.donor}</td>
                    <td className="p-4 font-extrabold text-emerald-800 text-sm">{don.amount}</td>
                    <td className="p-4 text-slate-700 max-w-xs">{don.campaign}</td>
                    <td className="p-4">
                      <StatusBadge status={don.status} />
                    </td>
                    <td className="p-4 text-slate-500">{don.date}</td>
                    <td className="p-4 text-right">
                      <button
                        onClick={() => handleDownloadReceipt(don)}
                        className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-bold flex items-center space-x-1.5 ml-auto cursor-pointer shadow-xs"
                      >
                        <Download className="w-3.5 h-3.5 text-pink-400" />
                        <span>{don.receiptNo !== 'N/A' ? 'Download 80G' : 'Pending'}</span>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
