import React, { useState } from 'react';
import StatusBadge from '../components/Common/StatusBadge';
import { Plus, Edit, Trash2, Eye, Sparkles, Image as ImageIcon } from 'lucide-react';

export default function SuccessStoriesView({ stories, onAddStory, onDeleteStory, onShowToast }) {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [program, setProgram] = useState('Tailoring & Stitching');
  const [location, setLocation] = useState('Bhubaneswar, Odisha');
  const [quote, setQuote] = useState('');
  const [storyText, setStoryText] = useState('');
  const [outcome, setOutcome] = useState('');

  const handleTogglePublish = (id, currentStatus) => {
    const nextStatus = currentStatus === 'Published' ? 'Draft' : 'Published';
    onShowToast(`Story status updated to ${nextStatus}!`, 'success');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Success Stories CMS</h1>
          <p className="text-xs text-slate-500">Manage real beneficiary impact testimonials & micro-entrepreneurship stories from public site</p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-md flex items-center space-x-2 transition-all cursor-pointer"
        >
          <Plus className="w-4 h-4 text-pink-400" />
          <span>[ + Add Story ]</span>
        </button>
      </div>

      {/* Grid of Stories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stories.map((st) => (
          <div key={st.id} className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-sm">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <img src={st.photo} alt={st.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-slate-200" />
                <div>
                  <h3 className="text-base font-bold text-slate-900">{st.name}</h3>
                  <p className="text-xs text-pink-700 font-bold">{st.program} • {st.location}</p>
                </div>
              </div>
              <StatusBadge status={st.status} />
            </div>

            <p className="text-xs text-slate-700 italic bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              "{st.quote}"
            </p>

            <p className="text-xs text-slate-600 leading-relaxed">{st.story}</p>

            <div className="p-3 rounded-xl bg-pink-50 border border-pink-200 text-xs font-bold text-pink-800">
              Outcome: {st.outcome}
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-slate-100 text-xs">
              <button
                onClick={() => handleTogglePublish(st.id, st.status)}
                className="text-pink-700 font-bold hover:underline cursor-pointer"
              >
                {st.status === 'Published' ? '[ Unpublish ]' : '[ Publish ]'}
              </button>
              <div className="flex items-center space-x-2">
                <button className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg">
                  <Edit className="w-4 h-4" />
                </button>
                <button onClick={() => onDeleteStory(st.id)} className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Story Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl p-6 space-y-4 text-slate-900">
            <h3 className="text-lg font-bold text-slate-900">Add Success Story</h3>
            <div className="space-y-3 text-xs">
              <div>
                <label className="font-semibold text-slate-700">Beneficiary Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full mt-1 p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900" />
              </div>
              <div>
                <label className="font-semibold text-slate-700">Key Quote</label>
                <input type="text" value={quote} onChange={(e) => setQuote(e.target.value)} className="w-full mt-1 p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900" />
              </div>
              <div>
                <label className="font-semibold text-slate-700">Full Story</label>
                <textarea rows="3" value={storyText} onChange={(e) => setStoryText(e.target.value)} className="w-full mt-1 p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900" />
              </div>
              <div>
                <label className="font-semibold text-slate-700">Livelihood Outcome</label>
                <input type="text" value={outcome} onChange={(e) => setOutcome(e.target.value)} placeholder="e.g. Earns ₹18,000/month" className="w-full mt-1 p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900" />
              </div>
            </div>
            <div className="flex items-center justify-end space-x-3 pt-2">
              <button onClick={() => setShowModal(false)} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl text-xs font-semibold">Cancel</button>
              <button
                onClick={() => {
                  if (name) {
                    onAddStory({
                      id: `STOR-0${stories.length + 1}`,
                      name,
                      program,
                      location,
                      photo: '/success_story.jpg',
                      quote: quote || 'Life Vision Society changed my life.',
                      story: storyText || 'Beneficiary successfully completed training and gained employment.',
                      outcome: outcome || 'Earns sustainable monthly income',
                      status: 'Published'
                    });
                  }
                  setShowModal(false);
                }}
                className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold shadow-md"
              >
                Save & Publish
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
