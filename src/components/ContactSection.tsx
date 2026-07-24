import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  MessageSquare, 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  CheckCircle2,
  ExternalLink,
  Phone
} from 'lucide-react';
import { AHMED_INFO } from '../data/mockData';
import { InstagramLogo, FacebookLogo, TikTokLogo, WhatsAppLogo } from './SocialLogos';

interface ContactSectionProps {
  initialMessage?: string;
  selectedProjectName?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialMessage = '',
  selectedProjectName = ''
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [message, setMessage] = useState(initialMessage);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    if (initialMessage) {
      setMessage(initialMessage);
    }
  }, [initialMessage]);

  useEffect(() => {
    if (selectedProjectName) {
      setMessage(`Hi Skyloop! I would like to inquire about building a website similar to "${selectedProjectName}".`);
    }
  }, [selectedProjectName]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(AHMED_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmitInquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !whatsappNumber || !message) return;

    setIsSubmitting(true);

    const payload = {
      name,
      email,
      whatsappNumber,
      message,
    };

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
            _subject: `New Skyloop Website Contact Inquiry from ${name}`,
            _replyto: email,
            _captcha: 'false',
            _template: 'table',
            "Client Name": name,
            "Client Email": email,
            "WhatsApp / Phone": whatsappNumber,
            "Message Details": message,
          }),
        });
      } catch (err) {
        console.log(`Direct FormSubmit email to ${emailTarget} handled:`, err);
      }
    }

    // 2. Post directly to Express Server API
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.log('API call handled:', err);
    }

    setIsSubmitting(false);
    setShowSuccessModal(true);
  };

  const directWhatsappUrl = `https://wa.me/923712034274?text=Hello%20Ahmed%20Raza%20Khan!%20I%20want%20to%20build%20a%20website.%20What%20is%20the%20procedure%20for%20this%20and%20how%20will%20it%20be%20built%3F%20Please%20guide%20me.`;

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#050505]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111] border border-white/10 text-xs font-mono uppercase tracking-widest text-blue-400">
            <Mail className="w-3.5 h-3.5" />
            <span>Skyloop Contact Us</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-tight">
            Contact Direct <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
              Skyloop & Ahmed Raza Khan
            </span>
          </h2>

          <p className="text-sm sm:text-base text-white/70 font-light">
            Fill in your contact details and WhatsApp number below. Your message will be immediately dispatched to <strong>skyloop622@gmail.com</strong> and Ahmed Raza Khan will contact you directly on WhatsApp.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Info & Social Logos */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-2xl bg-[#111] border border-white/10 space-y-6 shadow-xl">
              <h3 className="text-lg font-bold uppercase tracking-tight text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-400" />
                Contact Information
              </h3>

              {/* Email Copy Box */}
              <div className="p-4 rounded-xl bg-[#0a0a0a] border border-white/10 space-y-2">
                <div className="flex items-center justify-between text-xs text-white/50">
                  <span className="flex items-center gap-1.5 font-mono font-bold uppercase tracking-widest text-blue-400">
                    <Mail className="w-3.5 h-3.5" /> Notification Email
                  </span>
                  <span className="text-[10px] text-blue-400 font-mono">skyloop622@gmail.com</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs sm:text-sm font-mono font-bold text-white truncate">
                    {AHMED_INFO.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="px-3 py-1.5 rounded-full bg-blue-600 hover:bg-blue-500 text-xs text-white font-mono uppercase tracking-wider font-semibold flex items-center gap-1 shrink-0 shadow-md"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Direct WhatsApp Box */}
              <div className="p-4 rounded-xl bg-[#0a0a0a] border border-emerald-500/40 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase flex items-center gap-1.5">
                    <MessageSquare className="w-4 h-4" /> Direct WhatsApp
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                </div>
                <p className="text-xs text-white/70 font-light">
                  Need an instant response? Chat directly with Ahmed Raza Khan on WhatsApp:
                </p>
                <a
                  href={directWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-all"
                  id="whatsapp-direct-btn"
                >
                  <WhatsAppLogo className="w-4 h-4" />
                  <span>Open WhatsApp Chat</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Social Accounts - Logos Only */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest block">
                  Official Social Channels:
                </span>
                
                <div className="flex items-center gap-3">
                  <a
                    href="https://wa.me/923712034274?text=Hello%20Ahmed%20Raza%20Khan!%20I%20want%20to%20build%20a%20website.%20What%20is%20the%20procedure%20for%20this%20and%20how%20will%20it%20be%20built%3F%20Please%20guide%20me."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#0a0a0a] border border-white/10 hover:border-emerald-500 hover:scale-105 transition-all shadow-md"
                    title="WhatsApp Direct (+92 371 2034274)"
                  >
                    <WhatsAppLogo className="w-5 h-5" />
                  </a>

                  <a
                    href="https://www.instagram.com/skyloop_7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#0a0a0a] border border-white/10 hover:border-pink-500 hover:scale-105 transition-all shadow-md"
                    title="Instagram @skyloop_7"
                  >
                    <InstagramLogo className="w-5 h-5" />
                  </a>

                  <a
                    href="https://www.facebook.com/profile.php?id=61592072535029"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#0a0a0a] border border-white/10 hover:border-blue-500 hover:scale-105 transition-all shadow-md"
                    title="Facebook Skyloop"
                  >
                    <FacebookLogo className="w-5 h-5" />
                  </a>

                  <a
                    href="https://www.tiktok.com/@skyloop_07?is_from_webapp=1&sender_device=pc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#0a0a0a] border border-white/10 hover:border-cyan-400 hover:scale-105 transition-all shadow-md"
                    title="TikTok @skyloop_07"
                  >
                    <TikTokLogo className="w-5 h-5" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Inquiry Form with WhatsApp Field */}
          <div className="lg:col-span-7 bg-[#111] p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl space-y-6">
            
            <div className="border-b border-white/10 pb-4">
              <h3 className="text-lg font-bold uppercase tracking-tight text-white flex items-center justify-between">
                <span>Contact Form</span>
                <span className="text-[10px] font-mono text-blue-400 bg-blue-950/80 px-2.5 py-1 rounded-full border border-blue-800/60">
                  Direct Response Form
                </span>
              </h3>
              <p className="text-xs text-white/60 font-light mt-1">
                Enter your details below. Ahmed Raza Khan will review your message and reply promptly.
              </p>
            </div>

            <form onSubmit={handleSubmitInquiry} className="space-y-4 text-xs font-mono">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/70 font-bold mb-1.5 uppercase">
                    01. Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Shahzaib Khan"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-white/70 font-bold mb-1.5 uppercase">
                    02. Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. shahzaib@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* MANDATORY WHATSAPP NUMBER FIELD */}
              <div>
                <label className="block text-emerald-400 font-bold mb-1.5 uppercase flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5" /> 03. WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +92 300 1234567"
                  value={whatsappNumber}
                  onChange={(e) => setWhatsappNumber(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-emerald-500/40 text-white placeholder-white/30 focus:outline-none focus:border-emerald-400"
                />
                <span className="text-[10px] text-white/40 block mt-1">
                  Your phone number for direct reply.
                </span>
              </div>

              <div>
                <label className="block text-white/70 font-bold mb-1.5 uppercase">
                  04. Project Details or Questions *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about your business, website goals, or ask any question..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-blue-500 font-sans text-xs"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-full font-mono font-bold text-xs uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/30 transition-all flex items-center justify-center gap-2"
                id="contact-submit-btn"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

            </form>

          </div>

        </div>

      </div>

      {/* Success Confirmation Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg bg-[#111] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl text-center space-y-4"
            >
              <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto" />
              <h3 className="text-2xl font-black uppercase text-white">Inquiry Submitted!</h3>
              
              <div className="p-4 rounded-xl bg-[#0a0a0a] border border-white/10 text-left space-y-2 text-xs font-mono">
                <div className="text-emerald-400 font-bold flex items-center gap-1">
                  ✓ Message Received Successfully
                </div>
                <div className="text-white/80">
                  <strong>Name:</strong> {name}
                </div>
                <div className="text-white/80">
                  <strong>Email:</strong> {email}
                </div>
                <div className="text-white/80">
                  <strong>Phone / WhatsApp:</strong> {whatsappNumber}
                </div>
              </div>

              <p className="text-xs text-white/70 leading-relaxed font-light">
                Thank you, <strong>{name}</strong>! Your inquiry details have been submitted and dispatched via email or WhatsApp.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <a
                  href={`mailto:skyloop622@gmail.com?subject=${encodeURIComponent(`Website Contact Inquiry - ${name}`)}&body=${encodeURIComponent(`Hello Ahmed Raza Khan,\n\nName: ${name}\nEmail: ${email}\nPhone: ${whatsappNumber}\nMessage: ${message}`)}`}
                  className="flex-1 py-3 rounded-full font-mono font-bold text-xs uppercase text-white bg-blue-600 hover:bg-blue-500 flex items-center justify-center gap-1.5 shadow-lg shadow-blue-600/30"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send via Mail App</span>
                </a>

                <a
                  href={`https://wa.me/923712034274?text=${encodeURIComponent(`Hello Ahmed Raza Khan! I submitted an inquiry under name ${name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-full font-mono font-bold text-xs uppercase text-white bg-emerald-600 hover:bg-emerald-500 flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-600/30"
                >
                  <WhatsAppLogo className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <div className="pt-1">
                <button
                  onClick={() => {
                    setShowSuccessModal(false);
                    setName('');
                    setEmail('');
                    setWhatsappNumber('');
                    setMessage('');
                  }}
                  className="w-full py-2.5 rounded-full font-mono text-xs uppercase text-white/70 bg-[#1a1a1a] hover:bg-[#252525] border border-white/10"
                >
                  Done
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
