// While the site is a preview, every page sends noindex. Set to false when sequentia.io points here.
export const PREVIEW = true;

// A path inside this site, under whatever base the build serves from.
export const url = (path = '') => import.meta.env.BASE_URL.replace(/\/$/, '') + '/' + path.replace(/^\//, '');

export const TESTNET = 'https://sequentiatestnet.com';
export const DOCS = 'https://docs.sequentia.io';
export const CONCATENA = 'https://concatenalabs.com';
export const CONTACT = 'info@sequentia.io';

export const SOCIALS = [
  { name: 'Discord', href: 'https://discord.com/invite/p3FUz5RrVu' },
  { name: 'Telegram', href: 'https://t.me/sequentia_official' },
  { name: 'X', href: 'https://x.com/SequentiaSEQ' },
  { name: 'GitHub', href: 'https://github.com/ConcatenaLabs' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/sequentia-seq' },
  { name: 'YouTube', href: 'https://www.youtube.com/@sequentia8396/videos' },
  { name: 'Instagram', href: 'https://www.instagram.com/sequentiaseq/' },
  { name: 'Reddit', href: 'https://www.reddit.com/r/Sequentia/' },
  { name: 'Facebook', href: 'https://www.facebook.com/SequentiaSEQ' },
];
