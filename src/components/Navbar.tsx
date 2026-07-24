import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ShoppingBag,
  Send,
  Sparkles
} from 'lucide-react';
import { InstagramLogo, FacebookLogo, TikTokLogo, WhatsAppLogo } from './SocialLogos';

interface NavbarProps {
  onOpenContact: () => void;
  onOpenOrder: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onOpenOrder }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Skyloop', href: '#why-choose' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Order', href: '#order' },
    { name: 'About Ahmed', href: '#about' },
    { name: 'Process', href: '#process' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl shadow-black/90'
          : 'bg-gradient-to-b from-black/80 to-transparent py-4 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo - Skyloop Web Development by Ahmed Raza Khan */}
          <a 
            href="#" 
            className="flex items-center gap-3 group"
            id="nav-logo"
          >
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight uppercase text-white block leading-none group-hover:text-blue-400 transition-colors">
                  Skyloop
                </span>
                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-blue-950 border border-blue-800 text-cyan-300 font-bold uppercase">
                  PRO
                </span>
              </div>
              <span className="text-[10px] font-mono tracking-wider text-blue-400 uppercase block mt-1 font-bold">
                Web Development by Ahmed Raza Khan
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden xl:flex items-center gap-5 text-[11px] font-mono font-bold tracking-widest uppercase text-white/70">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-blue-400 transition-colors relative py-1 group"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Social Icons (Only Original Logos) & Primary CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            
            {/* Social Media Logos - Icon Only */}
            <div className="flex items-center gap-1.5 bg-[#111] px-2.5 py-1.5 rounded-full border border-white/10 shadow-inner">
              <a
                href="https://wa.me/923712034274?text=Hello%20Ahmed%20Raza%20Khan!%20I%20want%20to%20build%20a%20website.%20What%20is%20the%20procedure%20for%20this%20and%20how%20will%20it%20be%20built%3F%20Please%20guide%20me."
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform p-1"
                title="WhatsApp Direct (+92 371 2034274)"
              >
                <WhatsAppLogo className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/skyloop_7/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform p-1"
                title="Instagram @skyloop_7"
              >
                <InstagramLogo className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61592072535029"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform p-1"
                title="Facebook Skyloop"
              >
                <FacebookLogo className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@skyloop_07?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform p-1"
                title="TikTok @skyloop_07"
              >
                <TikTokLogo className="w-5 h-5" />
              </a>
            </div>

            {/* Order Website CTA */}
            <button
              onClick={onOpenOrder}
              className="flex items-center gap-2 px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-full transition-all shadow-lg shadow-blue-600/30"
              id="nav-order-btn"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Order Website</span>
            </button>

            {/* Contact CTA */}
            <button
              onClick={onOpenContact}
              className="px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider text-white/90 bg-[#111] hover:bg-[#1a1a1a] border border-white/15 rounded-full transition-all"
              id="nav-contact-btn"
            >
              <span className="flex items-center gap-1.5">
                <Send className="w-3.5 h-3.5 text-blue-400" />
                Contact
              </span>
            </button>
          </div>

          {/* Mobile Navigation Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenOrder}
              className="px-3.5 py-1.5 text-xs font-mono font-bold uppercase text-white bg-blue-600 rounded-full shadow-sm"
            >
              Order Site
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#111] border border-white/10 text-white/70 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#050505]/98 border-b border-white/10 backdrop-blur-2xl overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
              
              {/* Social Media Logos Banner for Mobile */}
              <div className="flex items-center justify-center gap-4 py-2 bg-[#111] rounded-xl border border-white/10">
                <a href="https://wa.me/923712034274?text=Hello%20Ahmed%20Raza%20Khan!%20I%20want%20to%20build%20a%20website.%20What%20is%20the%20procedure%20for%20this%20and%20how%20will%20it%20be%20built%3F%20Please%20guide%20me." target="_blank" rel="noopener noreferrer">
                  <WhatsAppLogo className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/skyloop_7/" target="_blank" rel="noopener noreferrer">
                  <InstagramLogo className="w-6 h-6" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61592072535029" target="_blank" rel="noopener noreferrer">
                  <FacebookLogo className="w-6 h-6" />
                </a>
                <a href="https://www.tiktok.com/@skyloop_07?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer">
                  <TikTokLogo className="w-6 h-6" />
                </a>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-3 rounded-xl bg-[#111] border border-white/10 text-xs font-mono uppercase text-white/80 hover:border-blue-500 transition-all text-center"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenOrder();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-blue-600 text-xs font-mono font-bold uppercase tracking-wider text-white shadow-lg"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Order a Website
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#111] border border-white/10 text-xs font-mono font-bold uppercase tracking-wider text-white/80"
                >
                  <Send className="w-4 h-4 text-blue-400" />
                  Contact Skyloop
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
