import React from 'react';
import { motion } from 'motion/react';
import { PRICING_TIERS } from '../data/mockData';
import { Check, Sparkles, ShoppingBag, Globe, Server, ShieldCheck, Info } from 'lucide-react';

interface PricingSectionProps {
  onOpenOrderWithTier?: (tierTitle: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenOrderWithTier }) => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

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
            <span>Skyloop Transparent Pricing</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight"
          >
            Plans & Packages <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
              Skyloop Development Plans
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-white/70 font-light"
          >
            Clear, fixed pricing in PKR with zero hidden costs. All packages include free domain, Hostinger hosting setup, search engine SEO, security protection, and technical support by Ahmed Raza Khan.
          </motion.p>
        </div>

        {/* Highlighted E-Commerce Price Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-950/80 via-[#0a0a0a] to-indigo-950/80 border-2 border-blue-500 shadow-2xl shadow-blue-600/20 max-w-4xl mx-auto space-y-4"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-white/10 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600 text-[10px] font-mono font-bold uppercase text-white mb-2">
                Featured Online Store Package
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-white">
                E-Commerce Store Website
              </h3>
              <p className="text-xs sm:text-sm text-white/70 mt-1 font-light">
                Complete online shop with product catalog, cart system, and mobile checkout built by Ahmed Raza Khan.
              </p>
            </div>

            <div className="text-right sm:text-right text-center shrink-0">
              <span className="text-xs font-mono uppercase text-blue-400 block font-bold">Total Cost</span>
              <span className="text-3xl sm:text-4xl font-black font-mono text-white">22,000 PKR</span>
              <span className="text-[10px] font-mono text-emerald-400 block mt-1">Complete Ready Store</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-white/80 pt-2">
            <div className="flex items-center gap-2 p-3 rounded-xl bg-[#111] border border-white/10">
              <Globe className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Includes Free Domain Name</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-xl bg-[#111] border border-white/10">
              <Server className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Includes Hostinger Web Hosting</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-xl bg-[#111] border border-white/10">
              <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Includes SEO & Full Security</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-blue-900/30 border border-blue-800/40 text-xs text-blue-200 flex items-start gap-2">
            <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
            <span>
              <strong>Note:</strong> You (the client) provide your product photos or business details. Ahmed Raza Khan handles all WordPress setup, layout design, Hostinger domain hosting connection, and delivers a 100% finished website.
            </span>
          </div>

          <div className="pt-2 flex justify-center">
            <button
              onClick={() => onOpenOrderWithTier && onOpenOrderWithTier('E-Commerce Website (22,000 PKR)')}
              className="px-8 py-3.5 rounded-full font-mono font-bold text-xs uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/30 transition-all flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Order E-Commerce Store — 22,000 PKR</span>
            </button>
          </div>
        </motion.div>

        {/* All Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRICING_TIERS.map((tier, idx) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`relative rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between ${
                tier.popular
                  ? 'bg-[#111] border-2 border-blue-500 shadow-xl'
                  : 'bg-[#111] border border-white/10 hover:border-white/20'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-blue-600 text-[10px] font-mono font-bold uppercase text-white shadow-md">
                  Most Popular
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold uppercase text-white tracking-tight">
                    {tier.name}
                  </h3>
                  <p className="text-xs text-white/50 mt-1 font-light min-h-[2.5rem]">
                    {tier.subtitle}
                  </p>
                </div>

                {/* Price Display */}
                <div className="py-2 border-y border-white/10">
                  <div className="text-2xl font-black font-mono text-white">
                    {tier.price}
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2 pt-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-white/40 block font-bold">
                    What is Included:
                  </span>
                  <ul className="space-y-2 text-xs text-white/80">
                    {tier.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span className="font-light">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Order Button */}
              <div className="pt-6 mt-6 border-t border-white/5">
                <button
                  onClick={() => onOpenOrderWithTier && onOpenOrderWithTier(`${tier.name} (${tier.price})`)}
                  className={`w-full py-3 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                    tier.popular
                      ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30'
                      : 'bg-[#1a1a1a] hover:bg-[#252525] border border-white/10 text-white'
                  }`}
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>{tier.buttonText || 'Choose Package'}</span>
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
