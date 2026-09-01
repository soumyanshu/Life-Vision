import React, { useState, useEffect } from 'react';
import { Quote, CheckCircle2, Newspaper, Calendar, Image as ImageIcon, ExternalLink, ArrowRight, Clock, MapPin, Tag, Heart, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export default function StoriesPage({ onOpenApply, onOpenDonate }) {
  const [activeTab, setActiveTab] = useState('all');
  const [heroIndex, setHeroIndex] = useState(0);

  const heroImages = [
    '/image/ Ewomenmpower.png',
    '/image/Tailoring_training.png',
    '/image/Beautician.png',
    '/image/hero_training.png',
    '/image/community health welfare.png',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const successStories = [
    {
      name: 'Sunita Sahu',
      location: 'Bhubaneswar, Odisha',
      course: 'Tailoring & Garment Making',
      outcome: 'Boutique Owner & Entrepreneur',
      paragraph: 'Before connecting with Life Vision Society, I was completely dependent on irregular family support and lacked technical skills. Enrolling in the free vocational tailoring program was the turning point of my life. The instructors provided hands-on guidance in garment construction, drafting, and sewing machine operation. Today, I proudly run my own fashion boutique in Saheed Nagar, Bhubaneswar, employing assistant tailors.',
      tag: 'Tailoring & Garment Making',
      image: '/success story/trailoring.jpg'
    },
    {
      name: 'Priya Ranjita Das',
      location: 'Cuttack, Odisha',
      course: 'Beautician & Personal Care',
      outcome: 'Senior Stylist at Premium Salon',
      paragraph: 'Joining the Beautician and Personal Care course at Life Vision Society opened up a career path I had only dreamed of before. The practical workshop covered professional bridal makeup, skincare treatments, and hair styling. The coordinators connected me directly with leading salon employers in Cuttack upon certification.',
      tag: 'Beautician & Personal Care',
      image: '/success story/beauty.jpg'
    },
    {
      name: 'Deepika Kumari',
      location: 'Bhubaneswar, Odisha',
      course: 'Food & Beverage Service Assistant',
      outcome: 'F&B Service Executive at Hotel',
      paragraph: 'Enrolling in the Food & Beverage Service Assistant course equipped me with professional table setup standards, guest etiquette, and restaurant operation protocols. Upon completing the certified course, Life Vision Society helped place me at a leading hotel in Bhubaneswar where I earn a stable livelihood.',
      tag: 'Food & Beverage Assistant',
      image: '/success story/f&b.jpg'
    },
    {
      name: 'Rasmita Behera',
      location: 'Khordha, Odisha',
      course: 'Tailoring & Garment Making',
      outcome: 'Independent Stitching Center Owner',
      paragraph: 'Beyond practical sewing and garment design lessons, Life Vision Society taught us client communication, order management, and machine upkeep. When I completed the tailoring course, the team guided me on setting up my independent stitching center. Today, I take regular bulk orders for school uniforms and festive wear.',
      tag: 'Tailoring & Garment Making',
      image: '/success story/success story.jpg'
    },
    {
      name: 'Manasi Nayak',
      location: 'Puri, Odisha',
      course: 'Housekeeping & Facility Management',
      outcome: 'Hospitality & Housekeeping Supervisor',
      paragraph: 'The comprehensive Housekeeping & Facility Management course taught us industrial cleaning equipment, guest room hygiene standards, and team supervision. Today, I work as a hospitality housekeeping supervisor at a luxury resort in Puri, managing daily maintenance operations.',
      tag: 'Housekeeping Operations',
      image: '/success story/house keeping.jpg'
    },
    {
      name: 'Archana Sahoo',
      location: 'Balasore, Odisha',
      course: 'Beautician & Personal Grooming',
      outcome: 'Independent Salon Owner',
      paragraph: 'The hands-on practical training in skincare, bridal styling, and salon sanitation gave me the exact skills needed to start my own beauty parlor in Balasore. Life Vision Society supported me from classroom practice to opening my shop. I now earn a dignified income and inspire other young girls in my village to get skilled.',
      tag: 'Beautician & Personal Care',
      image: '/success story/betician.jpg'
    }
  ];

  const galleryImages = [
    { src: '/image/Traloring.png', title: 'Tailoring Vocational Training & Stitching Practice', category: 'training' },
    { src: '/image/Traloring1.png', title: 'Garment Sewing & Pattern Cutting Class', category: 'training' },
    { src: '/image/trailoring.jpg', title: 'Industrial Machine Stitching Workshop', category: 'training' },
    { src: '/image/butician-training.jpg', title: 'Beautician Skincare & Makeup Hands-on Session', category: 'training' },
    { src: '/image/butician-training1.jpg', title: 'Bridal Styling & Salon Management Training', category: 'training' },
    { src: '/image/beautician2.png', title: 'Beauty Care & Facial Technique Demonstration', category: 'training' },
    { src: '/image/beautician3.png', title: 'Hair Styling & Personal Hygiene Practical Class', category: 'training' },
    { src: '/image/class room.jpeg', title: 'Interactive Vocational Classroom Learning', category: 'training' },
    { src: '/image/class room1.jpeg', title: 'Trainee Orientation & Batch Discussion', category: 'training' },
    { src: '/image/classroom2.jpeg', title: 'Theory & Skill Building Classroom Session', category: 'training' },
    { src: '/image/seminar.jpeg', title: 'Community Career Seminar & Livelihood Drive', category: 'stories' },
    { src: '/image/Group.jpeg', title: 'Trainees Group Graduation & Celebration', category: 'stories' },
    { src: '/image/agriculture.jpg', title: 'Organic Farming & Agriculture Skill Drive', category: 'training' },
    { src: '/image/agriculture1.png', title: 'Rural Agriculture & Micro-Farmer Workshop', category: 'training' },
    { src: '/image/healthcare.png', title: 'Community Healthcare & Caregiving Class', category: 'health' },
    { src: '/image/food&beverages.jpeg', title: 'Food & Beverage Catering Workshop', category: 'training' },
    { src: '/image/house keeping.jpg', title: 'Hospitality & Housekeeping Practical Training', category: 'training' }
  ];

  const filteredImages = activeTab === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeTab);

  return (
    <div className="bg-[#FFF7F6] min-h-screen py-10 animate-fade-in font-sans space-y-16">

      {/* Page Banner Header (Single Image) */}
      <div id="our-impact" className="scroll-mt-28 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-xl relative overflow-hidden min-h-[380px] lg:min-h-[420px] flex flex-col justify-between border border-pink-900/40">

          {/* Single Static Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/image/sucess story.png"
              alt="Stories & Photo Gallery Hero"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/50 to-transparent z-10 pointer-events-none" />
          </div>

          <div className="max-w-4xl space-y-4 relative z-20">
            <span className="text-xs font-black text-pink-200 tracking-wider bg-white/10 px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-xs font-serif inline-block">
              Community Impact, News & Gallery
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-black tracking-tight leading-tight drop-shadow-md">
              Stories & Photo Gallery
            </h1>
            <p className="text-pink-200 font-bold text-lg sm:text-xl drop-shadow-xs font-serif">
              Real Transformations, Verified Beneficiary Outcomes
            </p>
            <p className="text-xs sm:text-sm lg:text-base text-pink-100/90 leading-relaxed pt-2 font-medium max-w-3xl drop-shadow-xs">
              Explore inspiring success stories of empowered women, latest news coverage, upcoming community events, and photo highlights across Odisha.
            </p>
          </div>

          <div className="relative z-20 pt-6 border-t border-white/20 mt-6 flex items-center justify-between">
            <span className="text-xs font-bold text-pink-200 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Over 5,000+ Verified Women Beneficiaries Reached</span>
            </span>
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* 1. SUCCESS STORIES SECTION */}
        <section id="success-stories" className="scroll-mt-28 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-extrabold text-[#C52B75] tracking-wider bg-pink-50 px-3.5 py-1 rounded-full border border-pink-100 font-serif inline-block">
              Transformation Journeys
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#6B1D52] tracking-wide">
              Success Stories
            </h2>
            <p className="text-slate-600 text-sm font-medium">
              Real stories of participants who transformed their lives through practical skill training and self-reliance.
            </p>
          </div>

          {/* 1 SINGLE CARD CONTAINER STACKED UP TO DOWN WITH COMPACT SPACING */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-pink-100 shadow-2xl space-y-8 sm:space-y-10">
            {successStories.map((story, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx}>
                  <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 lg:gap-10 items-center group`}>

                    {/* Large High-Res Image Box */}
                    <div className="w-full lg:w-5/12 h-64 sm:h-76 lg:h-[340px] rounded-2xl overflow-hidden relative shrink-0 border border-pink-200 shadow-md">
                      <img
                        src={story.image}
                        alt={story.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

                      {/* Badge Overlay */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                        <span className="text-xs font-black text-white bg-[#6B1D52]/90 backdrop-blur-md px-3.5 py-1 rounded-xl border border-white/20 shadow-md">
                          {story.tag}
                        </span>
                        <span className="text-[10px] font-bold text-amber-300 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                          Certified Outcome
                        </span>
                      </div>
                    </div>

                    {/* Story Details & Long Narrative Paragraph */}
                    <div className="w-full lg:w-7/12 space-y-4 text-left flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-black text-[#C52B75] tracking-wider font-serif block mb-0.5">
                          📍 {story.location}
                        </span>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-black text-[#6B1D52]">
                          {story.name}
                        </h3>
                      </div>

                      {/* Program & Outcome Summary Box */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 bg-[#FFF7F6] p-3.5 rounded-2xl border border-pink-100 text-xs font-medium">
                        <div>
                          <span className="text-slate-400 font-normal">Training Program: </span>
                          <span className="font-bold text-slate-800 block sm:inline">{story.course}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 font-normal">Career Outcome: </span>
                          <span className="text-[#006B3C] font-black block sm:inline">{story.outcome}</span>
                        </div>
                      </div>

                      {/* Long Narrative Paragraph About Life Vision Society */}
                      <div className="relative bg-pink-50/60 p-4 sm:p-5 rounded-2xl border-l-4 border-[#C52B75] space-y-1">
                        <Quote className="w-6 h-6 text-pink-300 opacity-60 pointer-events-none" />
                        <p className="text-xs sm:text-sm text-slate-700 font-serif leading-relaxed italic font-medium">
                          "{story.paragraph}"
                        </p>
                      </div>

                      {/* Footer Row with Verified Badge & Apply Button */}
                      <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Certified & Verified Livelihood Outcome</span>
                        </div>

                        <button
                          onClick={onOpenApply}
                          className="bg-gradient-to-r from-[#C52B75] to-[#6B1D52] hover:opacity-95 text-white font-extrabold text-xs px-5 py-2 rounded-full shadow-md transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
                        >
                          <span>Apply For Training</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                    </div>

                  </div>

                  {/* Divider Line between stories inside the card (except last item) */}
                  {idx < successStories.length - 1 && (
                    <div className="border-b border-pink-100/80 pt-6 sm:pt-8" />
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 2. GALLERY SECTION */}
        <section id="gallery" className="scroll-mt-28 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-extrabold text-[#C52B75] tracking-wider bg-pink-50 px-3.5 py-1 rounded-full border border-pink-100 font-serif inline-block">
              Visual Glimpse & Field Moments
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#6B1D52] tracking-wide">
              Photo Gallery
            </h2>
            <p className="text-slate-600 text-sm font-medium">
              Highlights from our practical skill workshops, health checkup camps, and community drives.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'training', label: 'Training Sessions' },
              { id: 'health', label: 'Health Camps' },
              { id: 'stories', label: 'Success Stories' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${activeTab === tab.id
                  ? 'bg-gradient-to-r from-[#C52B75] to-[#6B1D52] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-pink-50 border border-pink-100'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Pure Edge-to-Edge Photo Cards (Zero Text Written) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredImages.map((img, idx) => (
              <div key={idx} className="rounded-3xl overflow-hidden shadow-md border border-pink-100 group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 h-64 sm:h-72 lg:h-80 relative bg-pink-100">
                <img
                  src={img.src}
                  alt="Life Vision Society Field Photo"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </section>

      </div>

    </div>
  );
}
