import React from 'react';
import { ShieldCheck, BookOpen, Handshake, Building2, Download, CheckCircle2, Heart } from 'lucide-react';

export default function TransparencyChartSection({ onOpenDonate }) {
  const breakdown = [
    {
      percentage: '88%',
      label: 'Direct Beneficiary Welfare & Field Toolkits',
      description: 'Funding sewing machines, beautician kits, student scholarships, books, and free medical camp supplies.',
      barColor: 'bg-gradient-to-r from-[#C52B75] to-[#6B1D52]',
      bgColor: 'bg-pink-50 border-pink-200'
    },
    {
      percentage: '7%',
      label: 'Grassroots Operations & Field Staff',
      description: 'Supporting village-level field mobilization officers, master skill trainers, and camp logistics.',
      barColor: 'bg-gradient-to-r from-purple-600 to-indigo-700',
      bgColor: 'bg-purple-50 border-purple-200'
    },
    {
      percentage: '5%',
      label: 'Community Outreach & Emergency Relief',
      description: 'Conducting rural awareness drives, emergency medical relief, and 80G compliance reporting.',
      barColor: 'bg-gradient-to-r from-amber-500 to-amber-700',
      bgColor: 'bg-amber-50 border-amber-200'
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-pink-100/80 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-pink-50 text-[#C52B75] text-xs font-black px-4 py-1.5 rounded-full border border-pink-100 font-serif">
            <ShieldCheck className="w-4 h-4 text-[#C52B75]" />
            <span>Financial Auditability & Governance</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight text-[#6B1D52]">
            100% Transparent Fund Utilization
          </h2>

          <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed max-w-2xl mx-auto">
            Every rupee donated to Life Vision Society is accounted for with complete auditability, legal compliance under 80G / 12A status, and maximum field impact.
          </p>
        </div>

        {/* Main Grid: Financial Breakdown (Left) & Legal Registrations (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* LEFT COLUMN: Financial Allocation Progress Bars (lg:col-span-7) */}
          <div className="lg:col-span-7 bg-[#FFF7F6] rounded-3xl p-6 sm:p-8 border border-pink-100 shadow-md space-y-6 flex flex-col justify-between">
            <div className="space-y-2 border-b border-pink-200/60 pb-3">
              <span className="text-2xs font-extrabold text-[#C52B75] uppercase tracking-widest block font-serif">
                Audited Financial Expenditure
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-black text-slate-900">
                Where Your Donation Goes
              </h3>
            </div>

            <div className="space-y-5">
              {breakdown.map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-900">
                    <span className="font-serif">{item.label}</span>
                    <span className="font-serif font-black text-[#6B1D52] text-base">{item.percentage}</span>
                  </div>
                  
                  {/* Progress Bar Container */}
                  <div className="w-full h-3 bg-white rounded-full overflow-hidden border border-pink-200 p-0.5">
                    <div
                      className={`h-full ${item.barColor} rounded-full transition-all duration-1000 shadow-xs`}
                      style={{ width: item.percentage }}
                    />
                  </div>

                  <p className="text-xs text-slate-600 font-medium leading-tight">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-pink-200/60 flex items-center justify-between text-xs font-bold text-slate-600">
              <span>Audited by Certified Chartered Accountants</span>
              <span className="text-[#C52B75]">FY 2025-2026</span>
            </div>
          </div>

          {/* RIGHT COLUMN: Legal Compliance Cards (lg:col-span-5) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#4A1039] via-[#6B1D52] to-[#8C2366] text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 flex flex-col justify-between border border-pink-500/30">
            <div className="space-y-3">
              <span className="text-xs font-black text-pink-200 tracking-wider bg-white/10 px-3.5 py-1 rounded-full border border-white/20 inline-block font-serif">
                Verified NGO Compliance
              </span>
              <h3 className="text-2xl font-serif font-black tracking-tight text-white">
                Legal & Governance Status
              </h3>
              <p className="text-xs sm:text-sm text-pink-100 font-medium leading-relaxed">
                Life Vision Society is fully accredited and compliant with Indian government non-profit regulations.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 bg-white/10 p-3 rounded-2xl border border-white/15 backdrop-blur-xs">
                <ShieldCheck className="w-5 h-5 text-amber-300 shrink-0" />
                <div>
                  <span className="text-xs font-black text-white block">80G 50% Tax Relief Eligible</span>
                  <span className="text-[10px] text-pink-200 font-medium">Instant official tax receipt issued for all Indian donors.</span>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/10 p-3 rounded-2xl border border-white/15 backdrop-blur-xs">
                <BookOpen className="w-5 h-5 text-pink-300 shrink-0" />
                <div>
                  <span className="text-xs font-black text-white block">12A Non-Profit Public Charitable Trust</span>
                  <span className="text-[10px] text-pink-200 font-medium">Registered trust status under Indian Charitable Trust Act.</span>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/10 p-3 rounded-2xl border border-white/15 backdrop-blur-xs">
                <Handshake className="w-5 h-5 text-amber-300 shrink-0" />
                <div>
                  <span className="text-xs font-black text-white block">MCA CSR-1 Registered</span>
                  <span className="text-[10px] text-pink-200 font-medium">Approved for implementing Schedule VII Corporate CSR drives.</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenDonate}
              className="w-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 text-slate-950 font-black py-3.5 px-6 rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2 text-xs sm:text-sm tracking-wider border border-amber-200"
            >
              <span>Support Our NGO Mission</span>
              <Heart className="w-4 h-4 fill-[#C52B75] text-[#C52B75]" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
