import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, MessageCircle, ShieldCheck, Lock } from 'lucide-react';

export default function Footer({ setActiveSection }) {
  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#4A1039] text-white font-sans">
      
      {/* Top Multi-Color Brand Line */}
      <div className="h-1 w-full bg-gradient-to-r from-[#F472B6] via-[#EC4899] to-[#F59E0B]" />

      {/* Main Footer Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
        
        {/* 4-Column Balanced Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Pure Logo + About */}
          <div className="space-y-3">
            <div className="inline-block">
              <img 
                src="/image/logo.png" 
                alt="Life Vision Society Logo" 
                className="h-20 sm:h-28 lg:h-32 w-auto object-contain filter drop-shadow-md" 
              />
            </div>

            <p className="text-xs text-pink-100/90 leading-relaxed font-normal pt-1">
              We believe every woman has a dream. Our mission is to provide the support, resources and opportunities they need to lead confident, independent and fulfilling lives, while offering vocational skill training open to both women and men.
            </p>
          </div>

          {/* Column 2: Contact Us & Legal Details */}
          <div className="space-y-4">
            <div className="space-y-3">
              <h4 className="text-sm font-serif font-black tracking-wider text-white pb-1 border-b border-pink-800/80 inline-block">
                Contact Us
              </h4>
              <ul className="space-y-2.5 text-xs text-pink-100 font-medium">
                <li className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-[#F472B6] shrink-0 mt-0.5" />
                  <a href="tel:+919416362914" className="hover:text-white transition-colors">+91 9416362914</a>
                </li>
                <li className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-[#F472B6] shrink-0 mt-0.5" />
                  <a href="mailto:support.lifevision@gmail.com" className="hover:text-white transition-colors">support.lifevision@gmail.com</a>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#F472B6] shrink-0 mt-0.5" />
                  <span>Unit No. 423, Tower-A, Spez I-Tech Park, Sohna Rd, Sector-49, Gurugram 122018</span>
                </li>
              </ul>
            </div>

            {/* Below Contact Us: Legal Details Section */}
            <div className="space-y-2 pt-3 border-t border-pink-800/80">
              <h4 className="text-xs font-serif font-black tracking-wider text-[#F472B6] flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Legal Details</span>
              </h4>
              <ul className="space-y-2 text-xs text-pink-100 font-medium">
                <li>
                  <span className="font-bold text-pink-200">NITI Aayog Darpan ID: </span>
                  <span className="text-amber-300 font-mono font-semibold">HR/2019/0233651</span>
                </li>
                <li>
                  <span className="font-bold text-pink-200">12A URN: </span>
                  <span className="text-amber-300 font-mono font-semibold">AABAL5246RE20251</span>
                </li>
                <li>
                  <span className="font-bold text-pink-200">80G URN: </span>
                  <span className="text-amber-300 font-mono font-semibold">AABAL5246RE20251</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-serif font-black tracking-wider text-white pb-1 border-b border-pink-800/80 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-pink-100 font-medium">
              <li>
                <button onClick={() => handleNavClick('about')} className="hover:text-white transition-colors cursor-pointer">About Us</button>
              </li>
              <li>
                <button onClick={() => handleNavClick('training')} className="hover:text-white transition-colors cursor-pointer">Training</button>
              </li>
              <li>
                <button onClick={() => handleNavClick('activities')} className="hover:text-white transition-colors cursor-pointer">Our Activities</button>
              </li>
              <li>
                <button onClick={() => handleNavClick('placement')} className="hover:text-white transition-colors cursor-pointer">Placement</button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className="hover:text-white transition-colors cursor-pointer">Contact Us</button>
              </li>
              <li className="pt-2 border-t border-pink-800/60">
                <a 
                  href="/admin" 
                  className="inline-flex items-center gap-1.5 text-amber-300 hover:text-white font-bold bg-pink-900/60 hover:bg-pink-900 px-3 py-1.5 rounded-lg border border-pink-700/60 transition-all cursor-pointer shadow-2xs"
                >
                  <Lock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Admin Login</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Follow Us & Newsletter */}
          <div className="space-y-6">
            
            {/* Follow Us */}
            <div className="space-y-3">
              <h4 className="text-sm font-serif font-black tracking-wider text-white pb-1 border-b border-pink-800/80 inline-block">
                Follow Us
              </h4>
              <div className="flex flex-wrap gap-2.5 pt-1">
                <a href="#facebook" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D53F8C] hover:text-white text-white flex items-center justify-center transition-all duration-200" aria-label="Facebook">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#instagram" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D53F8C] hover:text-white text-white flex items-center justify-center transition-all duration-200" aria-label="Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#youtube" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D53F8C] hover:text-white text-white flex items-center justify-center transition-all duration-200" aria-label="Youtube">
                  <Youtube className="w-4 h-4" />
                </a>
                <a href="#whatsapp" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D53F8C] hover:text-white text-white flex items-center justify-center transition-all duration-200" aria-label="WhatsApp">
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-2">
              <h4 className="text-xs font-serif font-black tracking-wider text-pink-200 uppercase">
                Stay Informed
              </h4>
              <p className="text-[11px] text-pink-100/80 font-medium">
                Subscribe for updates on vocational batches & rural drives.
              </p>
              <div className="flex items-center gap-1.5 pt-1">
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full px-3 py-2 bg-white/10 border border-pink-800/80 rounded-xl text-xs text-white placeholder-pink-200/60 focus:outline-none focus:ring-1 focus:ring-[#F472B6]"
                />
                <button className="bg-gradient-to-r from-[#D53F8C] to-[#C52B75] text-white text-xs font-bold px-3 py-2 rounded-xl hover:opacity-90 transition-all shrink-0 cursor-pointer">
                  Join
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Rights Bar */}
        <div className="mt-10 pt-6 border-t border-pink-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-pink-200 font-medium gap-3">
          <p>© 2026 Life Vision Society. All Rights Reserved.</p>
          <div className="flex items-center space-x-4">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>

    </footer>
  );
}
