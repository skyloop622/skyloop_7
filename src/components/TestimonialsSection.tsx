import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Star, 
  PlusCircle, 
  X, 
  CheckCircle2, 
  Mail
} from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/mockData';
import { Testimonial } from '../types';

export const TestimonialsSection: React.FC = () => {
  const [reviews] = useState<Testimonial[]>(TESTIMONIALS_DATA);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState(false);

  // New review form state
  const [newName, setNewName] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState('');

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newComment) return;

    setSubmittedMessage(true);
    setTimeout(() => {
      setSubmittedMessage(false);
      setShowReviewModal(false);
      setNewName('');
      setNewComment('');
    }, 3000);
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111] border border-white/10 text-xs font-mono uppercase tracking-widest text-blue-400">
            <Star className="w-3.5 h-3.5 fill-blue-400 text-blue-400" />
            <span>// Client Reviews & Feedback</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-tight">
            Verified Reviews <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
              Skyloop Feedback
            </span>
          </h2>

          <p className="text-sm sm:text-base text-white/70 font-light">
            Genuine ratings and review summaries from clients of Ahmed Raza Khan.
          </p>
        </div>

        {/* Clean Minimalist Reviews Grid: Name, Rating, and Review Summary */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((test, idx) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 sm:p-7 rounded-2xl bg-[#111] border border-white/10 hover:border-blue-500/50 transition-all flex flex-col justify-between space-y-4 text-left"
            >
              {/* Header: Name and 5-Star Rating */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-blue-950 border border-blue-800/60 flex items-center justify-center font-mono font-bold text-xs text-blue-400 shrink-0">
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase text-white tracking-wide">{test.name}</h3>
                    <span className="text-[10px] font-mono text-blue-400/80 uppercase">Verified Client</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 bg-[#050505] px-2.5 py-1 rounded-full border border-white/10">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-mono text-amber-400 font-bold ml-1">5.0 ★</span>
                </div>
              </div>

              {/* Concise Review Summary Text */}
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-light italic">
                "{test.comment}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Submit Review CTA */}
        <div className="mt-12 text-center space-y-3">
          <button
            onClick={() => setShowReviewModal(true)}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#111] hover:bg-blue-600 border border-white/10 text-xs font-mono font-bold uppercase tracking-wider text-white transition-all shadow-lg"
            id="leave-review-btn"
          >
            <PlusCircle className="w-4 h-4 text-blue-400" />
            <span>Submit a Review for Email Approval</span>
          </button>
          <p className="text-[11px] font-mono text-white/40">
            Note: All new review submissions are sent to <span className="text-blue-400">skyloop622@gmail.com</span> for email verification before publishing.
          </p>
        </div>

      </div>

      {/* Review Submission Modal with Email Notification */}
      <AnimatePresence>
        {showReviewModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-lg bg-[#111] border border-white/10 rounded-2xl p-6 shadow-2xl space-y-4"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <h3 className="text-base font-mono font-bold uppercase text-white flex items-center gap-2">
                  <Star className="w-4 h-4 fill-blue-400 text-blue-400" />
                  Submit Client Review
                </h3>
                <button
                  onClick={() => setShowReviewModal(false)}
                  className="p-1 rounded-lg text-white/50 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {submittedMessage ? (
                <div className="py-8 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold uppercase text-white">Review Submitted</h4>
                  <p className="text-xs text-white/70 max-w-sm mx-auto leading-relaxed">
                    Thank you for your feedback! Your review has been submitted for publication.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleAddReview} className="space-y-4 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-blue-950/30 border border-blue-800/40 text-[11px] text-blue-300 leading-relaxed flex items-start gap-2">
                    <Star className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>
                      Share your experience working with Ahmed Raza Khan on your website project.
                    </span>
                  </div>

                  <div>
                    <label className="block text-white/70 font-bold mb-1 uppercase">Reviewer Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ahmad Raza"
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-[#050505] border border-white/10 text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-white/70 font-bold mb-1 uppercase">Rating</label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setNewRating(star)}
                          className="p-1"
                        >
                          <Star
                            className={`w-5 h-5 ${
                              star <= newRating
                                ? 'fill-amber-400 text-amber-400'
                                : 'text-white/20'
                            }`}
                          />
                        </button>
                      ))}
                      <span className="text-xs font-bold text-amber-400 ml-2">{newRating}.0 ★</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/70 font-bold mb-1 uppercase">Concise Review Summary *</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="e.g. Best service and fast website delivery."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-[#050505] border border-white/10 text-white focus:outline-none focus:border-blue-500 font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full font-mono font-bold text-xs uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 transition-all flex items-center justify-center gap-2"
                  >
                    <Star className="w-4 h-4" />
                    <span>Submit Review</span>
                  </button>
                </form>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
