import React from 'react';
import { ArrowRight, Heart, GraduationCap, ShieldCheck } from 'lucide-react';

export default function Hero({ onOpenDonate, onOpenVolunteer, setActiveSection }) {
  return (
    <section id="home" className="relative w-full overflow-hidden p-0 m-0 min-h-[460px] lg:min-h-[520px] flex flex-col justify-between font-sans">
      
      {/* Full-Width Background Photograph Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/image/hero_training.png"
          alt="Women and students at Life Vision Society welfare center"
          className="w-full h-full object-cover object-center lg:object-[75%_center] filter brightness-[1.02]"
        />

        {/* Soft Light Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFF7F6] via-[#FFF7F6]/90 sm:via-[#FFF7F6]/85 lg:via-[#FFF7F6]/70 via-50% lg:via-60% to-transparent z-10" />
        
        {/* Vignette Bottom Blend */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FFF0F5] via-[#FFF0F5]/50 to-transparent z-10" />
      </div>

      {/* Floating Background Leaf */}
      <div className="absolute top-6 left-1/3 opacity-20 pointer-events-none z-10 hidden lg:block">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 20C120 60 160 80 180 100C160 120 120 140 100 180C80 140 40 120 20 100C40 80 80 60 100 20Z" fill="#C52B75" />
        </svg>
      </div>

      {/* Upper-Right Floating Script Annotation */}
      <div className="absolute top-5 right-5 lg:top-8 lg:right-10 text-right transform rotate-3 z-20 pointer-events-none select-none">
        <p className="font-script text-2xl sm:text-3xl lg:text-[38px] font-bold text-[#6B1D52] leading-[0.95] drop-shadow-xs">
          Stronger
        </p>
        <p className="font-script text-2xl sm:text-3xl lg:text-[38px] font-bold text-[#C52B75] leading-[0.95] drop-shadow-xs">
          Women
        </p>
        <p className="font-script text-2xl sm:text-3xl lg:text-[38px] font-bold text-[#6B1D52] leading-[0.95] drop-shadow-xs">
          Brighter
        </p>
        <p className="font-script text-2xl sm:text-3xl lg:text-[38px] font-bold text-[#C52B75] leading-[0.95] flex items-center justify-end gap-1 drop-shadow-xs">
          <span>Futures</span>
          <span className="text-xl sm:text-2xl">♡</span>
        </p>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-12 py-6 lg:py-10">
        <div className="max-w-xl lg:max-w-2xl space-y-5 text-center lg:text-left">
          
          {/* Simple & Meaningful Badge */}
          <div className="inline-flex items-center gap-2 text-[#6B1D52] text-xs lg:text-[13px] font-black tracking-wider bg-pink-100/90 backdrop-blur-xs px-4 py-1.5 rounded-full border border-pink-200/80 shadow-2xs self-center lg:self-start">
            <ShieldCheck className="w-4 h-4 text-[#C52B75]" />
            <span>Registered Non-Profit NGO (80G Tax Exempt)</span>
          </div>

          {/* Main Headline & Subtitle */}
          <div className="space-y-2.5">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] font-serif font-extrabold text-[#2D1236] tracking-tight leading-[1.04]">
              Life Vision Society
            </h1>

            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-[34px] font-serif font-bold text-[#3A1743] leading-[1.16]">
              Empowering <span className="font-script text-3xl sm:text-4xl lg:text-5xl text-[#C52B75] not-italic font-bold inline-block px-1">Women</span>, Supporting Student Education & Families
            </h2>
          </div>

          {/* Clear, Simple Paragraph */}
          <p className="text-slate-800 text-sm sm:text-base lg:text-lg leading-relaxed font-medium max-w-xl mx-auto lg:mx-0 drop-shadow-2xs">
            We offer free skill courses for women, provide study books and scholarships to poor students, and conduct practical healthcare training in rural communities.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
            <button
              onClick={onOpenDonate}
              className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black h-12 px-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 flex items-center gap-2 cursor-pointer active:scale-95 text-xs sm:text-sm border border-amber-200"
            >
              <Heart className="w-4 h-4 fill-[#C52B75] text-[#C52B75] animate-pulse" />
              <span>Donate to Support a Cause</span>
            </button>

            <button
              onClick={() => {
                if (setActiveSection) setActiveSection('training', 'student-education-aid');
              }}
              className="bg-gradient-to-r from-[#4A1039] to-[#6B1D52] hover:opacity-90 text-white font-bold h-12 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 cursor-pointer active:scale-95 text-xs sm:text-sm"
            >
              <GraduationCap className="w-4 h-4 text-amber-300" />
              <span>Student Education & Placement</span>
            </button>

            <button
              onClick={() => {
                if (setActiveSection) setActiveSection('programs', 'women-empowerment');
              }}
              className="bg-white border-2 border-[#C52B75] text-[#C52B75] hover:bg-[#C52B75] hover:text-white font-bold h-12 px-5 rounded-full shadow-2xs hover:shadow-md transition-all duration-200 flex items-center gap-2 cursor-pointer active:scale-95 text-xs sm:text-sm"
            >
              <span>Women Skill Development</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Simple Highlights */}
          <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-bold text-slate-700">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>15,000+ Women & Students Helped</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-pink-500" />
              <span>50% Tax Benefit on Donations (80G)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span>Free Student Scholarships & Placement</span>
            </div>
          </div>

        </div>
      </div>

      {/* SVG Wave Divider */}
      <div className="w-full overflow-hidden leading-none z-20 relative -mb-1 pt-0">
        <svg className="relative block w-full h-12 sm:h-16 lg:h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,40 L1200,120 L0,120 Z" fill="#C52B75" opacity="0.15"></path>
          <path d="M0,25 C200,80 450,20 700,60 C950,100 1100,30 1200,70 L1200,120 L0,120 Z" fill="#6B1D52" opacity="0.1"></path>
          <path d="M0,50 C180,95 400,35 650,75 C900,115 1050,45 1200,85 L1200,120 L0,120 Z" fill="#FFF7F6"></path>
        </svg>
      </div>

    </section>
  );
}
