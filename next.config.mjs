import path from 'path';
import { fileURLToPath } from 'url';
import nextPwa from '@ducanh2912/next-pwa';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const withPWA = nextPwa({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});

const nextConfig = {
  reactStrictMode: true,
  // Next.js 16 : racine du projet (évite le warning lockfiles multiples)
  turbopack: {
    root: __dirname,
  },
};

export default withPWA(nextConfig);
