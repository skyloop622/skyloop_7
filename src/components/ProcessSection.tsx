import React from 'react';
import { motion } from 'motion/react';
import { 
  MessageSquare, 
  Code2, 
  Server, 
  ShieldCheck, 
  CheckCircle2, 
  Workflow
} from 'lucide-react';
import { PROCESS_STEPS } from '../data/mockData';

export const ProcessSection: React.FC = () => {
  const getStepIcon = (iconName?: string) => {
    switch (iconName) {
      case 'MessageSquare': return <MessageSquare className="w-6 h-6 text-cyan-400" />;
      case 'Code2': return <Code2 className="w-6 h-6 text-purple-400" />;
      case 'Server': return <Server className="w-6 h-6 text-blue-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      default: return <Workflow className="w-6 h-6 text-indigo-400" />;
    }
  };

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111] border border-white/10 text-xs font-mono uppercase tracking-widest text-blue-400">
            <Workflow className="w-3.5 h-3.5" />
            <span>Workflow</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-tight">
            4-Step Process <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
              From Concept to Launch
            </span>
          </h2>

          <p className="text-sm sm:text-base text-white/70 font-light">
            A seamless, transparent 4-step process designed to get your business or e-commerce website live fast.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative p-6 rounded-2xl bg-[#111] border border-white/10 hover:border-blue-500 transition-all group flex flex-col justify-between"
            >
              {/* Step Number Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl font-black text-white/20 group-hover:text-blue-500 transition-colors font-mono">
                  {step.number}
                </span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-[#0a0a0a] border border-white/10 text-blue-400 uppercase">
                  {step.timeframe || `Step ${step.number}`}
                </span>
              </div>

              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center">
                  {getStepIcon(step.icon)}
                </div>

                <h3 className="text-lg font-bold uppercase tracking-tight text-white group-hover:text-blue-400 transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-white/60 leading-relaxed font-light">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 flex items-center gap-1.5 text-[10px] font-mono text-blue-400 uppercase">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>100% Quality Guaranteed</span>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};
