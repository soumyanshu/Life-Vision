import React from 'react';

export default function TopHeader() {
  return (
    <header className="relative bg-gradient-to-r from-[#06203D] via-[#006B3C] to-[#056839] text-white overflow-hidden shadow-lg border-b border-emerald-900/40">
      
      {/* Top Multi-Color Brand Accent Strip */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#F59E0B] via-[#E51B2A] to-[#0756A5]" />

      {/* Glowing Vector Wave Accents in Header Background */}
      <div className="absolute top-0 right-0 pointer-events-none z-0 opacity-30 hidden sm:block">
        <svg width="500" height="120" viewBox="0 0 500 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0C120 75 300 95 500 35V0H0Z" fill="#F59E0B"/>
          <path d="M120 0C250 85 380 110 500 60V0H120Z" fill="#E51B2A"/>
          <path d="M220 0C320 90 420 115 500 80V0H220Z" fill="#0756A5"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto py-3.5 px-4 sm:px-6 lg:px-8 flex items-center justify-between relative z-10">
        
        {/* Logo Glass Container + Tagline aligned under 'L' */}
        <div className="flex flex-col items-start">
          <div className="bg-white/15 backdrop-blur-md p-1.5 px-2.5 rounded-2xl border border-white/25 shadow-md">
            <img 
              src="/image/logo.png" 
              alt="Life Vision Society Logo" 
              className="h-16 sm:h-20 lg:h-24 object-contain filter drop-shadow-lg"
            />
          </div>
          
          <div className="pl-[56px] sm:pl-[64px] mt-0.5">
            <p className="text-xs sm:text-[13.5px] font-black text-[#F59E0B] tracking-wider whitespace-nowrap drop-shadow-md">
              Empowering Women, Inspiring Change
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Fluid Multi-Layer Vector Wave Divider */}
      <div className="w-full overflow-hidden leading-none z-10 relative -mb-1">
        <svg className="relative block w-full h-3.5 sm:h-5" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,40 L1200,120 L0,120 Z" fill="#E51B2A" opacity="0.3"></path>
          <path d="M0,0 C200,60 450,10 700,50 C950,90 1100,20 1200,60 L1200,120 L0,120 Z" fill="#056839"></path>
        </svg>
      </div>
    </header>
  );
}
