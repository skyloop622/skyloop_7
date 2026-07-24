import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  Code2, 
  Smartphone, 
  Monitor, 
  ShieldCheck, 
  Zap, 
  ArrowRight,
  Github
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOrderSimilar: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOrderSimilar
}) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'features' | 'overview'>('preview');
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-xl">
        
        {/* Backdrop click */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-5xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 my-auto flex flex-col max-h-[90vh]"
        >
          
          {/* Top Bar Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 bg-slate-950 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-blue-950 border border-blue-800 text-cyan-300">
                {project.category}
              </span>
              <div>
                <h3 className="text-lg sm:text-2xl font-bold text-white flex items-center gap-2">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400">{project.tagline}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Nav Tabs Bar */}
          <div className="flex items-center justify-between px-6 py-3 bg-slate-900 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('preview')}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'preview'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                Interactive Preview
              </button>
              <button
                onClick={() => setActiveTab('features')}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'features'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                Features & Tech Stack
              </button>
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'overview'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                Case Study Overview
              </button>
            </div>

            {/* Desktop / Mobile Switcher for Preview */}
            {activeTab === 'preview' && (
              <div className="hidden sm:flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800">
                <button
                  onClick={() => setDeviceMode('desktop')}
                  className={`p-1.5 rounded-md text-xs ${
                    deviceMode === 'desktop' ? 'bg-slate-800 text-cyan-400' : 'text-slate-500'
                  }`}
                  title="Desktop View"
                >
                  <Monitor className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setDeviceMode('mobile')}
                  className={`p-1.5 rounded-md text-xs ${
                    deviceMode === 'mobile' ? 'bg-slate-800 text-cyan-400' : 'text-slate-500'
                  }`}
                  title="Mobile View"
                >
                  <Smartphone className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Modal Main Scrollable Content */}
          <div className="p-6 overflow-y-auto space-y-6 flex-1">
            
            {activeTab === 'preview' && (
              <div className="space-y-4">
                {/* Device Frame */}
                <div
                  className={`mx-auto transition-all duration-300 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl ${
                    deviceMode === 'mobile' ? 'max-w-sm' : 'w-full'
                  }`}
                >
                  {/* Browser Header Bar */}
                  <div className="bg-slate-900 px-4 py-2 flex items-center justify-between border-b border-slate-800 text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      <span className="font-mono text-[11px] text-slate-300 ml-2">
                        {project.liveUrl || 'https://skyloop.app/preview'}
                      </span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-mono">
                      SSL Secured • Built in {project.completionTime}
                    </span>
                  </div>

                  {/* Simulated Scrollable Webpage Content */}
                  <div className="p-6 space-y-6 max-h-[460px] overflow-y-auto">
                    {/* Simulated Webpage Banner */}
                    <div className={`p-6 sm:p-8 rounded-2xl bg-gradient-to-r ${project.accentBg} border border-slate-800 text-center space-y-3`}>
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-950/80 text-white">
                        {project.title}
                      </span>
                      <h4 className="text-2xl font-black text-white">{project.tagline}</h4>
                      <p className="text-xs text-slate-200 max-w-lg mx-auto">{project.overview}</p>
                      
                      <div className="pt-2 flex justify-center gap-2">
                        <button className="px-4 py-2 rounded-lg bg-blue-600 text-white font-bold text-xs shadow-lg">
                          Interactive Demo Action
                        </button>
                        <button className="px-4 py-2 rounded-lg bg-slate-900/90 text-slate-200 font-semibold text-xs border border-slate-700">
                          Explore Catalog
                        </button>
                      </div>
                    </div>

                    {/* Screenshot Preview */}
                    <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-900">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Simulated Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {project.features.map((feat, i) => (
                        <div
                          key={i}
                          className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-200 flex items-start gap-2"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider text-cyan-400 mb-3">
                    Key Website Features & Functionality
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.features.map((feature, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3"
                      >
                        <Zap className="w-5 h-5 text-indigo-400 shrink-0" />
                        <div>
                          <div className="text-xs font-bold text-white">{feature}</div>
                          <div className="text-[11px] text-slate-400 mt-0.5">
                            Tested, responsive, and optimized for mobile & desktop.
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider text-cyan-400 mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-lg bg-indigo-950/60 border border-indigo-800/60 text-xs font-semibold text-indigo-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider text-cyan-400 mb-3">
                    Performance Highlights
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                        <span className="text-xs font-bold text-emerald-400">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                  <h4 className="text-sm font-bold text-white">Client Case Study Summary</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{project.overview}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                    <span className="text-[11px] text-slate-400 uppercase tracking-wider">Client</span>
                    <div className="text-sm font-bold text-white">{project.clientName}</div>
                    <div className="text-xs text-indigo-400">{project.clientRole || 'Partner'}</div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                    <span className="text-[11px] text-slate-400 uppercase tracking-wider">Turnaround Time</span>
                    <div className="text-sm font-bold text-cyan-400">{project.completionTime}</div>
                    <div className="text-xs text-slate-400">Concept to live URL</div>
                  </div>
                </div>

                {project.metrics && (
                  <div className="p-5 rounded-xl bg-emerald-950/40 border border-emerald-800/50 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-emerald-300 font-semibold">Key Achievement</span>
                      <div className="text-lg font-bold text-white">{project.metrics.label}</div>
                    </div>
                    <div className="text-3xl font-black text-emerald-400">{project.metrics.value}</div>
                  </div>
                )}
              </div>
            )}

          </div>

          {/* Modal Footer Actions */}
          <div className="p-4 sm:p-6 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs text-slate-400">
              Want a similar custom website built for your business?
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  onClose();
                  onOrderSimilar(project.title);
                }}
                className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2"
                id="modal-order-similar-btn"
              >
                <Sparkles className="w-4 h-4 text-cyan-300" />
                <span>Order Website Like This</span>
              </button>

              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700"
              >
                Close
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
