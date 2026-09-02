import React, { useState } from 'react';
import { BarChart3, TrendingUp, PieChart, Users, Award, Heart } from 'lucide-react';

export default function DashboardCharts() {
  // Exact User Specification for Training Program Accents
  const programData = [
    { name: 'Tailoring & Stitching', count: 420, color: '#16A34A' }, // Green
    { name: 'Beautician & Wellness', count: 310, color: '#7C3AED' }, // Pink/Purple
    { name: 'Agriculture & Farming', count: 240, color: '#16A34A' }, // Green
    { name: 'Healthcare & Caregiving', count: 360, color: '#2563EB' }, // Blue
    { name: 'Food & Beverages', count: 150, color: '#F97316' },     // Orange
    { name: 'Tourism & Hospitality', count: 180, color: '#4F46E5' } // Indigo
  ];
  const maxProgramCount = Math.max(...programData.map(d => d.count));

  const monthlyData = [
    { month: 'Jan', count: 180 },
    { month: 'Feb', count: 220 },
    { month: 'Mar', count: 290 },
    { month: 'Apr', count: 310 },
    { month: 'May', count: 420 },
    { month: 'Jun', count: 510 },
    { month: 'Jul', count: 480 },
    { month: 'Aug', count: 640 }
  ];
  const maxMonthly = 700;

  const participantData = [
    { category: 'Women (Rural & Urban)', percentage: 68, color: '#16A34A', count: '5,000+' },
    { category: 'Youth (Age 18-25)', percentage: 24, color: '#2563EB', count: '1,800+' },
    { category: 'Farmers & Agri-Youth', percentage: 8, color: '#F59E0B', count: '700+' }
  ];

  const completionData = [
    { program: 'Tailoring', total: 420, completed: 395, rate: '94%' },
    { program: 'Beautician', total: 310, completed: 298, rate: '96%' },
    { program: 'Agriculture', total: 240, completed: 220, rate: '91.6%' },
    { program: 'Healthcare', total: 360, completed: 342, rate: '95%' },
    { program: 'Food & Bev', total: 150, completed: 138, rate: '92%' }
  ];

  const placementData = [
    { type: 'Employed (Industry)', count: 620, color: '#16A34A', percent: '52%' },
    { type: 'Self-Employed (Boutique/Farm)', count: 430, color: '#2563EB', percent: '36%' },
    { type: 'Seeking / Higher Ed', count: 140, color: '#F59E0B', percent: '12%' }
  ];

  return (
    <div className="space-y-6">
      {/* Row 1: Applications by Program & Monthly Growth */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Chart 1: Applications by Program */}
        <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-xl bg-blue-50 border border-blue-200 text-[#2563EB]">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1E293B]">Applications by Training Program</h3>
                <p className="text-[11px] text-[#64748B]">Distribution across 6 LVS Core Courses</p>
              </div>
            </div>
            <span className="text-xs font-bold text-[#16A34A] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              Total 1,660 Trainees
            </span>
          </div>

          <div className="space-y-3.5 pt-2">
            {programData.map((item) => {
              const widthPct = Math.round((item.count / maxProgramCount) * 100);
              return (
                <div key={item.name} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#1E293B]">{item.name}</span>
                    <span className="font-bold text-[#1E293B]">{item.count} applicants</span>
                  </div>
                  <div className="h-3 w-full bg-[#F8FAFC] rounded-full overflow-hidden p-0.5 border border-[#E2E8F0]">
                    <div 
                      className="h-full rounded-full transition-all duration-700" 
                      style={{ width: `${widthPct}%`, backgroundColor: item.color }} 
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Chart 2: Monthly Applications Growth */}
        <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-200 text-[#16A34A]">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1E293B]">Monthly Application Growth</h3>
                <p className="text-[11px] text-[#64748B]">Application volume over past 8 months</p>
              </div>
            </div>
            <span className="text-xs font-bold text-[#16A34A] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              +35% Growth Rate
            </span>
          </div>

          <div className="h-56 flex items-end justify-between gap-2 pt-6 px-2">
            {monthlyData.map((item) => {
              const heightPct = Math.round((item.count / maxMonthly) * 100);
              return (
                <div key={item.month} className="flex-1 flex flex-col items-center gap-2 group h-full justify-end">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-bold text-white bg-[#123B5D] px-1.5 py-0.5 rounded shadow-xs">
                    {item.count}
                  </div>
                  <div className="w-full bg-[#F8FAFC] rounded-t-xl p-0.5 h-full flex items-end border border-[#E2E8F0]">
                    <div 
                      className="w-full rounded-t-lg bg-[#2563EB] group-hover:bg-[#16A34A] transition-all duration-500"
                      style={{ height: `${heightPct}%` }}
                    />
                  </div>
                  <span className="text-[11px] font-semibold text-[#64748B]">{item.month}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Row 2: Demographic, Completion & Outcomes */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Chart 3: Demographic */}
        <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-5">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-purple-50 border border-purple-200 text-[#7C3AED]">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1E293B]">Demographic Breakdown</h3>
              <p className="text-[11px] text-[#64748B]">Women & Youth Enrollment</p>
            </div>
          </div>

          <div className="space-y-4 pt-2">
            {participantData.map((p) => (
              <div key={p.category} className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#1E293B]">{p.category}</span>
                  <span className="font-extrabold text-[#1E293B]">{p.percentage}% ({p.count})</span>
                </div>
                <div className="h-2.5 w-full bg-slate-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-500" 
                    style={{ width: `${p.percentage}%`, backgroundColor: p.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chart 4: Training Completion */}
        <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-5">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-200 text-[#16A34A]">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1E293B]">Training Completion Rates</h3>
              <p className="text-[11px] text-[#64748B]">Graduation rate per program</p>
            </div>
          </div>

          <div className="divide-y divide-[#E2E8F0]">
            {completionData.map((c) => (
              <div key={c.program} className="py-2.5 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-[#1E293B]">{c.program}</div>
                  <div className="text-[10px] text-[#64748B]">{c.completed} / {c.total} Graduated</div>
                </div>
                <span className="font-extrabold text-[#16A34A] bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                  {c.rate}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Chart 5: Placement Outcomes */}
        <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-5">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-amber-50 border border-amber-200 text-[#F59E0B]">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1E293B]">Livelihood Outcomes</h3>
              <p className="text-[11px] text-[#64748B]">Employment vs Micro-Boutique</p>
            </div>
          </div>

          <div className="space-y-4 pt-2">
            {placementData.map((pl) => (
              <div key={pl.type} className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#1E293B]">{pl.type}</span>
                  <span className="font-extrabold text-[#1E293B]">{pl.percent} ({pl.count})</span>
                </div>
                <div className="h-2.5 w-full bg-slate-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: pl.percent, backgroundColor: pl.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
