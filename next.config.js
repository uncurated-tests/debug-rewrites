/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/retool",
        destination:
          "https://winfakt.retool.com/embedded/public/b8088c16-7409-4daf-989a-689bdb221371",
      },
      {
        source: "/youtube",
        destination:
          "https://youtube.com/@stey",
      },
    ];
  },
}

module.exports = nextConfig
