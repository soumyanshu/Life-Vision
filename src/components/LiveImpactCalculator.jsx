import React, { useState } from 'react';
import { Heart, GraduationCap, Scissors, HeartPulse, Sprout, ShieldCheck, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function LiveImpactCalculator({ onOpenDonate }) {
  const [selectedTier, setSelectedTier] = useState('2500');

  const tiers = [
    {
      amount: '1000',
      label: '₹ 1,000',
      tag: 'Student Study Kit',
      icon: GraduationCap,
      color: 'from-blue-500 to-indigo-600',
      badgeBg: 'bg-blue-100 text-blue-900',
      title: '1 Student Education & Book Kit',
      description: 'Provides 1 underprivileged student with a complete year of notebooks, textbooks, school bag, stationery, and tutoring support.',
      impactStat: '1 Student Sponsored',
      metric: '100% Direct Study Material'
    },
    {
      amount: '2500',
      label: '₹ 2,500',
      tag: 'Women Sewing Toolkit',
      icon: Scissors,
      color: 'from-pink-500 to-[#C52B75]',
      badgeBg: 'bg-pink-100 text-[#C52B75]',
      title: '1 Woman Vocational Sewing Kit',
      description: 'Sponsors a complete professional sewing machine, drafting tools, fabric materials, and pattern cutting set for a rural woman trainee.',
      impactStat: '1 Woman Self-Reliant',
      metric: 'Livelihood Toolset Provided'
    },
    {
      amount: '5000',
      label: '₹ 5,000',
      tag: 'Full Course & Incubation',
      icon: Sparkles,
      color: 'from-purple-500 to-[#6B1D52]',
      badgeBg: 'bg-purple-100 text-[#6B1D52]',
      title: 'Full Vocational Course & Boutique Support',
      description: 'Funds a complete 20-day certified tailoring/beautician course including master instruction, materials, and boutique startup guidance.',
      impactStat: '1 Boutique / Salon Startup',
      metric: 'Certified Skill Trade'
    },
    {
      amount: '10000',
      label: '₹ 10,000',
      tag: 'Rural Medical Camp',
      icon: HeartPulse,
      color: 'from-amber-500 to-amber-700',
      badgeBg: 'bg-amber-100 text-amber-900',
      title: 'Rural Doctor Health Camp (50 Families)',
      description: 'Sponsors a free medical doctor checkup camp, essential medicine distribution, and maternal hygiene kits for 50 rural families.',
      impactStat: '50 Families Screened',
      metric: 'Free Doctor & Medicines'
    },
    {
      amount: '25000',
      label: '₹ 25,000',
      tag: 'Village SHG Livelihood Hub',
      icon: Sprout,
      color: 'from-emerald-500 to-[#006B3C]',
      badgeBg: 'bg-emerald-100 text-emerald-900',
      title: 'Village Self-Help Group Livelihood Center',
      description: 'Completely equips a rural women Self-Help Group (SHG) with 5 sewing machines, raw fabric stock, and commercial order matchmaking.',
      impactStat: '5 Women Livelihoods Created',
      metric: 'Sustainable Village Cluster'
    }
  ];

  const currentData = tiers.find(t => t.amount === selectedTier) || tiers[1];
  const IconComp = currentData.icon;

  return (
    <section className="py-16 bg-gradient-to-b from-[#FFF7F6] via-white to-[#FFF7F6] border-b border-pink-100/80 font-sans relative overflow-hidden">
      
      {/* Background Subtle ambient lighting glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-200/30 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-pink-100/80 text-[#C52B75] text-xs font-black px-4 py-1.5 rounded-full border border-pink-200 backdrop-blur-md shadow-2xs">
            <Sparkles className="w-4 h-4 text-[#C52B75] animate-spin-slow" />
            <span>Interactive Live Impact Calculator</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight text-[#6B1D52]">
            See What Your Donation Accomplishes
          </h2>

          <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed max-w-2xl mx-auto">
            Select a sponsorship amount below to see the exact real-world outcome created for students, women, and rural families.
          </p>
        </div>

        {/* Calculator Main Widget (Glassmorphism Card) */}
        <div className="bg-white/90 backdrop-blur-2xl rounded-3xl p-6 sm:p-10 border border-pink-100 shadow-2xl space-y-10">
          
          {/* Amount Tier Selector Buttons */}
          <div className="space-y-3 text-center">
            <span className="text-xs font-black text-slate-500 uppercase tracking-widest block font-serif">
              Select Sponsorship Tier (₹ INR)
            </span>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 max-w-4xl mx-auto">
              {tiers.map((t) => {
                const isSelected = selectedTier === t.amount;
                return (
                  <button
                    key={t.amount}
                    onClick={() => setSelectedTier(t.amount)}
                    className={`py-3.5 px-4 rounded-2xl font-black text-xs sm:text-sm transition-all duration-300 cursor-pointer flex flex-col items-center justify-center gap-1 border ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#C52B75] via-[#A82260] to-[#6B1D52] text-white border-transparent shadow-lg scale-105 ring-4 ring-pink-200'
                        : 'bg-white/80 hover:bg-pink-50 text-slate-800 border-pink-200/90 shadow-2xs'
                    }`}
                  >
                    <span className="text-sm sm:text-base font-serif">{t.label}</span>
                    <span className={`text-[10px] font-bold tracking-tight ${isSelected ? 'text-pink-200' : 'text-slate-500'}`}>
                      {t.tag}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Outcome Visual Display Card */}
          <div className="bg-gradient-to-br from-[#FFF7F6] via-white to-pink-50/50 rounded-3xl p-6 sm:p-8 border-2 border-pink-200/80 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Icon & Highlight Column (lg:col-span-4) */}
            <div className="lg:col-span-4 space-y-4 text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${currentData.color} text-white flex items-center justify-center shadow-xl border-2 border-white/40 transform hover:scale-105 transition-transform`}>
                <IconComp className="w-10 h-10 filter drop-shadow-md" />
              </div>

              <div className="space-y-1">
                <span className={`text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full border inline-block ${currentData.badgeBg}`}>
                  {currentData.tag}
                </span>
                <div className="text-3xl font-serif font-black text-[#6B1D52] pt-1">
                  {currentData.label}
                </div>
              </div>

              <div className="bg-white px-4 py-2 rounded-2xl border border-pink-200/80 shadow-2xs inline-flex items-center gap-2 text-xs font-bold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-[#C52B75]" />
                <span>{currentData.impactStat}</span>
              </div>
            </div>

            {/* Detailed Written Outcome Column (lg:col-span-8) */}
            <div className="lg:col-span-8 space-y-5">
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-serif font-black text-slate-900 leading-tight">
                  {currentData.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed bg-white p-4 rounded-2xl border border-pink-100 shadow-2xs">
                  {currentData.description}
                </p>
              </div>

              {/* Trust Badges & Action Bar */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-pink-200/60">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>50% Tax Exemption Receipt Issued Instant under 80G</span>
                </div>

                <button
                  onClick={onOpenDonate}
                  className="w-full sm:w-auto bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black py-3.5 px-8 rounded-full shadow-xl hover:shadow-2xl transition-all cursor-pointer flex items-center justify-center gap-2 text-xs sm:text-sm border border-amber-200 shrink-0 active:scale-95 tracking-wider"
                >
                  <span>Fund This Impact Now</span>
                  <Heart className="w-4 h-4 fill-[#C52B75] text-[#C52B75] animate-pulse" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
