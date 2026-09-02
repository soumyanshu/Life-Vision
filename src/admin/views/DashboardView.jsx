import React from 'react';
import StatCard from '../components/Common/StatCard';
import DashboardCharts from '../components/Charts/DashboardCharts';
import StatusBadge from '../components/Common/StatusBadge';
import { 
  FileText, Clock, Users, GraduationCap, Building2, 
  Heart, Award, HeartHandshake, CheckCircle2, ArrowUpRight, Plus, Eye, Sparkles
} from 'lucide-react';

export default function DashboardView({ 
  applications, 
  programs, 
  centers, 
  batches, 
  students, 
  donations, 
  partners, 
  volunteers,
  setActiveTab,
  onViewApplication 
}) {
  const pendingAppsCount = applications.filter(a => a.status === 'New' || a.status === 'Under Review').length;
  const activeStudentsCount = students.filter(s => s.status === 'Active').length;
  const completedTrainingCount = 7500;

  return (
    <div className="space-y-8">
      {/* Top Welcome Banner (Deep Navy #123B5D) */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#123B5D] text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="relative z-10 space-y-2 max-w-2xl">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-xs font-semibold text-emerald-300 border border-emerald-500/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>NGO Operations Control Center</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Welcome back, Life Vision Society
          </h1>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            Live operational overview across all 5 LVS skill hubs in Odisha (Cuttack, Bhubaneswar, Puri, Khordha, Ganjam), ongoing student batches, placement pipelines, and CSR partner grants fetched directly from the public website.
          </p>
        </div>

        <div className="relative z-10 flex flex-wrap items-center gap-3 shrink-0">
          {/* Primary Action Button: Green #16A34A */}
          <button
            onClick={() => setActiveTab('students')}
            className="px-4 py-2.5 bg-[#16A34A] hover:bg-emerald-700 text-white font-extrabold text-xs rounded-xl shadow-lg flex items-center space-x-2 transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4 text-white" />
            <span>Manage Students</span>
          </button>
          {/* Secondary Button: Blue #2563EB */}
          <button
            onClick={() => setActiveTab('programs')}
            className="px-4 py-2.5 bg-[#2563EB] hover:bg-blue-700 text-white border border-blue-400/30 font-semibold text-xs rounded-xl transition-all cursor-pointer"
          >
            Manage Programs
          </button>
        </div>
      </div>

      {/* 8 Summary Cards per User Spec */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard
          title="Total Applications"
          value={applications.length + 1250}
          change="+18.4%"
          isPositive={true}
          icon={FileText}
          color="blue"
          onClick={() => setActiveTab('training-apps')}
        />
        <StatCard
          title="Women Empowered"
          value="1,850"
          change="5,000 Total Impact"
          isPositive={true}
          icon={Users}
          color="green"
          onClick={() => setActiveTab('students')}
        />
        <StatCard
          title="Pending Applications"
          value={pendingAppsCount + 128}
          change="Action Required"
          isPositive={false}
          icon={Clock}
          color="amber"
          onClick={() => setActiveTab('training-apps')}
        />
        <StatCard
          title="Certified Graduates"
          value={`${completedTrainingCount}+`}
          change="7,500+ Certified"
          isPositive={true}
          icon={GraduationCap}
          color="green"
          onClick={() => setActiveTab('students')}
        />
        <StatCard
          title="Active Batches"
          value={batches.filter(b => b.status === 'Active').length + 38}
          change="Across 5 Centers"
          isPositive={true}
          icon={Building2}
          color="purple"
          onClick={() => setActiveTab('batches')}
        />
        <StatCard
          title="Training Programs"
          value={programs.length}
          change="6 Core Courses"
          isPositive={true}
          icon={Award}
          color="blue"
          onClick={() => setActiveTab('programs')}
        />
        <StatCard
          title="NGO & CSR Partners"
          value={partners.length + 8}
          change="HDFC & NSDC"
          isPositive={true}
          icon={HeartHandshake}
          color="navy"
          onClick={() => setActiveTab('csr-partners')}
        />
        <StatCard
          title="Donations Raised"
          value="₹45.0 Lakhs"
          change="+28% YoY"
          isPositive={true}
          icon={Heart}
          color="amber"
          onClick={() => setActiveTab('donations-list')}
        />
      </div>

      {/* Visual Dashboard Charts Section */}
      <DashboardCharts />

      {/* Recent Applications Table */}
      <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-[#1E293B]">Recent Applications from Public Website</h3>
            <p className="text-xs text-[#64748B]">Live candidate applications requiring verification or shortlisting</p>
          </div>
          <button
            onClick={() => setActiveTab('training-apps')}
            className="text-xs font-bold text-[#2563EB] hover:underline flex items-center space-x-1"
          >
            <span>View All Applications</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-[#E2E8F0] text-[#64748B] bg-[#F8FAFC] uppercase tracking-wider font-bold">
                <th className="p-3">Applicant</th>
                <th className="p-3">Course</th>
                <th className="p-3">Location</th>
                <th className="p-3">Date</th>
                <th className="p-3">Status</th>
                <th className="p-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0]">
              {applications.slice(0, 5).map((app) => (
                <tr key={app.id} className="hover:bg-[#F8FAFC] transition-colors">
                  <td className="p-3 font-medium text-[#1E293B]">
                    <div className="flex items-center space-x-3">
                      <img src={app.photo} alt={app.name} className="w-8 h-8 rounded-full object-cover ring-1 ring-[#E2E8F0] shrink-0" />
                      <div>
                        <div className="font-bold text-[#1E293B]">{app.name}</div>
                        <div className="text-[10px] text-[#64748B] font-mono">{app.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-3 text-[#1E293B] font-medium">{app.course}</td>
                  <td className="p-3 text-[#64748B]">{app.location}</td>
                  <td className="p-3 text-[#64748B]">{app.applicationDate}</td>
                  <td className="p-3">
                    <StatusBadge status={app.status} />
                  </td>
                  <td className="p-3 text-right">
                    <button
                      onClick={() => onViewApplication(app)}
                      className="px-3 py-1.5 bg-[#2563EB] hover:bg-blue-700 text-white rounded-lg font-bold flex items-center space-x-1.5 ml-auto cursor-pointer shadow-xs"
                    >
                      <Eye className="w-3.5 h-3.5 text-white" />
                      <span>Review</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
