import { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  objectPosition?: string;
}

export function ResilientImage({
  src,
  alt,
  caption,
  className = '',
  objectPosition = 'object-center',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#F3ECE9] to-[#EAE0DC] text-[#6B5E64] p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <ImageOff className="w-7 h-7 mb-2 text-[#9F1239]/60" aria-hidden="true" />
        <span className="font-editorial text-sm font-medium text-[#1A1618]">
          {caption || 'Portrait'}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={`object-cover ${objectPosition} ${className}`}
    />
  );
}
