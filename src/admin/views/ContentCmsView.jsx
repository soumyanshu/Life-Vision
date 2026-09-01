import React, { useState } from 'react';
import StatusBadge from '../components/Common/StatusBadge';
import { Newspaper, Calendar, Image as ImageIcon, Plus, Edit, Trash2 } from 'lucide-react';

export default function ContentCmsView({ onShowToast }) {
  const [activeTab, setActiveTab] = useState('events');

  const eventsList = [
    { id: 1, title: 'Odisha Rural Skill Convocation 2026', date: '2026-09-15', location: 'Cuttack Main Hub', status: 'Published' },
    { id: 2, title: 'Organic Agriculture Farmers Fair & Expo', date: '2026-10-05', location: 'Puri District', status: 'Published' }
  ];

  const newsList = [
    { id: 1, title: 'Life Vision Society Expands Vocational Skill Hubs across Odisha', date: '2026-08-20', author: 'Admin', status: 'Published' },
    { id: 2, title: 'HDFC Parivartan Grants ₹45 Lakhs for Women Tailoring Training', date: '2026-08-10', author: 'CSR Desk', status: 'Published' }
  ];

  const galleryList = [
    { id: 1, title: 'Tailoring Trainees Practicing Batch 1', category: 'Tailoring', image: '/image/Tailoring_training.png' },
    { id: 2, title: 'Beautician Workshop Graduation', category: 'Beautician', image: '/image/Beautician.png' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Website Content CMS</h1>
          <p className="text-xs text-slate-500">Manage public site news, upcoming events, and photo galleries without altering layout</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center space-x-2 border-b border-slate-200 pb-3">
        <button
          onClick={() => setActiveTab('events')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'events' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100 bg-white border border-slate-200'
          }`}
        >
          Events
        </button>
        <button
          onClick={() => setActiveTab('news')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'news' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100 bg-white border border-slate-200'
          }`}
        >
          News & Blog
        </button>
        <button
          onClick={() => setActiveTab('gallery')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'gallery' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100 bg-white border border-slate-200'
          }`}
        >
          Gallery
        </button>
      </div>

      {/* Events Tab */}
      {activeTab === 'events' && (
        <div className="space-y-4">
          <div className="flex justify-end">
            <button onClick={() => onShowToast('Created new event!', 'success')} className="px-3.5 py-2 bg-slate-900 text-white font-bold text-xs rounded-xl shadow-xs">
              + Add Event
            </button>
          </div>
          <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden text-xs shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 bg-slate-50 uppercase font-bold">
                  <th className="p-4">Event Title</th>
                  <th className="p-4">Date</th>
                  <th className="p-4">Location</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {eventsList.map(e => (
                  <tr key={e.id} className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">{e.title}</td>
                    <td className="p-4 text-slate-700">{e.date}</td>
                    <td className="p-4 text-slate-600">{e.location}</td>
                    <td className="p-4"><StatusBadge status={e.status} /></td>
                    <td className="p-4 text-right">
                      <button className="p-1.5 text-slate-600 hover:text-slate-900"><Edit className="w-4 h-4" /></button>
                      <button className="p-1.5 text-rose-600 hover:text-rose-700"><Trash2 className="w-4 h-4" /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* News Tab */}
      {activeTab === 'news' && (
        <div className="space-y-4">
          <div className="flex justify-end">
            <button onClick={() => onShowToast('Created new news post!', 'success')} className="px-3.5 py-2 bg-slate-900 text-white font-bold text-xs rounded-xl shadow-xs">
              + Add News Article
            </button>
          </div>
          <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden text-xs shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 bg-slate-50 uppercase font-bold">
                  <th className="p-4">Article Title</th>
                  <th className="p-4">Date</th>
                  <th className="p-4">Author</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {newsList.map(n => (
                  <tr key={n.id} className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">{n.title}</td>
                    <td className="p-4 text-slate-700">{n.date}</td>
                    <td className="p-4 text-slate-600">{n.author}</td>
                    <td className="p-4"><StatusBadge status={n.status} /></td>
                    <td className="p-4 text-right">
                      <button className="p-1.5 text-slate-600 hover:text-slate-900"><Edit className="w-4 h-4" /></button>
                      <button className="p-1.5 text-rose-600 hover:text-rose-700"><Trash2 className="w-4 h-4" /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Gallery Tab */}
      {activeTab === 'gallery' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryList.map(g => (
            <div key={g.id} className="p-4 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-sm">
              <img src={g.image} alt={g.title} className="w-full h-40 object-cover rounded-xl" />
              <div className="font-bold text-slate-900 text-xs">{g.title}</div>
              <span className="text-[10px] text-pink-700 font-bold">{g.category}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
