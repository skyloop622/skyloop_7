import React, { useState, useEffect } from 'react';
import { 
  ArrowUp, 
  Heart,
  Globe,
  Mail
} from 'lucide-react';
import { AHMED_INFO } from '../data/mockData';
import { InstagramLogo, FacebookLogo, TikTokLogo, WhatsAppLogo } from './SocialLogos';

export const Footer: React.FC = () => {
  const [localTime, setLocalTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Karachi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setLocalTime(timeStr);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Info & Brief Description */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="inline-block group">
              <span className="text-2xl font-black uppercase tracking-tight text-white block leading-none group-hover:text-blue-400 transition-colors">Skyloop</span>
              <span className="text-[10px] font-mono tracking-widest text-blue-400 uppercase block mt-1">Professional Web Development</span>
            </a>

            <p className="text-xs text-white/70 max-w-sm leading-relaxed font-light">
              Skyloop delivers high-performance website solutions of ANY type led by Ahmed Raza Khan. E-Commerce stores, Portfolios, Blogs, Gym & Restaurant websites built with WordPress/custom frameworks, free domain, Hostinger web hosting, and continuous care.
            </p>

            {/* Live Local Time */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111] border border-white/10 text-xs font-mono text-blue-400 uppercase">
              <Globe className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
              <span>Pakistan Time: <strong>{localTime || '12:00 PM'} (PKT)</strong></span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3 font-mono">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block">
              Quick Links
            </span>
            <ul className="space-y-2 text-xs text-white/60">
              <li><a href="#services" className="hover:text-white transition-colors uppercase">// Services Offered</a></li>
              <li><a href="#why-choose" className="hover:text-white transition-colors uppercase">// Why Choose Skyloop</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors uppercase">// Client Reviews</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors uppercase">// FAQ</a></li>
              <li><a href="#order" className="hover:text-white transition-colors uppercase">// Order Website</a></li>
              <li><a href="#about" className="hover:text-white transition-colors uppercase">// About Ahmed Raza Khan</a></li>
              <li><a href="#process" className="hover:text-white transition-colors uppercase">// Development Process</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors uppercase">// Contact Direct</a></li>
            </ul>
          </div>

          {/* Official Social Media - Original Logos Only */}
          <div className="md:col-span-4 space-y-4 font-mono">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block">
              Official Social Profiles
            </span>
            <p className="text-xs text-white/60 font-light font-sans">
              Connect directly with Ahmed Raza Khan via official social platforms:
            </p>
            
            {/* Logos Only - No Extra Details */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://wa.me/923712034274?text=Hello%20Ahmed%20Raza%20Khan!%20I%20want%20to%20build%20a%20website.%20What%20is%20the%20procedure%20for%20this%20and%20how%20will%20it%20be%20built%3F%20Please%20guide%20me."
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-[#111] border border-white/10 hover:border-emerald-500 hover:scale-110 transition-all shadow-md group"
                title="WhatsApp Direct (+92 371 2034274)"
              >
                <WhatsAppLogo className="w-6 h-6" />
              </a>

              <a
                href="https://www.instagram.com/skyloop_7/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-[#111] border border-white/10 hover:border-pink-500 hover:scale-110 transition-all shadow-md group"
                title="Instagram @skyloop_7"
              >
                <InstagramLogo className="w-6 h-6" />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61592072535029"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-[#111] border border-white/10 hover:border-blue-500 hover:scale-110 transition-all shadow-md group"
                title="Facebook Skyloop"
              >
                <FacebookLogo className="w-6 h-6" />
              </a>

              <a
                href="https://www.tiktok.com/@skyloop_07?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-[#111] border border-white/10 hover:border-cyan-400 hover:scale-110 transition-all shadow-md group"
                title="TikTok @skyloop_07"
              >
                <TikTokLogo className="w-6 h-6" />
              </a>

              <a
                href="mailto:skyloop622@gmail.com"
                className="p-3 rounded-2xl bg-[#111] border border-white/10 hover:border-blue-400 hover:scale-110 transition-all shadow-md text-blue-400"
                title="Email: skyloop622@gmail.com"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>

            <div className="pt-2 text-xs text-white/70 font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Contact via: <strong className="text-white">Email or WhatsApp</strong></span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <div>
            © 2026 <strong className="text-white">Skyloop — Web Development</strong> by Ahmed Raza Khan. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Made with <Heart className="w-3.5 h-3.5 text-blue-500 fill-blue-500" /> for Businesses Worldwide
            </span>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-[#111] hover:bg-blue-600 text-white/70 hover:text-white border border-white/10 transition-all shadow-md"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
