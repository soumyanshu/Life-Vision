import React, { useState, useEffect } from 'react';
import { Users, GraduationCap, Briefcase, Globe, Heart, HeartPulse } from 'lucide-react';

const CountUpNumber = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const match = value.match(/[\d,]+/);
    if (!match) return;

    const targetNum = parseInt(match[0].replace(/,/g, ''), 10);
    let start = 0;
    const duration = 1800;
    const steps = 45;
    const increment = targetNum / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNum) {
        setDisplayValue(targetNum);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  const suffix = value.replace(/[\d,]+/g, '');
  return (
    <span>
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
};

export default function ImpactStats({ onOpenDonate }) {
  const statsMetrics = [
    { label: 'Women Empowered', value: '5,000+', icon: Users, color: 'text-pink-600 bg-pink-100' },
    { label: 'Trainees Certified', value: '7,500+', icon: GraduationCap, color: 'text-emerald-700 bg-emerald-100' },
    { label: 'Placement & Livelihood Support', value: '85%', icon: Briefcase, color: 'text-blue-700 bg-blue-100' },
    { label: 'Health Camps', value: '150+', icon: HeartPulse, color: 'text-amber-600 bg-amber-100' },
    { label: 'Districts & Clusters Reached', value: '12+', icon: Globe, color: 'text-purple-700 bg-purple-100' }
  ];

  const impactCards = [
    {
      title: 'Women Empowered',
      category: 'Livelihood & Autonomy',
      desc: 'Empowering women with practical skill education, financial autonomy, and leadership confidence to transform their lives and support their families.',
      image: 'image/women Empower.png',
      icon: Users,
      badgeBg: 'bg-pink-100 text-[#C52B75]',
    },
    {
      title: 'Skill Development',
      category: 'Hands-on Learning',
      desc: 'Providing 100% free, market-relevant vocational training in tailoring, personal care, organic agriculture, and community healthcare.',
      image: 'image/skill devlopement.png',
      icon: GraduationCap,
      badgeBg: 'bg-purple-100 text-[#6B1D52]',
    },
    {
      title: 'Placement & Employment',
      category: 'Career Pathways',
      desc: 'Guiding and matching certified trainees with commercial garment houses, boutiques, local salons, and micro-entrepreneurship opportunities.',
      image: 'image/placement.png',
      icon: Briefcase,
      badgeBg: 'bg-emerald-100 text-[#006B3C]',
    },
    {
      title: 'Community Health & Welfare',
      category: 'Social Outreach',
      desc: 'Organizing free health checkup camps, caregiver workshops, hygiene awareness drives, and rural community welfare programs.',
      image: 'image/community health welfare.png',
      icon: Globe,
      badgeBg: 'bg-amber-100 text-amber-700',
    },
  ];

  return (
    <section className="py-14 bg-gradient-to-b from-white via-[#FFF7F6]/80 to-white border-b border-pink-100/60 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* OUR IMPACT SECTION */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center justify-center gap-2 text-[#C52B75]">
              <span className="text-sm font-bold">❖ ❖</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-black tracking-wide text-[#6B1D52]">
                Our Impact
              </h2>
              <span className="text-sm font-bold">❖ ❖</span>
            </div>
            <p className="text-slate-600 text-sm font-medium">
              Creating real, measurable change through vocational skill training, employment placement, and health awareness initiatives.
            </p>
          </div>

          {/* Stats Bar with Auto-Counting Numbers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {statsMetrics.map((stat, idx) => {
              const IconComp = stat.icon;
              return (
                <div key={idx} className="bg-white rounded-3xl p-5 border border-pink-100 shadow-md text-center space-y-2 hover:shadow-lg transition-all transform hover:-translate-y-1">
                  <div className={`w-11 h-11 rounded-2xl ${stat.color} flex items-center justify-center mx-auto shadow-xs border border-pink-100`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-serif font-black text-[#6B1D52]">
                      <CountUpNumber value={stat.value} />
                    </div>
                    <div className="text-xs font-bold text-slate-600 tracking-tight mt-1">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Impact Cards Grid with Images & Descriptions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {impactCards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl border border-pink-100/80 hover:border-pink-300 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Image with overlay */}
                    <div className="h-44 sm:h-48 overflow-hidden relative">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent pointer-events-none" />

                      <div className="absolute top-3 right-3">
                        <div className={`w-8 h-8 rounded-xl ${card.badgeBg} flex items-center justify-center shadow-md`}>
                          <IconComp className="w-4 h-4" />
                        </div>
                      </div>

                      <div className="absolute bottom-3 left-4 right-4">
                        <span className="text-[10px] font-extrabold text-amber-300 tracking-wider bg-black/40 px-2.5 py-0.5 rounded-md backdrop-blur-xs border border-white/10">
                          {card.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 space-y-2">
                      <h3 className="text-sm font-serif font-black text-[#6B1D52] tracking-wide">
                        {card.title}
                      </h3>
                      <p className="text-xs text-slate-600 font-medium leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ROYAL MAGENTA & GOLDEN DONATION CTA BANNER */}
        <div className="bg-gradient-to-r from-[#4A1039] via-[#6B1D52] to-[#8C2366] rounded-3xl p-6 sm:p-8 lg:p-10 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden border border-pink-500/30 ring-1 ring-pink-400/20">

          {/* Background Heart Artwork */}
          <div className="absolute -right-8 -bottom-8 opacity-15 pointer-events-none">
            <Heart className="w-64 h-64 fill-white text-white" />
          </div>

          {/* High Contrast Content */}
          <div className="space-y-3 max-w-3xl text-center lg:text-left z-10 overflow-hidden">
            {/* SINGLE LINE HEADLINE */}
            <h3 className="text-base sm:text-xl lg:text-[26px] xl:text-[30px] font-serif font-black tracking-tight text-white leading-tight whitespace-nowrap drop-shadow-md">
              Support Women. Create Opportunities.
            </h3>

            <p className="text-xs sm:text-sm lg:text-[15px] text-pink-100 font-medium leading-relaxed drop-shadow-xs">
              Your support can help women gain skills, build confidence and move toward greater financial independence.
            </p>

            <p className="text-xs sm:text-sm text-amber-300 font-bold tracking-wide pt-1 drop-shadow-xs flex items-center justify-center lg:justify-start gap-2">
              <span className="text-amber-400">❖</span>
              <span>Together, we can create opportunities and build stronger communities.</span>
              <span className="text-amber-400">❖</span>
            </p>
          </div>

          {/* Golden Action Button */}
          <button
            onClick={onOpenDonate}
            className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black h-12 sm:h-14 px-7 sm:px-9 rounded-full shadow-2xl hover:shadow-amber-400/30 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer shrink-0 active:scale-95 text-xs sm:text-sm lg:text-base z-10 border border-amber-200 tracking-wider hover:scale-105"
          >
            <span>Donate Now</span>
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-[#C52B75] text-[#C52B75] animate-pulse" />
          </button>
        </div>

      </div>
    </section>
  );
}
