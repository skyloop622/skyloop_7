import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { X, ExternalLink, Smartphone, Laptop, CheckCircle2, ShoppingBag } from 'lucide-react';

interface LiveDemoModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenOrder: () => void;
}

export const LiveDemoModal: React.FC<LiveDemoModalProps> = ({
  project,
  onClose,
  onOpenOrder
}) => {
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-5xl bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 sm:p-8 my-8 shadow-2xl space-y-6"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-[#111] text-white/60 hover:text-white border border-white/10 z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400 font-bold block mb-1">
              SkyLoops Live Project Preview
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-xs text-white/60 font-light mt-0.5">{project.subtitle}</p>
          </div>

          {/* Device Preview Toggle */}
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-[#111] p-1 rounded-full border border-white/10">
              <button
                onClick={() => setDeviceMode('desktop')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-bold uppercase transition-all ${
                  deviceMode === 'desktop'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                <Laptop className="w-3.5 h-3.5" />
                <span>Desktop</span>
              </button>
              <button
                onClick={() => setDeviceMode('mobile')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-bold uppercase transition-all ${
                  deviceMode === 'mobile'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Mobile</span>
              </button>
            </div>
          </div>
        </div>

        {/* Device Preview Frame */}
        <div className="flex justify-center bg-[#050505] rounded-2xl p-4 sm:p-8 border border-white/10 min-h-[350px] items-center overflow-hidden">
          {deviceMode === 'desktop' ? (
            <div className="w-full max-w-4xl rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#111]">
              <div className="flex items-center gap-2 px-4 py-2.5 bg-[#1a1a1a] border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-[11px] font-mono text-white/40 ml-2 truncate">
                  https://skyloop.app/portfolio/{project.id}
                </span>
              </div>
              <div className="relative aspect-[16/9] overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                  <div className="space-y-1">
                    <span className="text-xs font-mono font-bold text-blue-400 uppercase">
                      Client: {project.client}
                    </span>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-64 rounded-[36px] p-3 bg-slate-900 border-4 border-slate-700 shadow-2xl">
              <div className="w-16 h-4 bg-slate-800 rounded-full mx-auto mb-2" />
              <div className="relative aspect-[9/18] rounded-[24px] overflow-hidden bg-black">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          )}
        </div>

        {/* Case Details & Tech Stack */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase text-blue-400">Project Overview</h4>
            <p className="text-sm text-white/80 font-light leading-relaxed">
              {project.fullDescription || project.description}
            </p>

            {project.deliverables && (
              <div className="pt-2">
                <h5 className="text-xs font-mono font-bold uppercase text-white/50 mb-2">Key Deliverables:</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/70">
                  {project.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="p-4 rounded-2xl bg-[#111] border border-white/10 space-y-4">
            <div>
              <span className="text-[10px] font-mono uppercase text-white/40 block">Tech Stack</span>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-md bg-blue-950/60 border border-blue-800/40 text-[10px] font-mono text-blue-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-white/10">
              <button
                onClick={() => {
                  onClose();
                  onOpenOrder();
                }}
                className="w-full py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Order Similar Website</span>
              </button>
            </div>
          </div>
        </div>

      </motion.div>
    </div>
  );
};
