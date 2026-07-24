import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  ShoppingBag,
  Send,
  CheckCircle2,
  Code2,
  Server,
  Globe,
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { AHMED_INFO, SOCIAL_LINKS } from '../data/mockData';

interface HeroSectionProps {
  onOpenContact: () => void;
  onOpenOrder: () => void;
  onSelectProject: (projectId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenContact,
  onOpenOrder,
}) => {
  const specializations = [
    "E-Commerce Websites",
    "Portfolio Websites",
    "Blog Websites",
    "Restaurant Websites",
    "Gym & Fitness Websites"
  ];
  const [specIndex, setSpecIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = specializations[specIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setSpecIndex((prev) => (prev + 1) % specializations.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentWord.substring(0, displayText.length - 1)
            : currentWord.substring(0, displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, specIndex]);

  const whatsappDirectUrl = `https://wa.me/923712034274?text=Hello%20Ahmed%20Raza%20Khan!%20I%20want%20to%20build%20a%20website.%20What%20is%20the%20procedure%20for%20this%20and%20how%20will%20it%20be%20built%3F%20Please%20guide%20me.`;

  return (
    <section className="relative pt-28 pb-16 overflow-hidden flex flex-col justify-center bg-[#050505] text-white">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/15 via-cyan-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" 
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        
        {/* Top Badge Tag */}
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#111] border border-blue-500/30 shadow-xl shadow-blue-500/10"
          >
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-xs font-mono tracking-widest uppercase text-blue-400 font-bold">
              Skyloop — Web Development Services
            </span>
            <span className="text-white/30">•</span>
            <span className="text-xs text-white/80 font-medium">
              Ahmed Raza Khan | 19 Yrs Old | 50+ Websites Built
            </span>
          </motion.div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-tight"
          >
            Professional <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
              Website Development
            </span> Services
          </motion.h1>

          {/* Typing Specialization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-base sm:text-xl font-mono text-blue-400 min-h-[2.5rem] flex items-center justify-center gap-2 flex-wrap"
          >
            <span className="text-white/70">I build high quality:</span>
            <span className="text-white bg-blue-950/70 border border-blue-500/30 px-3 py-1 rounded-lg font-bold shadow-sm">
              {displayText}
              <span className="animate-pulse text-blue-400">|</span>
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto leading-relaxed font-light"
          >
            My name is <strong>Ahmed Raza Khan</strong> (19 years old). I can create <strong>any type of website</strong> for clients worldwide — including E-Commerce, Portfolios, Web Apps, Blogs, Gym & Restaurant portals with free domain, web hosting, SEO, and full security.
          </motion.p>

          {/* Key Value Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-mono text-white/80"
          >
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#111] border border-white/10">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              <span>WordPress & Hostinger Setup</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#111] border border-white/10">
              <Globe className="w-3.5 h-3.5 text-blue-400" />
              <span>Free Domain Included</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#111] border border-white/10">
              <Server className="w-3.5 h-3.5 text-blue-400" />
              <span>Free Hostinger Hosting</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#111] border border-white/10">
              <Code2 className="w-3.5 h-3.5 text-blue-400" />
              <span>SEO & Security Responsibility</span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <button
              onClick={onOpenOrder}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full font-mono font-bold text-xs uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/30 transition-all flex items-center justify-center gap-2 group"
              id="hero-order-cta"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Order Your Website</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full font-mono font-bold text-xs uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 shadow-xl shadow-emerald-600/30 transition-all flex items-center justify-center gap-2"
              id="hero-whatsapp-btn"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp / Chat Directly</span>
            </a>

            <a
              href="#order"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full font-mono font-bold text-xs uppercase tracking-wider text-white/80 bg-[#111] hover:bg-[#1a1a1a] border border-white/10 transition-all flex items-center justify-center gap-2"
              id="hero-view-order-btn"
            >
              <span>Order Form</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-2 flex items-center justify-center gap-2 text-xs text-white/50 flex-wrap"
          >
            <span className="font-mono text-[11px] uppercase tracking-widest text-white/40">// Skyloop Socials:</span>
            {SOCIAL_LINKS.map((soc) => (
              <a
                key={soc.name}
                href={soc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-full bg-[#111] border border-white/10 text-white/70 hover:text-blue-400 hover:border-blue-500/50 transition-all text-xs font-semibold"
              >
                {soc.name}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {AHMED_INFO.stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-5 rounded-2xl bg-[#111] border border-white/10 text-center hover:border-blue-500/40 transition-all"
            >
              <div className="text-2xl sm:text-3xl font-black text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text">
                {stat.value}
              </div>
              <div className="mt-1 text-[11px] font-mono uppercase tracking-wider text-white/60">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
