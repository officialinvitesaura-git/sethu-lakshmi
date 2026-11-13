import { FormEvent, useEffect, useState } from 'react';
import { Check, Copy, Phone, X } from 'lucide-react';
import { PROFILE } from '../data/profileData';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ApplicationModal({ isOpen, onClose }: ApplicationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [zodiac, setZodiac] = useState('');
  const [pineapple, setPineapple] = useState('No, never');
  const [hoodieSize, setHoodieSize] = useState('XL (Recommended)');
  const [pitch, setPitch] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setName('');
    setZodiac('');
    setPitch('');
    onClose();
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.phoneRaw);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A1618]/60 backdrop-blur-sm p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="application-modal-title"
      onClick={handleResetAndClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl bg-[#FFFDFB] border border-[#E7DCD8] shadow-2xl p-6 md:p-8 text-[#1A1618]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 inline-flex items-center justify-center w-10 h-10 rounded-full text-[#6B5E64] hover:text-[#1A1618] hover:bg-[#F3ECE9] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C81E4C]"
          aria-label="Close application modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            <p className="text-xs font-medium text-[#C81E4C] mb-1">
              Phase One Screening · {PROFILE.shortName}, {PROFILE.age}
            </p>
            <h3
              id="application-modal-title"
              className="font-editorial text-2xl md:text-3xl font-semibold text-[#1A1618] mb-2"
            >
              Apply To Be My Boyfriend
            </h3>
            <p className="text-sm text-[#6B5E64] mb-6 leading-relaxed">
              Submit your stats for review, or skip the queue and text directly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="applicant-name"
                    className="block text-xs font-medium text-[#1A1618] mb-1.5"
                  >
                    Your Name
                  </label>
                  <input
                    id="applicant-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Arjun"
                    className="w-full rounded-lg border border-[#DDD0CB] bg-white px-3.5 py-2.5 text-sm text-[#1A1618] placeholder:text-[#9D8E95] focus:border-[#C81E4C] focus:outline-none focus:ring-2 focus:ring-[#C81E4C]/15"
                  />
                </div>
                <div>
                  <label
                    htmlFor="applicant-zodiac"
                    className="block text-xs font-medium text-[#1A1618] mb-1.5"
                  >
                    Astrological Sign
                  </label>
                  <input
                    id="applicant-zodiac"
                    type="text"
                    required
                    value={zodiac}
                    onChange={(e) => setZodiac(e.target.value)}
                    placeholder="e.g. Scorpio"
                    className="w-full rounded-lg border border-[#DDD0CB] bg-white px-3.5 py-2.5 text-sm text-[#1A1618] placeholder:text-[#9D8E95] focus:border-[#C81E4C] focus:outline-none focus:ring-2 focus:ring-[#C81E4C]/15"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="applicant-pineapple"
                    className="block text-xs font-medium text-[#1A1618] mb-1.5"
                  >
                    Pineapple on pizza?
                  </label>
                  <select
                    id="applicant-pineapple"
                    value={pineapple}
                    onChange={(e) => setPineapple(e.target.value)}
                    className="w-full rounded-lg border border-[#DDD0CB] bg-white px-3.5 py-2.5 text-sm text-[#1A1618] focus:border-[#C81E4C] focus:outline-none focus:ring-2 focus:ring-[#C81E4C]/15"
                  >
                    <option value="No, never">No, never</option>
                    <option value="Yes, enthusiastically">Yes, enthusiastically</option>
                    <option value="Only if you order it">Only if you order it</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="applicant-hoodie"
                    className="block text-xs font-medium text-[#1A1618] mb-1.5"
                  >
                    Oversized Hoodie Size
                  </label>
                  <select
                    id="applicant-hoodie"
                    value={hoodieSize}
                    onChange={(e) => setHoodieSize(e.target.value)}
                    className="w-full rounded-lg border border-[#DDD0CB] bg-white px-3.5 py-2.5 text-sm text-[#1A1618] focus:border-[#C81E4C] focus:outline-none focus:ring-2 focus:ring-[#C81E4C]/15"
                  >
                    <option value="L (Acceptable)">L (Acceptable)</option>
                    <option value="XL (Recommended)">XL (Recommended)</option>
                    <option value="XXL (Elite comfort)">XXL (Elite comfort)</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="applicant-pitch"
                  className="block text-xs font-medium text-[#1A1618] mb-1.5"
                >
                  Top-shelf reach & opening line
                </label>
                <textarea
                  id="applicant-pitch"
                  rows={2}
                  value={pitch}
                  onChange={(e) => setPitch(e.target.value)}
                  placeholder="Can you handle sarcasm, iced coffee runs, and bug removal?"
                  className="w-full rounded-lg border border-[#DDD0CB] bg-white px-3.5 py-2.5 text-sm text-[#1A1618] placeholder:text-[#9D8E95] focus:border-[#C81E4C] focus:outline-none focus:ring-2 focus:ring-[#C81E4C]/15 resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center rounded-lg bg-[#C81E4C] px-5 py-3 text-sm font-semibold text-white hover:bg-[#A6173E] transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C81E4C] focus-visible:ring-offset-2"
                >
                  Submit Application
                </button>
                <a
                  href={`tel:${PROFILE.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#DDD0CB] bg-white px-4 py-3 text-sm font-medium text-[#1A1618] hover:border-[#C81E4C] hover:text-[#C81E4C] transition-colors whitespace-nowrap"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-mono tabular-nums">{PROFILE.phoneDisplay}</span>
                </a>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-2">
            <p className="text-xs font-medium text-[#C81E4C] mb-2">
              Background Check Initiated
            </p>
            <h3
              id="application-modal-title"
              className="font-editorial text-3xl font-semibold text-[#1A1618] mb-3"
            >
              Application Received{name ? `, ${name}` : ''}!
            </h3>
            <p className="text-sm text-[#4A3F44] leading-relaxed mb-4">
              Please stand by while I analyze your astrological sign ({zodiac || 'classified'}), review your pizza stance ({pineapple.toLowerCase()}), and assess your hoodie-stealing potential ({hoodieSize.split(' ')[0]}).
            </p>
            <p className="text-xs text-[#6B5E64] italic mb-6">
              (You will be contacted if you pass phase one — or skip ahead by reaching out directly.)
            </p>

            <div className="rounded-xl border border-[#E7DCD8] bg-[#FAF7F5] p-4 mb-6 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-left">
                <div className="text-xs text-[#6B5E64]">Direct Phone Line</div>
                <a
                  href={`tel:${PROFILE.phoneRaw}`}
                  className="font-mono text-lg font-medium tabular-nums text-[#1A1618] hover:text-[#C81E4C] transition-colors"
                >
                  {PROFILE.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[#DDD0CB] bg-white px-3 py-2 text-xs font-medium text-[#1A1618] hover:border-[#C81E4C] transition-colors whitespace-nowrap"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#15803D]" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? 'Copied' : 'Copy Number'}
                </button>
                <a
                  href={`tel:${PROFILE.phoneRaw}`}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#C81E4C] px-3.5 py-2 text-xs font-semibold text-white hover:bg-[#A6173E] transition-colors whitespace-nowrap"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call Now
                </a>
              </div>
            </div>

            <button
              type="button"
              onClick={handleResetAndClose}
              className="w-full rounded-lg bg-[#1A1618] px-6 py-3 text-sm font-semibold text-white hover:bg-[#322B2E] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1618]"
            >
              I'll wait anxiously
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
