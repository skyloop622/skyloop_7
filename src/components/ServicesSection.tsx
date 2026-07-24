import React from 'react';
import { motion } from 'motion/react';
import { 
  Code2, 
  ShoppingBag, 
  Server, 
  ShieldCheck, 
  Check, 
  ArrowRight,
  Zap
} from 'lucide-react';
import { SERVICES_DATA } from '../data/mockData';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService
}) => {
  const getServiceIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5 text-blue-400" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-blue-400" />;
      case 'Server': return <Server className="w-5 h-5 text-blue-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-blue-400" />;
      default: return <Zap className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111] border border-white/10 text-xs font-mono uppercase tracking-widest text-blue-400">
            <Zap className="w-3.5 h-3.5" />
            <span>Web Development Services</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-tight">
            Services & Scope <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
              By Ahmed Khan
            </span>
          </h2>

          <p className="text-sm sm:text-base text-white/70 font-light">
            I handle all aspects of web development: coding, content layout, custom domain registration, fast hosting configuration, and full post-launch support.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service, idx) => {
            const featureList = service.features || service.deliverables || [];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-[#111] border border-white/10 hover:border-blue-500/50 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-800/50 flex items-center justify-center">
                    {getServiceIcon(service.icon || service.iconName)}
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-white/60 mt-2 leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>

                  {featureList.length > 0 && (
                    <div className="pt-2 border-t border-white/10 space-y-2">
                      <span className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-widest block">
                        Key Scope Items:
                      </span>
                      <ul className="space-y-1.5">
                        {featureList.map((item, i) => (
                          <li key={i} className="text-xs text-white/80 flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                            <span className="font-light">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="pt-6 mt-6 border-t border-white/10">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full py-2.5 rounded-full font-mono font-bold text-xs uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 transition-all flex items-center justify-center gap-2"
                    id={`service-btn-${service.id}`}
                  >
                    <span>Select Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
