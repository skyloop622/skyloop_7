import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { OrderFormData } from '../types';
import { ShoppingBag, CheckCircle2, X, ExternalLink, Mail } from 'lucide-react';
import { WhatsAppLogo } from './SocialLogos';

interface OrderSectionProps {
  isOpenAsModal?: boolean;
  onCloseModal?: () => void;
  preselectedPackage?: string;
}

export const OrderSection: React.FC<OrderSectionProps> = ({
  isOpenAsModal = false,
  onCloseModal,
  preselectedPackage = ''
}) => {
  const [formData, setFormData] = useState<OrderFormData>({
    fullName: '',
    email: '',
    whatsappNumber: '',
    websiteType: 'E-Commerce Store Website (22,000 PKR)',
    price: '22,000 PKR',
    businessName: '',
    description: ''
  });

  useEffect(() => {
    if (preselectedPackage) {
      if (preselectedPackage.toLowerCase().includes('portfolio') || preselectedPackage.toLowerCase().includes('13,000')) {
        setFormData((prev) => ({ ...prev, price: '13,000 PKR', websiteType: 'Portfolio Website (13,000 PKR)' }));
      } else if (preselectedPackage.toLowerCase().includes('e-commerce') || preselectedPackage.toLowerCase().includes('22,000')) {
        setFormData((prev) => ({ ...prev, price: '22,000 PKR', websiteType: 'E-Commerce Store Website (22,000 PKR)' }));
      } else if (preselectedPackage.toLowerCase().includes('blog') || preselectedPackage.toLowerCase().includes('10,000')) {
        setFormData((prev) => ({ ...prev, price: '10,000 PKR', websiteType: 'Blog Website (10,000 PKR)' }));
      } else if (preselectedPackage.toLowerCase().includes('gym') || preselectedPackage.toLowerCase().includes('restaurant') || preselectedPackage.toLowerCase().includes('15,000')) {
        setFormData((prev) => ({ ...prev, price: '15,000 PKR', websiteType: 'Gym / Restaurant Website (15,000 PKR)' }));
      }
    }
  }, [preselectedPackage]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSelectType = (typeValue: string) => {
    let extractedPrice = 'Specified in Package';
    if (typeValue.includes('22,000')) extractedPrice = '22,000 PKR';
    else if (typeValue.includes('15,000')) extractedPrice = '15,000 PKR';
    else if (typeValue.includes('13,000')) extractedPrice = '13,000 PKR';
    else if (typeValue.includes('10,000')) extractedPrice = '10,000 PKR';

    setFormData({
      ...formData,
      websiteType: typeValue,
      price: extractedPrice,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.whatsappNumber) return;

    setIsSubmitting(true);

    // 1. Send via direct FormSubmit to skyloop622@gmail.com and skylopp622@gmail.com
    const targetEmails = ['skyloop622@gmail.com', 'skylopp622@gmail.com'];
    for (const emailTarget of targetEmails) {
      try {
        await fetch(`https://formsubmit.co/ajax/${emailTarget}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            _subject: `NEW SKYLOOP WEBSITE ORDER: ${formData.websiteType} - ${formData.fullName}`,
            _replyto: formData.email,
            _captcha: 'false',
            _template: 'table',
            "Client Name": formData.fullName,
            "Client Email": formData.email,
            "WhatsApp / Phone": formData.whatsappNumber,
            "Business Name": formData.businessName || "Not Specified",
            "Website Package": formData.websiteType,
            "Package Price": formData.price,
            "Project Description": formData.description || "None",
          }),
        });
      } catch (err) {
        console.log(`Direct FormSubmit email to ${emailTarget} handled:`, err);
      }
    }

    // 2. Post directly to Express Backend Endpoint
    try {
      await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    } catch (err) {
      console.log('Order API handled:', err);
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const mailtoOrderUrl = `mailto:skyloop622@gmail.com?subject=${encodeURIComponent(
    `NEW WEBSITE ORDER: ${formData.websiteType} - ${formData.fullName}`
  )}&body=${encodeURIComponent(
    `Hello Ahmed Raza Khan,\n\nI have submitted a new order on Skyloop Web Development:\n\n• Client Name: ${formData.fullName}\n• Email: ${formData.email}\n• WhatsApp / Phone: ${formData.whatsappNumber}\n• Business Name: ${formData.businessName || 'N/A'}\n• Website Package: ${formData.websiteType}\n• Package Price: ${formData.price}\n• Project Details: ${formData.description || 'N/A'}\n\nPlease reply to confirm receiving my order.\n\nThank you!`
  )}`;

  const whatsappOrderUrl = `https://wa.me/923712034274?text=${encodeURIComponent(
    `Hello Ahmed Raza Khan! I submitted a website order:\n- Name: ${formData.fullName}\n- Email: ${formData.email}\n- WhatsApp: ${formData.whatsappNumber}\n- Package: ${formData.websiteType}\n- Price: ${formData.price}`
  )}`;

  const formContent = (
    <div className="space-y-6">
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-8 rounded-2xl bg-[#111] border border-blue-500/40 text-center space-y-4"
        >
          <div className="w-16 h-16 bg-blue-600/20 border border-blue-500 rounded-full flex items-center justify-center mx-auto text-blue-400 shadow-lg shadow-blue-500/20">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <h3 className="text-2xl font-black uppercase text-white tracking-tight">
            Order Processed & Dispatched!
          </h3>

          <p className="text-sm text-white/80 max-w-md mx-auto leading-relaxed font-light">
            Thank you, <strong className="text-white">{formData.fullName}</strong>! Your order details for <strong className="text-blue-400">{formData.websiteType}</strong> have been submitted and dispatched via email or WhatsApp.
          </p>

          <div className="p-4 rounded-xl bg-[#0a0a0a] border border-blue-500/30 text-xs font-mono text-blue-400 text-left space-y-1 max-w-md mx-auto">
            <div className="font-bold text-white mb-1">Submitted Order Details:</div>
            <div>✓ Client Name: {formData.fullName}</div>
            <div>✓ Client Email: {formData.email}</div>
            <div>✓ Phone / WhatsApp: {formData.whatsappNumber}</div>
            <div>✓ Package Selected: {formData.websiteType} ({formData.price})</div>
            <div>✓ Status: Order Submitted & Dispatched</div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href={mailtoOrderUrl}
              className="px-5 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30"
            >
              <Mail className="w-4 h-4" />
              <span>Send Email via Mail App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={whatsappOrderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30"
            >
              <WhatsAppLogo className="w-4 h-4" />
              <span>Confirm on WhatsApp</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setIsSubmitted(false);
                if (isOpenAsModal && onCloseModal) onCloseModal();
              }}
              className="px-6 py-2.5 rounded-full bg-[#1a1a1a] hover:bg-[#252525] border border-white/10 text-white/70 hover:text-white text-xs font-mono uppercase tracking-wider transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono font-bold uppercase text-white/70 mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Shahzaib Khan"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#111] border border-white/10 text-white placeholder-white/30 text-xs font-mono focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase text-white/70 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                placeholder="e.g. shahzaib@gmail.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#111] border border-white/10 text-white placeholder-white/30 text-xs font-mono focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono font-bold uppercase text-emerald-400 mb-1">
                WhatsApp Contact Number *
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. +92 300 0000000"
                value={formData.whatsappNumber}
                onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#111] border border-emerald-500/40 text-white placeholder-white/30 text-xs font-mono focus:outline-none focus:border-emerald-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase text-white/70 mb-1">
                Business / Website Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Urban Attire / Sky Fitness"
                value={formData.businessName}
                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#111] border border-white/10 text-white placeholder-white/30 text-xs font-mono focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono font-bold uppercase text-white/70 mb-1">
              Select Website Category & Fixed Price *
            </label>
            <select
              value={formData.websiteType}
              onChange={(e) => handleSelectType(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#111] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-blue-500 transition-colors"
            >
              <option value="E-Commerce Store Website (22,000 PKR)">E-Commerce Store Website — 22,000 PKR</option>
              <option value="Gym / Restaurant Website (15,000 PKR)">Gym / Restaurant Website — 15,000 PKR</option>
              <option value="Portfolio Website (13,000 PKR)">Portfolio Website — 13,000 PKR</option>
              <option value="Blog Website (10,000 PKR)">Blog Website — 10,000 PKR</option>
              <option value="Custom Website / Custom App">Custom Website / Custom Framework</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono font-bold uppercase text-white/70 mb-1">
              Website Features & Description
            </label>
            <textarea
              rows={3}
              placeholder="Describe pages, product categories, color scheme, or details..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-[#111] border border-white/10 text-white placeholder-white/30 text-xs font-sans focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-full font-mono font-bold text-xs uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Submitting Order...</span>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>Confirm & Place Website Order</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );

  if (isOpenAsModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 sm:p-8 my-8 shadow-2xl"
        >
          <button
            onClick={onCloseModal}
            className="absolute top-6 right-6 p-2 rounded-full bg-[#111] text-white/60 hover:text-white border border-white/10"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-2 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800 text-xs font-mono text-blue-400 uppercase">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Skyloop Website Order</span>
            </div>
            <h2 className="text-2xl font-black uppercase text-white">Order Your Website</h2>
            <p className="text-xs text-white/60">Fill out this quick form to place your website order.</p>
          </div>

          {formContent}
        </motion.div>
      </div>
    );
  }

  return (
    <section id="order" className="py-24 relative overflow-hidden bg-[#050505]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111] border border-white/10 text-xs font-mono uppercase tracking-widest text-blue-400"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Skyloop Website Order</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight"
          >
            Order Your Website <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
              Skyloop Direct Order Form
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-white/70 font-light"
          >
            Submit your order details below. Ahmed Raza Khan will review your requirements and get in touch with you.
          </motion.p>
        </div>

        <div className="p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 shadow-2xl">
          {formContent}
        </div>

      </div>
    </section>
  );
};
