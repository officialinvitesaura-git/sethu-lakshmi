export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  note: string;
  tone: 'color' | 'monochrome';
  objectPosition?: string;
}

export const PROFILE = {
  name: 'Sethulakshmi Jayaprakash',
  shortName: 'Sethulakshmi',
  age: 27,
  tagline: 'Searching polluted Leaves',
  headline: 'Taking applications for someone to reach the top shelf.',
  subheadline: '(And maybe hold my hand while we judge people at the grocery store.)',
  phoneRaw: '7592891436',
  phoneFormatted: '+91 75928 91436',
  phoneDisplay: '7592891436',
  lookingFor:
    "Someone who can match my level of sarcasm, remembers the little things, and won't judge me when I rewatch my favorite comfort show for the 47th time. Bonus points if you can kill bugs for me.",
};

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'golden-hour',
    src: '/assets/aistudio/Screenshot_2026-11-13_at_3.54.42_PM_5b009107.png',
    alt: 'Sethulakshmi in warm golden hour sunlight in front of cinema posters and fairy lights',
    caption: 'Golden hour magic',
    note: 'Warm light, fairy lights, and classic cinema posters.',
    tone: 'color',
    objectPosition: 'object-center',
  },
  {
    id: 'feeling-blue',
    src: '/assets/aistudio/Screenshot_2026-11-13_at_3.54.50_PM_757d3530.png',
    alt: 'Sethulakshmi wearing a deep blue brocade saree with pink blouse',
    caption: 'Feeling blue',
    note: 'Royal blue brocade saree moment.',
    tone: 'color',
    objectPosition: 'object-top',
  },
  {
    id: 'vintage-vibes',
    src: '/assets/aistudio/Screenshot_2026-11-13_at_3.54.24_PM_7906d73c.png',
    alt: 'Black and white close-up portrait of Sethulakshmi wearing a floral choker',
    caption: 'Vintage vibes',
    note: 'Monochrome portrait with floral choker.',
    tone: 'monochrome',
    objectPosition: 'object-top',
  },
  {
    id: 'cheesin',
    src: '/assets/aistudio/Screenshot_2026-11-13_at_3.54.33_PM_a1c8d0c0.png',
    alt: 'Black and white smiling portrait of Sethulakshmi',
    caption: "Cheesin'",
    note: 'Candid monochrome smile.',
    tone: 'monochrome',
    objectPosition: 'object-top',
  },
  {
    id: 'main-character',
    src: '/assets/aistudio/Screenshot_2026-11-13_at_3.54.28_PM_31d11188.png',
    alt: 'Black and white editorial pose of Sethulakshmi resting her chin on her hand',
    caption: 'Main character energy',
    note: 'Editorial close-up, unbothered.',
    tone: 'monochrome',
    objectPosition: 'object-top',
  },
];

export const GREEN_FLAGS = [
  'Iced coffee even when it is freezing outside.',
  'Stopping to pet every single dog on the street.',
  'People who know what they want to eat (or will let me decide without complaining).',
  'Oversized hoodies (which I will inevitably steal).',
];

export const RED_FLAGS = [
  'Slow walkers taking up the entire sidewalk.',
  'People who clap when the airplane lands. Just... why?',
  'Dry texters (Give me drama! Give me emojis!).',
  'Socks with sandals. Non-negotiable.',
];
