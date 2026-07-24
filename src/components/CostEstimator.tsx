import React, { useState } from 'react';
import { 
  Calculator, 
  Check, 
  Clock, 
  Zap, 
  Send
} from 'lucide-react';

interface CostEstimatorProps {
  onApplyEstimateToContact: (estimateSummary: string) => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({
  onApplyEstimateToContact,
}) => {
  const [websiteType, setWebsiteType] = useState<'blog' | 'portfolio' | 'gym' | 'ecommerce'>('ecommerce');
  const [pageCount, setPageCount] = useState<number>(5);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'Domain & Hosting Included',
    'WordPress & Hostinger Setup',
  ]);

  const websiteTypeOptions = [
    { id: 'blog', label: 'Blog Website', basePrice: 10000, desc: 'Company, agency, or blogging website' },
    { id: 'portfolio', label: 'Portfolio Website', basePrice: 13000, desc: 'Personal or professional portfolio website' },
    { id: 'gym', label: 'Gym / Restaurant Website', basePrice: 15000, desc: 'Fitness center, cafe, or food restaurant' },
    { id: 'ecommerce', label: 'E-Commerce Website', basePrice: 22000, desc: 'Complete online shop with domain, hosting & support' },
  ];

  const availableFeatures = [
    { id: 'WordPress & Hostinger Setup', name: 'WordPress & Hostinger Setup', price: 0 },
    { id: 'Domain & Hosting Included', name: 'Domain & Hosting Included', price: 0 },
    { id: 'SEO & Speed Optimization', name: 'SEO & Speed Score 95+', price: 2000 },
    { id: 'WhatsApp Direct Chat', name: 'WhatsApp Direct Chat Integration', price: 1000 },
  ];

  const toggleFeature = (featureId: string) => {
    if (selectedFeatures.includes(featureId)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== featureId));
    } else {
      setSelectedFeatures([...selectedFeatures, featureId]);
    }
  };

  const selectedTypeObj = websiteTypeOptions.find((t) => t.id === websiteType) || websiteTypeOptions[3];
  const basePrice = selectedTypeObj.basePrice;
  
  const featuresCost = selectedFeatures.reduce((acc, featName) => {
    const feat = availableFeatures.find((f) => f.id === featName);
    return acc + (feat ? feat.price : 0);
  }, 0);

  const totalPKR = basePrice + featuresCost;

  const summaryText = `[Skyloop Website Quote]\n- Type: ${selectedTypeObj.label}\n- Estimated Pages: ${pageCount}\n- Total Price: ${totalPKR.toLocaleString()} PKR (Includes Hosting, Domain & Support)`;

  return (
    <section id="estimator" className="py-24 relative overflow-hidden bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111] border border-white/10 text-xs font-mono uppercase tracking-widest text-blue-400">
            <Calculator className="w-3.5 h-3.5" />
            <span>Skyloop Cost Calculator</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-tight">
            Website Cost Estimator <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
              Instant PKR Price
            </span>
          </h2>

          <p className="text-sm sm:text-base text-white/70 font-light">
            Select your website options to view instant price estimates in PKR.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-[#111] p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6">
            
            {/* Step 1: Website Type */}
            <div>
              <label className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest block mb-3">
                01. Select Website Category
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {websiteTypeOptions.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setWebsiteType(type.id as any)}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      websiteType === type.id
                        ? 'bg-blue-600 border-blue-500 text-white shadow-lg'
                        : 'bg-[#0a0a0a] border-white/10 text-white/60 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold uppercase">{type.label}</span>
                      <span className="text-xs font-mono font-bold">{type.basePrice.toLocaleString()} PKR</span>
                    </div>
                    <div className="text-[11px] font-light text-white/70 mt-1">{type.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Number of Pages */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
                  02. Target Pages
                </label>
                <span className="text-xs font-mono font-bold text-blue-400 bg-[#0a0a0a] px-3 py-1 rounded-full border border-white/10">
                  {pageCount} {pageCount === 1 ? 'Page' : 'Pages'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="12"
                value={pageCount}
                onChange={(e) => setPageCount(parseInt(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer"
              />
            </div>

            {/* Step 3: Add-on Features */}
            <div>
              <label className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest block mb-3">
                03. Included / Optional Add-ons
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {availableFeatures.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <button
                      key={feat.id}
                      onClick={() => toggleFeature(feat.id)}
                      className={`p-2.5 rounded-xl border flex items-center justify-between text-left transition-all ${
                        isChecked
                          ? 'bg-blue-950/60 border-blue-500 text-white'
                          : 'bg-[#0a0a0a] border-white/10 text-white/60'
                      }`}
                    >
                      <span className="text-xs font-medium flex items-center gap-2">
                        <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                          isChecked ? 'bg-blue-600 text-white font-bold' : 'bg-white/10'
                        }`}>
                          {isChecked ? '✓' : ''}
                        </span>
                        {feat.name}
                      </span>
                      <span className="text-[11px] font-mono text-white/50">
                        {feat.price > 0 ? `+${feat.price.toLocaleString()} PKR` : 'Free'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Results Display Column */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#111] border border-white/10 shadow-xl space-y-6">
            
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
                  Skyloop Quote Summary
                </span>
                <span className="px-2.5 py-1 text-[10px] font-mono font-bold text-white bg-blue-600 rounded-full">
                  PKR Rates
                </span>
              </div>

              {/* Price Display */}
              <div className="text-center space-y-2 py-6 bg-[#0a0a0a] rounded-xl border border-white/10">
                <span className="text-[11px] font-mono text-white/50 uppercase tracking-widest block">
                  Total Cost
                </span>
                <div className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight font-mono">
                  {totalPKR.toLocaleString()} PKR
                </div>
              </div>

              {/* Scope Breakdown */}
              <div className="space-y-2 text-xs text-white/80">
                <div className="text-[11px] font-mono font-bold text-white/50 uppercase tracking-widest">
                  Included Package Benefits:
                </div>
                <ul className="space-y-2 bg-[#0a0a0a] p-4 rounded-xl border border-white/10 font-light">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span><strong>{selectedTypeObj.label}</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Free Domain & Hostinger Web Hosting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Continuous Technical Support</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Action CTA */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <button
                onClick={() => onApplyEstimateToContact(summaryText)}
                className="w-full py-4 rounded-full font-mono font-bold text-xs uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 shadow-xl transition-all flex items-center justify-center gap-2"
                id="estimator-apply-btn"
              >
                <Send className="w-4 h-4" />
                <span>Send Estimate To Contact Form</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
