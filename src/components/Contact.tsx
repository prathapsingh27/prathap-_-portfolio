import React, { useState } from 'react';
import {
  Mail,
  Copy,
  Check,
  Send,
  Linkedin,
  Github,
  MapPin,
  ExternalLink,
  MessageSquare,
  Sparkles,
  Info,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger pre-filled mailto
    const subjectEncoded = encodeURIComponent(formData.subject || `Message from ${formData.name}`);
    const bodyEncoded = encodeURIComponent(
      `Hello Prathap,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
    setFormSubmitted(true);
  };

  const handleCopyFormattedDraft = () => {
    const text = `To: ${PERSONAL_INFO.email}\nSubject: ${formData.subject || 'Portfolio Inquiry'}\nFrom: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`;
    navigator.clipboard.writeText(text);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
            <span>Get In Touch</span>
            <span aria-hidden="true">·</span>
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Let&apos;s Connect & Discuss Opportunities
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Whether you want to discuss Python, hackathons, generative AI concepts, or explore student collaboration, feel free to reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact & Social Cards */}
          <div className="lg:col-span-5 space-y-5">
            {/* Direct Email Card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/25 flex items-center justify-center text-cyan-400">
                  <Mail className="w-6 h-6" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-300 border border-slate-700 transition-colors flex items-center gap-1.5"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                Direct Email
              </span>
              <p className="text-base sm:text-lg font-semibold text-white mt-1 break-all">
                {PERSONAL_INFO.email}
              </p>
              <div className="mt-4 pt-3 border-t border-slate-800/80">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-white transition-colors"
                >
                  <span>Open default mail app</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 transition-all block"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      LinkedIn Profile
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Professional student network & updates
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 transition-all block"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-600/15 border border-cyan-500/25 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                    <Github className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      GitHub: python-file
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Coding exercises & algorithm repositories
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </div>
            </a>

            {/* University Location */}
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-400 flex items-center gap-3">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Campus: Joy University, Tamil Nadu, India</span>
            </div>
          </div>

          {/* Right Column: Modern Transparent Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl">
              <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-cyan-400">
                <MessageSquare className="w-4 h-4" />
                <span>Send A Direct Message</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Draft a Note to Rasaputra Prathap Singh
              </h3>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                Fill out the details below to generate a pre-formatted email draft or copy the message directly to your clipboard.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-slate-950 border border-cyan-500/40 space-y-4">
                  <div className="flex items-center gap-3 text-cyan-400">
                    <Check className="w-6 h-6 text-emerald-400" />
                    <h4 className="text-base font-semibold text-white">
                      Draft Prepared Successfully!
                    </h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Your default mail application has been prompted to send this message to <strong className="text-white">{PERSONAL_INFO.email}</strong>. If your browser did not automatically open your email client, you can copy the full formatted text below:
                  </p>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <button
                      onClick={handleCopyFormattedDraft}
                      className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center gap-2"
                    >
                      {copiedMessage ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-400" />
                          <span>Copied to Clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Copy Message Text</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 rounded-lg transition-colors"
                    >
                      Write Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleFormChange}
                        placeholder="e.g. Alex Sharma"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Email <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder="e.g. alex@university.edu"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleFormChange}
                      placeholder="e.g. Hackathon Teammate / Python Project Inquiry"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleFormChange}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-sm font-semibold shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send via Email Client</span>
                    </button>

                    <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                      <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>Pre-populates your mail client with verified details</span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
