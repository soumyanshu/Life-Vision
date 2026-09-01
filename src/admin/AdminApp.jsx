import React, { useState, useEffect } from 'react';
import AdminLogin from './components/AdminLogin';
import Sidebar from './components/Sidebar';
import TopHeader from './components/TopHeader';
import Toast from './components/Common/Toast';

// Views
import DashboardView from './views/DashboardView';
import TrainingAppsView from './views/TrainingAppsView';
import AppDetailsModal from './views/AppDetailsModal';
import TrainingProgramsView from './views/TrainingProgramsView';
import TrainingCentersView from './views/TrainingCentersView';
import BatchesView from './views/BatchesView';
import StudentsView from './views/StudentsView';
import AttendanceView from './views/AttendanceView';
import AssessmentView from './views/AssessmentView';
import CertificatesView from './views/CertificatesView';
import PlacementView from './views/PlacementView';
import PartnersView from './views/PartnersView';
import VolunteersView from './views/VolunteersView';
import DonationsView from './views/DonationsView';
import SuccessStoriesView from './views/SuccessStoriesView';
import ContentCmsView from './views/ContentCmsView';
import DocumentsView from './views/DocumentsView';
import NotificationsView from './views/NotificationsView';
import UsersRolesView from './views/UsersRolesView';
import SettingsView from './views/SettingsView';

// Real Data fetched directly from Public Website
import { 
  initialApplications, initialPrograms, initialCenters, 
  initialBatches, initialStudents, initialCertificates, 
  initialPlacements, initialPartners, initialVolunteers, 
  initialDonations, initialStories, initialDocuments, 
  initialAdminUsers 
} from './mockData';

export default function AdminApp() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminUser, setAdminUser] = useState({
    name: 'Life Vision Society',
    email: 'support.lifevision@gmail.com',
    role: 'Super Admin',
    avatar: '/image/logo.png'
  });

  const [activeTab, setActiveTab] = useState('dashboard');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Toast State
  const [toast, setToast] = useState(null);
  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  // Datasets State initialized ONLY with Real Public Website Submissions (starts empty [] if no submissions exist)
  const [applications, setApplications] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('lvs_submitted_applications') || '[]');
    } catch (e) {
      return [];
    }
  });

  const [placements, setPlacements] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('lvs_submitted_placements') || '[]');
    } catch (e) {
      return [];
    }
  });

  const [partners, setPartners] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('lvs_submitted_partners') || '[]');
    } catch (e) {
      return [];
    }
  });

  const [donations, setDonations] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('lvs_submitted_donations') || '[]');
    } catch (e) {
      return [];
    }
  });

  const [contacts, setContacts] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('lvs_submitted_contacts') || '[]');
    } catch (e) {
      return [];
    }
  });

  const [programs, setPrograms] = useState(initialPrograms);
  const [centers, setCenters] = useState(initialCenters);
  const [batches, setBatches] = useState(initialBatches);
  const [students, setStudents] = useState(initialStudents);
  const [certificates, setCertificates] = useState(initialCertificates);
  const [volunteers, setVolunteers] = useState(initialVolunteers);
  const [stories, setStories] = useState(initialStories);
  const [documents, setDocuments] = useState(initialDocuments);
  const [adminUsers, setAdminUsers] = useState(initialAdminUsers);

  // Selected Item Modal State
  const [selectedApp, setSelectedApp] = useState(null);

  // Sync state with window event listeners for live public submissions
  useEffect(() => {
    const handleNewApplication = (e) => {
      if (e.detail) {
        setApplications((prev) => [e.detail, ...prev]);
        showToast(`New Application received from ${e.detail.fullName || 'Student'}!`, 'info');
      }
    };

    const handleNewContact = (e) => {
      if (e.detail) {
        setContacts((prev) => [e.detail, ...prev]);
        showToast(`New Contact Inquiry from ${e.detail.name || 'Visitor'}!`, 'info');
      }
    };

    window.addEventListener('lvs_new_application', handleNewApplication);
    window.addEventListener('lvs_new_contact', handleNewContact);

    return () => {
      window.removeEventListener('lvs_new_application', handleNewApplication);
      window.removeEventListener('lvs_new_contact', handleNewContact);
    };
  }, []);

  const handleLogin = (user) => {
    setAdminUser(user);
    setIsAuthenticated(true);
    showToast(`Welcome back, ${user.name}! Connected to Life Vision Society Admin.`, 'success');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    showToast('Logged out successfully.', 'info');
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  const renderActiveView = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <DashboardView 
            applications={applications} 
            placements={placements}
            partners={partners}
            donations={donations}
            contacts={contacts}
            programs={programs}
            centers={centers}
            batches={batches}
            students={students}
            onNavigate={(tab) => setActiveTab(tab)}
            onViewApp={(app) => setSelectedApp(app)}
          />
        );
      case 'applications':
        return (
          <TrainingAppsView 
            applications={applications} 
            setApplications={setApplications}
            onViewApp={(app) => setSelectedApp(app)}
            showToast={showToast}
          />
        );
      case 'programs':
        return (
          <TrainingProgramsView 
            programs={programs} 
            setPrograms={setPrograms} 
            showToast={showToast} 
          />
        );
      case 'centers':
        return (
          <TrainingCentersView 
            centers={centers} 
            setCenters={setCenters} 
            showToast={showToast} 
          />
        );
      case 'batches':
        return (
          <BatchesView 
            batches={batches} 
            setBatches={setBatches} 
            showToast={showToast} 
          />
        );
      case 'students':
        return (
          <StudentsView 
            students={students} 
            setStudents={setStudents} 
            showToast={showToast} 
          />
        );
      case 'attendance':
        return <AttendanceView batches={batches} students={students} showToast={showToast} />;
      case 'assessment':
        return <AssessmentView students={students} showToast={showToast} />;
      case 'certificates':
        return (
          <CertificatesView 
            certificates={certificates} 
            setCertificates={setCertificates} 
            students={students} 
            showToast={showToast} 
          />
        );
      case 'placements':
        return (
          <PlacementView 
            placements={placements} 
            setPlacements={setPlacements} 
            showToast={showToast} 
          />
        );
      case 'partners':
        return (
          <PartnersView 
            partners={partners} 
            setPartners={setPartners} 
            showToast={showToast} 
          />
        );
      case 'volunteers':
        return (
          <VolunteersView 
            volunteers={volunteers} 
            setVolunteers={setVolunteers} 
            showToast={showToast} 
          />
        );
      case 'donations':
        return (
          <DonationsView 
            donations={donations} 
            setDonations={setDonations} 
            showToast={showToast} 
          />
        );
      case 'stories':
        return (
          <SuccessStoriesView 
            stories={stories} 
            setStories={setStories} 
            showToast={showToast} 
          />
        );
      case 'cms':
        return <ContentCmsView showToast={showToast} />;
      case 'documents':
        return (
          <DocumentsView 
            documents={documents} 
            setDocuments={setDocuments} 
            showToast={showToast} 
          />
        );
      case 'notifications':
        return <NotificationsView showToast={showToast} />;
      case 'users':
        return (
          <UsersRolesView 
            adminUsers={adminUsers} 
            setAdminUsers={setAdminUsers} 
            showToast={showToast} 
          />
        );
      case 'settings':
        return <SettingsView adminUser={adminUser} setAdminUser={setAdminUser} showToast={showToast} />;
      default:
        return (
          <DashboardView 
            applications={applications} 
            placements={placements}
            partners={partners}
            donations={donations}
            contacts={contacts}
            programs={programs}
            centers={centers}
            batches={batches}
            students={students}
            onNavigate={(tab) => setActiveTab(tab)}
            onViewApp={(app) => setSelectedApp(app)}
          />
        );
    }
  };

  return (
    <div className="flex h-screen bg-[#F4F6F4] text-slate-800 font-sans overflow-hidden select-none">
      
      {/* Toast Notification */}
      {toast && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={() => setToast(null)} 
        />
      )}

      {/* Admin Sidebar */}
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isCollapsed={isCollapsed} 
        setIsCollapsed={setIsCollapsed}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* Top Header */}
        <TopHeader 
          adminUser={adminUser} 
          onLogout={handleLogout}
          onOpenMobileNav={() => setMobileOpen(true)}
          unreadCount={applications.filter(a => a.status === 'Pending' || a.status === 'Unread' || a.status === 'New').length}
          contactsCount={contacts.length}
        />

        {/* View Dynamic Body */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6 bg-[#F4F6F4]">
          {renderActiveView()}
        </main>
      </div>

      {/* Modal Application Viewer */}
      {selectedApp && (
        <AppDetailsModal 
          application={selectedApp} 
          onClose={() => setSelectedApp(null)} 
          onUpdateStatus={(id, newStatus) => {
            setApplications(prev => prev.map(a => a.id === id ? { ...a, status: newStatus } : a));
            showToast(`Application ${id} status updated to ${newStatus}`);
            setSelectedApp(null);
          }}
        />
      )}

    </div>
  );
}
