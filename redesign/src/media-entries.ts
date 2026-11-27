export const mediaEntries = [
  {
    id: 'portfolio-reel',
    kind: 'video',
    title: 'Portfolio reel',
    description: 'A 20-second silent reel from the portfolio homepage.',
    src: '/home/reel-desktop.mp4',
    poster: '/home/reel-desktop.webp',
  },
  {
    id: 'by-the-water',
    kind: 'photo',
    title: 'By the water',
    coverSrc: '/images/work/personal/art/5.jpg',
    alt: 'A person seen from behind beside green water, with both hands raised to their head against a wooded bank.',
  },
  {
    id: 'overclock-title-screen',
    kind: 'artwork',
    title: 'ØVERCLOCK title screen',
    coverSrc: '/images/work/personal/game_dev/overclock_mainmenu.png',
    alt: 'The ØVERCLOCK title hangs above a pixel-art skyline of industrial towers and clouds.',
    projectHref: '/work/overclock/',
  },
] as const;

/** Work projects whose covers stand in as Featured highlights until Media has its own featured entries. */
export const featuredPlaceholderProjects = ['portal', 'wifi-transceiver', 'overclock', 'nighteye', 'astrogolf'];
