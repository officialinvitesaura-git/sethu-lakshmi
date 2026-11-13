import { useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { GalleryPhoto } from '../data/profileData';
import { ResilientImage } from './ResilientImage';

interface LightboxModalProps {
  photos: GalleryPhoto[];
  activeIndex: number | null;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export function LightboxModal({
  photos,
  activeIndex,
  onClose,
  onSelectIndex,
}: LightboxModalProps) {
  const isOpen = activeIndex !== null && photos[activeIndex] !== undefined;

  useEffect(() => {
    if (!isOpen || activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowRight') {
        onSelectIndex((activeIndex + 1) % photos.length);
      } else if (event.key === 'ArrowLeft') {
        onSelectIndex((activeIndex - 1 + photos.length) % photos.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, activeIndex, photos.length, onClose, onSelectIndex]);

  if (!isOpen || activeIndex === null) return null;

  const current = photos[activeIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#120F11]/92 backdrop-blur-sm p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`Photo lightbox: ${current.caption}`}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full flex items-center justify-between mb-4 text-white/90">
          <div className="flex items-center gap-3 text-sm">
            <span className="font-mono tabular-nums text-white/60">
              {String(activeIndex + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}
            </span>
            <span aria-hidden="true" className="text-white/40">
              ·
            </span>
            <span className="font-editorial text-lg font-medium text-white">
              {current.caption}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Close photo viewer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="relative w-full flex items-center justify-center">
          <button
            type="button"
            onClick={() => onSelectIndex((activeIndex - 1 + photos.length) % photos.length)}
            className="absolute left-2 md:-left-14 z-10 inline-flex items-center justify-center w-11 h-11 rounded-full bg-black/50 md:bg-white/10 text-white hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="overflow-hidden rounded-xl bg-[#1A1618] border border-white/10 max-h-[75vh] flex items-center justify-center">
            <ResilientImage
              src={current.src}
              alt={current.alt}
              caption={current.caption}
              objectPosition={current.objectPosition}
              className="max-h-[75vh] w-auto max-w-full object-contain"
            />
          </div>

          <button
            type="button"
            onClick={() => onSelectIndex((activeIndex + 1) % photos.length)}
            className="absolute right-2 md:-right-14 z-10 inline-flex items-center justify-center w-11 h-11 rounded-full bg-black/50 md:bg-white/10 text-white hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Next photo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <p className="mt-4 text-sm text-white/75 text-center max-w-lg">
          {current.note}
        </p>
      </div>
    </div>
  );
}
