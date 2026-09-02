import React, { useState } from 'react';
import { 
  LayoutDashboard, FileText, GraduationCap, Building2, 
  Heart, BookOpen, FolderArchive, Bell, 
  Globe, Users, Settings, LogOut, ChevronDown, ChevronRight, X
} from 'lucide-react';

export default function Sidebar({ 
  activeTab, 
  setActiveTab, 
  isCollapsed, 
  setIsCollapsed,
  mobileOpen,
  setMobileOpen,
  onLogout 
}) {
  const [expandedSections, setExpandedSections] = useState({
    applications: true,
    training: true,
    partners: false,
    donations: false,
    content: false
  });

  const toggleSection = (sectionKey) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionKey]: !prev[sectionKey]
    }));
  };

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    {
      id: 'training',
      label: 'Training',
      icon: GraduationCap,
      hasSubmenu: true,
      subItems: [
        { id: 'programs', label: 'Programs' },
        { id: 'centers', label: 'Training Centers' },
        { id: 'batches', label: 'Batches' },
        { id: 'students', label: 'Students' },
        { id: 'attendance', label: 'Attendance' },
        { id: 'assessments', label: 'Assessments' },
        { id: 'certificates', label: 'Certificates' },
        { id: 'placement', label: 'Placement' }
      ]
    },
    {
      id: 'partners',
      label: 'Partners',
      icon: Building2,
      hasSubmenu: true,
      subItems: [
        { id: 'csr-partners', label: 'CSR Partners' },
        { id: 'training-partners', label: 'Training Partners' },
        { id: 'employment-partners', label: 'Employment Partners' },
        { id: 'community-partners', label: 'Community Partners' }
      ]
    },
    {
      id: 'donations',
      label: 'Donations',
      icon: Heart,
      hasSubmenu: true,
      subItems: [
        { id: 'donations-list', label: 'Donations' },
        { id: 'campaigns', label: 'Campaigns' },
        { id: 'receipts', label: 'Receipts' }
      ]
    },
    {
      id: 'content',
      label: 'Stories & Content',
      icon: BookOpen,
      hasSubmenu: true,
      subItems: [
        { id: 'stories', label: 'Success Stories' },
        { id: 'news-blog', label: 'News & Blog' },
        { id: 'events', label: 'Events' },
        { id: 'gallery', label: 'Gallery' }
      ]
    },
    { id: 'notifications', label: 'Notifications', icon: Bell, badge: 'Live' },
    { id: 'website-cms', label: 'Website CMS', icon: Globe },
    { id: 'users-roles', label: 'Users & Roles', icon: Users },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const handleItemClick = (itemId) => {
    setActiveTab(itemId);
    if (window.innerWidth < 1024) {
      setMobileOpen(false);
    }
  };

  const SidebarContent = (
    <div className="h-full flex flex-col bg-[#123B5D] text-slate-100 select-none shadow-xl relative">
      {/* Top Brand Green Accent Strip */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#16A34A] via-[#2563EB] to-[#F59E0B]" />

      {/* Brand Header */}
      <div className="h-20 flex items-center justify-between px-5 border-b border-slate-700/60 bg-[#0E2F4A]">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleItemClick('dashboard')}>
          <div className="p-1.5 bg-white/10 rounded-xl border border-white/20 shrink-0 shadow-sm">
            <img src="/image/logo.png" alt="LVS Logo" className="h-9 w-auto object-contain" />
          </div>
          {!isCollapsed && (
            <div className="overflow-hidden">
              <h2 className="text-sm font-bold text-white tracking-wide truncate">Life Vision Society</h2>
              <p className="text-[10px] text-emerald-400 font-extrabold tracking-widest uppercase">NGO Admin Portal</p>
            </div>
          )}
        </div>

        <button 
          onClick={() => setMobileOpen(false)}
          className="lg:hidden p-1.5 text-slate-300 hover:text-white rounded-lg"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Scroll Container */}
      <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1 scrollbar-thin scrollbar-thumb-[#0E2F4A]">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isGroupExpanded = expandedSections[item.id];
          const isDirectActive = activeTab === item.id;
          const isChildActive = item.hasSubmenu && item.subItems?.some(sub => sub.id === activeTab);
          const isActive = isDirectActive || isChildActive;

          if (!item.hasSubmenu) {
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isActive 
                    ? 'bg-[#16A34A] text-white shadow-lg font-extrabold shadow-emerald-950/40' 
                    : 'text-slate-200/90 hover:text-white hover:bg-white/10'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-slate-300'}`} />
                  {!isCollapsed && <span className="truncate">{item.label}</span>}
                </div>
                {!isCollapsed && item.badge && (
                  <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full ${
                    isActive ? 'bg-white text-[#16A34A]' : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          }

          return (
            <div key={item.id} className="space-y-1">
              <button
                onClick={() => {
                  if (isCollapsed) setIsCollapsed(false);
                  toggleSection(item.id);
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isChildActive 
                    ? 'text-white bg-[#0E2F4A] font-bold border-l-4 border-[#16A34A]' 
                    : 'text-slate-200/90 hover:text-white hover:bg-white/10'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Icon className={`w-4 h-4 shrink-0 ${isChildActive ? 'text-emerald-400' : 'text-slate-300'}`} />
                  {!isCollapsed && <span className="truncate">{item.label}</span>}
                </div>
                {!isCollapsed && (
                  isGroupExpanded 
                    ? <ChevronDown className="w-3.5 h-3.5 text-slate-300" /> 
                    : <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                )}
              </button>

              {/* Submenu Dropdown */}
              {!isCollapsed && isGroupExpanded && (
                <div className="pl-7 pr-1 py-1 space-y-1 border-l-2 border-slate-700/60 ml-4">
                  {item.subItems.map((sub) => {
                    const isSubActive = activeTab === sub.id;
                    return (
                      <button
                        key={sub.id}
                        onClick={() => handleItemClick(sub.id)}
                        className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                          isSubActive
                            ? 'text-white font-extrabold bg-[#16A34A] border-l-2 border-emerald-300 pl-3'
                            : 'text-slate-300/80 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        {sub.label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer Logout */}
      <div className="p-3 border-t border-slate-700/60 bg-[#0E2F4A]">
        <button
          onClick={onLogout}
          className="w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-xs font-bold text-rose-300 hover:bg-rose-900/40 transition-all cursor-pointer"
        >
          <LogOut className="w-4 h-4 shrink-0 text-rose-400" />
          {!isCollapsed && <span>Logout Session</span>}
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className={`hidden lg:block h-screen sticky top-0 transition-all duration-300 shrink-0 ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}>
        {SidebarContent}
      </aside>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div 
            className="fixed inset-0 bg-[#123B5D]/60 backdrop-blur-xs"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative z-10 w-72 h-full">
            {SidebarContent}
          </div>
        </div>
      )}
    </>
  );
}
