import { useMemo, useState } from 'react';
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Copy,
  Expand,
  Phone,
  XCircle,
} from 'lucide-react';
import {
  GALLERY_PHOTOS,
  GREEN_FLAGS,
  PROFILE,
  RED_FLAGS,
} from './data/profileData';
import { ResilientImage } from './components/ResilientImage';
import { LightboxModal } from './components/LightboxModal';
import { ApplicationModal } from './components/ApplicationModal';

type PhotoFilter = 'all' | 'color' | 'monochrome';

export default function App() {
  const [filter, setFilter] = useState<PhotoFilter>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const filteredPhotos = useMemo(() => {
    if (filter === 'all') return GALLERY_PHOTOS;
    return GALLERY_PHOTOS.filter((photo) => photo.tone === filter);
  }, [filter]);

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.phoneRaw);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } catch {
      setCopiedPhone(false);
    }
  };

  const heroPhoto = GALLERY_PHOTOS[0];

  return (
    <div className="min-h-screen bg-[#FAF7F5] text-[#1A1618]">
      {/* Top Navigation Bar (Strict 3-Zone Contract) */}
      <header className="sticky top-0 z-40 bg-[#FAF7F5]/90 backdrop-blur-md border-b border-[#E7DCD8]">
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between gap-8">
          <a
            href="#top"
            className="font-editorial text-xl font-semibold tracking-tight text-[#1A1618] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C81E4C] rounded"
          >
            {PROFILE.shortName}
          </a>

          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-[#5A4E54]"
          >
            <a
              href="#gallery"
              className="hover:text-[#1A1618] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Photos
            </a>
            <a
              href="#fine-print"
              className="hover:text-[#1A1618] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Fine Print
            </a>
            <a
              href="#looking-for"
              className="hover:text-[#1A1618] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Looking For
            </a>
            <a
              href="#contact"
              className="hover:text-[#1A1618] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center shrink-0">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center rounded-lg bg-[#C81E4C] px-4 py-2 text-sm font-semibold text-white hover:bg-[#A6173E] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C81E4C] focus-visible:ring-offset-2"
            >
              Apply Now
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        {/* Hero Section */}
        <section className="max-w-[1200px] mx-auto px-6 pt-12 pb-10 md:pt-16 md:pb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            {/* Left Column: Editorial Intro */}
            <div className="lg:col-span-7 flex flex-col justify-between py-2">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#6B5E64] mb-5">
                  <span className="text-[#C81E4C]">Now Accepting Applications</span>
                  <span aria-hidden="true">·</span>
                  <span>Age {PROFILE.age}</span>
                  <span aria-hidden="true">·</span>
                  <span>{PROFILE.tagline}</span>
                </div>

                <p className="font-editorial text-lg md:text-xl font-medium text-[#5A4E54] mb-3">
                  {PROFILE.name}, {PROFILE.age}
                </p>

                <h1 className="font-editorial text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold leading-[1.08] tracking-tight text-[#1A1618] text-balance mb-6">
                  {PROFILE.headline}
                </h1>

                <p className="text-base md:text-lg text-[#5A4E54] max-w-xl leading-relaxed mb-8">
                  {PROFILE.subheadline}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2.5 rounded-lg bg-[#C81E4C] px-6 py-3.5 text-sm md:text-base font-semibold text-white hover:bg-[#A6173E] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C81E4C] focus-visible:ring-offset-2"
                >
                  Apply To Be My Boyfriend
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>

                <div className="inline-flex items-center rounded-lg border border-[#DDD0CB] bg-white">
                  <a
                    href={`tel:${PROFILE.phoneRaw}`}
                    className="inline-flex items-center gap-2 px-4 py-3.5 text-sm font-medium text-[#1A1618] hover:text-[#C81E4C] transition-colors whitespace-nowrap"
                  >
                    <Phone className="w-4 h-4 text-[#C81E4C]" aria-hidden="true" />
                    <span className="font-mono tabular-nums">{PROFILE.phoneDisplay}</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    aria-label="Copy phone number"
                    className="border-l border-[#E7DCD8] px-3 py-3.5 text-xs font-medium text-[#6B5E64] hover:text-[#1A1618] transition-colors whitespace-nowrap"
                  >
                    {copiedPhone ? (
                      <span className="inline-flex items-center gap-1 text-[#15803D]">
                        <Check className="w-3.5 h-3.5" aria-hidden="true" />
                        Copied
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1">
                        <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                        Copy
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Featured Portrait */}
            <div className="lg:col-span-5 flex">
              <button
                type="button"
                onClick={() => setLightboxIndex(0)}
                className="group relative w-full overflow-hidden rounded-2xl border border-[#E7DCD8] bg-white text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C81E4C] min-h-[380px] lg:min-h-[460px]"
                aria-label={`View full photo: ${heroPhoto.caption}`}
              >
                <ResilientImage
                  src={heroPhoto.src}
                  alt={heroPhoto.alt}
                  caption={heroPhoto.caption}
                  objectPosition={heroPhoto.objectPosition}
                  className="w-full h-full lg:h-full transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent p-6 flex items-end justify-between gap-4">
                  <div>
                    <p className="font-editorial text-xl font-medium text-white">
                      {heroPhoto.caption}
                    </p>
                    <p className="text-xs text-white/80 mt-0.5">
                      Featured Portrait · Click to expand
                    </p>
                  </div>
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/15 text-white backdrop-blur-sm">
                    <Expand className="w-4 h-4" aria-hidden="true" />
                  </span>
                </div>
              </button>
            </div>
          </div>

          {/* 4-Column Quick Facts Strip */}
          <div className="mt-10 pt-8 border-t border-[#E7DCD8] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <div className="text-xs text-[#6B5E64] mb-1">Direct Line</div>
              <a
                href={`tel:${PROFILE.phoneRaw}`}
                className="font-mono text-base font-medium tabular-nums text-[#1A1618] hover:text-[#C81E4C] transition-colors"
              >
                {PROFILE.phoneDisplay}
              </a>
            </div>
            <div>
              <div className="text-xs text-[#6B5E64] mb-1">Primary Requirement</div>
              <div className="text-sm font-semibold text-[#1A1618]">
                Top-shelf reach & bug removal
              </div>
            </div>
            <div>
              <div className="text-xs text-[#6B5E64] mb-1">Coffee Order</div>
              <div className="text-sm font-semibold text-[#1A1618]">
                Iced coffee (all seasons)
              </div>
            </div>
            <div>
              <div className="text-xs text-[#6B5E64] mb-1">Hoodie Policy</div>
              <div className="text-sm font-semibold text-[#1A1618]">
                Oversized & permanently borrowed
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section: Visual Evidence of Awesomeness */}
        <section
          id="gallery"
          className="max-w-[1200px] mx-auto px-6 py-14 md:py-20 border-t border-[#E7DCD8]"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-xs font-medium text-[#C81E4C] mb-2">
                01. Photo Archive
              </p>
              <h2 className="font-editorial text-3xl md:text-4xl font-semibold text-[#1A1618] text-balance">
                Visual Evidence of Awesomeness
              </h2>
            </div>

            {/* Interactive Segmented Filter Control */}
            <div
              className="inline-flex items-center gap-1 p-1 bg-[#EFE8E5] rounded-lg self-start sm:self-auto"
              role="group"
              aria-label="Filter gallery photos"
            >
              {(
                [
                  { id: 'all', label: 'All Photos (5)' },
                  { id: 'color', label: 'Color (2)' },
                  { id: 'monochrome', label: 'Monochrome (3)' },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setFilter(tab.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                    filter === tab.id
                      ? 'bg-white text-[#1A1618] shadow-sm'
                      : 'text-[#6B5E64] hover:text-[#1A1618]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo, idx) => {
              const globalIndex = GALLERY_PHOTOS.findIndex((p) => p.id === photo.id);
              const isFeaturedTile = filter === 'all' && idx === 0;

              return (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => setLightboxIndex(globalIndex)}
                  className={`group text-left rounded-2xl border border-[#E7DCD8] bg-white overflow-hidden transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C81E4C] flex flex-col ${
                    isFeaturedTile ? 'sm:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#EFE8E5]">
                    <ResilientImage
                      src={photo.src}
                      alt={photo.alt}
                      caption={photo.caption}
                      objectPosition={photo.objectPosition}
                      className="w-full h-full transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                    <span className="absolute top-3 right-3 inline-flex items-center justify-center w-9 h-9 rounded-full bg-black/45 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                      <Expand className="w-4 h-4" aria-hidden="true" />
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className="font-editorial text-xl font-semibold text-[#1A1618]">
                          {photo.caption}
                        </h3>
                        <span className="font-mono text-xs tabular-nums text-[#8A7B82]">
                          {String(globalIndex + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <p className="text-sm text-[#6B5E64] leading-relaxed">
                        {photo.note}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* About Section: The Fine Print */}
        <section
          id="fine-print"
          className="max-w-[1200px] mx-auto px-6 py-14 md:py-20 border-t border-[#E7DCD8]"
        >
          <div className="mb-10">
            <p className="text-xs font-medium text-[#C81E4C] mb-2">
              02. Compatibility Check
            </p>
            <h2 className="font-editorial text-3xl md:text-4xl font-semibold text-[#1A1618] text-balance">
              About Sethulakshmi (The Fine Print)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Green Flags */}
            <div className="rounded-2xl border border-[#E7DCD8] bg-white p-7 md:p-8">
              <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-[#F2EAE7]">
                <CheckCircle2 className="w-5 h-5 text-[#15803D]" aria-hidden="true" />
                <h3 className="font-editorial text-2xl font-semibold text-[#1A1618]">
                  Green Flags (I Love)
                </h3>
              </div>
              <ul className="space-y-4">
                {GREEN_FLAGS.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[15px] text-[#3B3236] leading-relaxed"
                  >
                    <span
                      className="mt-2 w-1.5 h-1.5 rounded-full bg-[#15803D] shrink-0"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Red Flags */}
            <div className="rounded-2xl border border-[#E7DCD8] bg-white p-7 md:p-8">
              <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-[#F2EAE7]">
                <XCircle className="w-5 h-5 text-[#C81E4C]" aria-hidden="true" />
                <h3 className="font-editorial text-2xl font-semibold text-[#1A1618]">
                  Red Flags (I Dislike)
                </h3>
              </div>
              <ul className="space-y-4">
                {RED_FLAGS.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[15px] text-[#3B3236] leading-relaxed"
                  >
                    <span
                      className="mt-2 w-1.5 h-1.5 rounded-full bg-[#C81E4C] shrink-0"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* What I'm Looking For */}
          <div
            id="looking-for"
            className="mt-8 rounded-2xl border border-[#E7DCD8] bg-[#FFFDFB] p-7 md:p-10"
          >
            <p className="text-xs font-medium text-[#6B5E64] mb-2">
              03. Ideal Candidate Profile
            </p>
            <h3 className="font-editorial text-2xl md:text-3xl font-semibold text-[#1A1618] mb-3">
              What I'm Looking For
            </h3>
            <p className="text-base md:text-lg text-[#4A3F44] leading-relaxed max-w-3xl">
              {PROFILE.lookingFor}
            </p>
          </div>
        </section>

        {/* Contact & Final CTA Section */}
        <section
          id="contact"
          className="max-w-[1200px] mx-auto px-6 py-14 md:py-20 border-t border-[#E7DCD8]"
        >
          <div className="rounded-2xl border border-[#E7DCD8] bg-white p-8 md:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-xl">
              <p className="text-xs font-medium text-[#C81E4C] mb-2">
                04. Direct Line & Application
              </p>
              <h2 className="font-editorial text-3xl md:text-4xl font-semibold text-[#1A1618] mb-3 text-balance">
                Still reading? Bold move.
              </h2>
              <p className="text-base text-[#5A4E54] leading-relaxed">
                Submit your boyfriend application for phase one review, or skip the paperwork and call or text directly.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto">
              <div className="flex items-center justify-between gap-3 rounded-lg border border-[#DDD0CB] bg-[#FAF7F5] px-4 py-3">
                <div>
                  <div className="text-[11px] text-[#6B5E64]">Phone</div>
                  <a
                    href={`tel:${PROFILE.phoneRaw}`}
                    className="font-mono text-base font-semibold tabular-nums text-[#1A1618] hover:text-[#C81E4C] transition-colors"
                  >
                    {PROFILE.phoneDisplay}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="inline-flex items-center gap-1.5 rounded-md border border-[#DDD0CB] bg-white px-3 py-1.5 text-xs font-medium text-[#1A1618] hover:border-[#C81E4C] transition-colors whitespace-nowrap"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#15803D]" aria-hidden="true" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                      Copy
                    </>
                  )}
                </button>
              </div>

              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#C81E4C] px-6 py-4 text-sm font-semibold text-white hover:bg-[#A6173E] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C81E4C] focus-visible:ring-offset-2"
              >
                Swipe Right Internally
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#E7DCD8] bg-[#FAF7F5]">
        <div className="max-w-[1200px] mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B5E64]">
          <p>
            © 2026 {PROFILE.name}. All Rights Reserved (Especially to the hoodies).
          </p>
          <a
            href={`tel:${PROFILE.phoneRaw}`}
            className="font-mono tabular-nums text-[#1A1618] hover:text-[#C81E4C] transition-colors"
          >
            Tel: {PROFILE.phoneDisplay}
          </a>
        </div>
      </footer>

      {/* Modals */}
      <LightboxModal
        photos={GALLERY_PHOTOS}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onSelectIndex={(index) => setLightboxIndex(index)}
      />

      <ApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
