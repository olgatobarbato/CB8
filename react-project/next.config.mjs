/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "upload.wikimedia.org",
      "preview.redd.it",
      "31.media.tumblr.com",
      "64.media.tumblr.com",
      "pbs.twimg.com",
    ],
  },
};

export default nextConfig;
