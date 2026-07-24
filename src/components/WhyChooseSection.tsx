import React from 'react';
import { motion } from 'motion/react';
import { WHY_CHOOSE_FEATURES } from '../data/mockData';
import { 
  Zap, 
  Sparkles, 
  ShieldCheck, 
  Server
} from 'lucide-react';

interface WhyChooseSectionProps {
  onOpenOrder: () => void;
}

export const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({ onOpenOrder }) => {
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap': return <Zap className="w-5 h-5 text-blue-400" />;
      case 'Server': return <Server className="w-5 h-5 text-blue-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-blue-400" />;
      default: return <Sparkles className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="why-choose" className="py-24 relative overflow-hidden bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111] border border-white/10 text-xs font-mono uppercase tracking-widest text-blue-400"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Choose Skyloop</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight"
          >
            Why Choose Skyloop <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
              Web Development?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-white/70 font-light"
          >
            Ahmed Raza Khan writes clean code, sets up Hostinger hosting and custom domain, creates attractive responsive layouts, and delivers complete websites with continuous technical support.
          </motion.p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_FEATURES.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-[#111] border border-white/10 hover:border-blue-500/50 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-800/50 flex items-center justify-center">
                  {getFeatureIcon(feature.icon)}
                </div>

                <h3 className="text-base font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-xs text-white/60 leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono uppercase text-blue-400">
                <span>Skyloop Guarantee</span>
                <span>✓ Included</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
