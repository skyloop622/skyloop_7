import React from 'react';
import { motion } from 'motion/react';
import { 
  User, 
  Sparkles, 
  CheckCircle2, 
} from 'lucide-react';
import { AHMED_INFO, SOCIAL_LINKS } from '../data/mockData';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 relative"
          >
            <div className="rounded-2xl p-1 bg-gradient-to-b from-blue-600/30 via-white/5 to-white/10 shadow-2xl border border-white/10">
              <div className="bg-[#0a0a0a] rounded-xl p-6 sm:p-8 space-y-6">
                
                {/* Profile Header */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-indigo-600 p-[2px] shrink-0 overflow-hidden shadow-lg shadow-blue-600/30 flex items-center justify-center">
                    <div className="w-full h-full bg-[#050505] rounded-[14px] flex items-center justify-center text-blue-400">
                      <User className="w-7 h-7" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-tight text-white">
                      {AHMED_INFO.name}
                    </h3>
                    <p className="text-xs font-mono text-blue-400 font-bold uppercase">{AHMED_INFO.role}</p>
                    <p className="text-[11px] font-mono text-white/50">{AHMED_INFO.brandName}</p>
                  </div>
                </div>

                {/* Info Cards */}
                <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                  <div className="p-3.5 rounded-xl bg-[#111] border border-white/10">
                    <span className="text-[10px] font-mono text-white/40 block uppercase font-bold">Age</span>
                    <span className="text-sm font-bold text-white font-mono">{AHMED_INFO.age} Years Old</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#111] border border-white/10">
                    <span className="text-[10px] font-mono text-white/40 block uppercase font-bold">Services</span>
                    <span className="text-xs font-bold text-blue-400">Any Type of Website</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#111] border border-white/10">
                    <span className="text-[10px] font-mono text-white/40 block uppercase font-bold">Websites Built</span>
                    <span className="text-sm font-bold text-blue-400 font-mono">50+ Websites</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#111] border border-white/10">
                    <span className="text-[10px] font-mono text-white/40 block uppercase font-bold">Platform</span>
                    <span className="text-xs font-bold text-blue-400">WordPress & Custom Web</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="space-y-2 pt-2 border-t border-white/10">
                  <span className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-widest block">
                    Skyloop Channels:
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {SOCIAL_LINKS.map((soc) => (
                      <a
                        key={soc.name}
                        href={soc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-[#111] hover:bg-blue-600 border border-white/10 text-[11px] font-mono uppercase text-white/80 hover:text-white transition-all flex items-center justify-center gap-1.5"
                      >
                        <Sparkles className="w-3 h-3 text-blue-400" />
                        <span className="truncate">{soc.name}</span>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#111] border border-white/10 text-center">
                  <span className="text-[11px] text-blue-400 font-mono">
                    Email: {AHMED_INFO.email}
                  </span>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Capabilities */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111] border border-white/10 text-xs font-mono uppercase tracking-widest text-blue-400">
              <User className="w-3.5 h-3.5" />
              <span>// About Ahmed Raza Khan</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-tight">
              About <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
                Ahmed Raza Khan
              </span>
            </h2>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light">
              My name is <strong>Ahmed Raza Khan</strong>, I am <strong>19 years old</strong>. I can create <strong>any type of website</strong> for clients worldwide through <strong>Skyloop</strong> so they can grow their businesses and digital presence.
            </p>

            <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-light">
              I have built over <strong>50+ websites</strong> for clients. Whether you need an e-commerce store, custom web app, portfolio, blog, gym site, or restaurant portal, I handle everything: setup, domain connection, web hosting, search engine SEO, and full security protection.
            </p>

            {/* End-to-End Capabilities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {AHMED_INFO.skills.map((skill) => (
                <div key={skill} className="p-3.5 rounded-xl bg-[#111] border border-white/10 flex items-center gap-2 text-xs text-white">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span className="font-light">{skill}</span>
                </div>
              ))}
            </div>

            {/* Action CTA */}
            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onOpenContact}
                className="px-6 py-3.5 rounded-full font-mono font-bold text-xs uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/30 transition-all"
                id="about-contact-btn"
              >
                Get In Touch With Ahmed
              </button>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
