import React from 'react';
import { UserPlus, GraduationCap, BookOpenCheck, Award, Briefcase, Users2, ArrowRight } from 'lucide-react';

export default function EmploymentJourney({ onOpenApply, setActiveSection }) {
  const handlePlacementRedirect = () => {
    if (setActiveSection) {
      setActiveSection('training', 'available-courses');
    } else {
      onOpenApply();
    }
  };
  const steps = [
    {
      num: '01',
      title: 'Register',
      desc: 'Fill out the simple registration form and begin your training journey.',
      icon: UserPlus,
      color: 'bg-[#C52B75] text-white',
      badgeBg: 'bg-pink-100 text-[#C52B75]',
    },
    {
      num: '02',
      title: 'Join Training',
      desc: 'Attend practical skill training for 15 days or 3 months.',
      icon: GraduationCap,
      color: 'bg-[#6B1D52] text-white',
      badgeBg: 'bg-purple-100 text-[#6B1D52]',
    },
    {
      num: '03',
      title: 'Learn & Practice',
      desc: 'Build practical skills through hands-on learning and regular practice.',
      icon: BookOpenCheck,
      color: 'bg-[#4A1039] text-white',
      badgeBg: 'bg-rose-100 text-[#4A1039]',
    },
    {
      num: '04',
      title: 'Complete Training',
      desc: 'Successfully complete the training and strengthen your confidence and skills.',
      icon: Award,
      color: 'bg-[#C52B75] text-white',
      badgeBg: 'bg-pink-100 text-[#C52B75]',
    },
    {
      num: '05',
      title: 'Employment Opportunity',
      desc: 'Receive guidance and placement support to explore suitable employment opportunities.',
      icon: Briefcase,
      color: 'bg-[#6B1D52] text-white',
      badgeBg: 'bg-purple-100 text-[#6B1D52]',
    },
  ];

  return (
    <section id="placement" className="py-14 bg-white border-b border-pink-100/60 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center justify-center gap-2 text-[#C52B75]">
            <span className="text-sm font-bold">❖ ❖</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-black tracking-wide text-[#6B1D52]">
              Our Training to Employment Journey
            </h2>
            <span className="text-sm font-bold">❖ ❖</span>
          </div>
          <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed max-w-2xl mx-auto">
            From registration to skill development and employment, we guide participants through a simple journey toward better livelihood opportunities.
          </p>
        </div>

        {/* 5 Process Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 items-stretch">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div 
                key={idx} 
                className="bg-[#FFF7F6] rounded-3xl p-6 border border-pink-100/80 shadow-2xs hover:shadow-xl hover:border-pink-300 transition-all flex flex-col justify-between items-center text-center relative group"
              >
                <span className={`text-2xs font-extrabold px-3 py-1 rounded-full tracking-wider mb-4 shadow-2xs ${step.badgeBg}`}>
                  Step {step.num}
                </span>

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 via-[#C52B75] to-[#6B1D52] text-white flex items-center justify-center shadow-lg border border-white/40 shadow-pink-500/25 mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <IconComp className="w-7 h-7 text-white filter drop-shadow-xs" />
                </div>

                <div>
                  <h3 className="text-sm font-serif font-extrabold text-slate-900 tracking-tight mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Placement Support Banner in Rich Mulberry Plum Gradient */}
        <div className="bg-gradient-to-r from-[#4A1039] via-[#6B1D52] to-[#8C2366] rounded-3xl p-6 sm:p-8 lg:p-10 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 border border-pink-900/40">
          
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left max-w-3xl">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-white flex items-center justify-center shrink-0 shadow-lg border border-white/40 shadow-amber-500/30">
              <Users2 className="w-8 h-8 text-white filter drop-shadow-xs" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-serif font-black tracking-wide text-white">
                Placement Support
              </h3>
              
              <p className="text-xs sm:text-sm text-pink-100 leading-relaxed font-semibold">
                We support eligible trained participants with employment opportunities through our employer network and help them take the next step toward a sustainable livelihood.
              </p>

              <p className="text-xs text-pink-200/90 leading-relaxed font-medium bg-white/10 p-3 rounded-2xl border border-white/15 inline-block">
                Employment support is available to eligible trained participants based on skills, opportunities and employer requirements.
              </p>
            </div>
          </div>

          <button
            onClick={handlePlacementRedirect}
            className="bg-gradient-to-r from-[#D53F8C] to-[#C52B75] hover:from-[#C52B75] hover:to-[#A82260] text-white font-bold h-13 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer shrink-0 active:scale-95 text-xs sm:text-sm z-10"
          >
            <span>Explore Training & Placement</span>
            <ArrowRight className="w-4 h-4" />
          </button>

        </div>

      </div>
    </section>
  );
}
