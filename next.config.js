/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // CSS is not loaded because https://ray.so is executed via Next.js as well
      // adding `assetPrefix: https://ray.so` in the destination site's `next.config.js` file should fix this
      // GitHub issue ref: https://github.com/vercel/next.js/discussions/20650#discussioncomment-4644834
      {
        source: "/ray",
        destination:
          "https://ray.so",
      },
      // Destination site throws a 404 because for some reason, the rewrite is executed on 
      // https://winfakt.retool.com/retool instead of the correct destination URL
      {
        source: "/retool",
        destination:
          "https://winfakt.retool.com/embedded/public/b8088c16-7409-4daf-989a-689bdb221371",
      },
      // The link redirects instead of rewrites
      {
        source: "/youtube",
        destination:
          "https://youtube.com/@stey",
      },
    ];
  },
}

module.exports = nextConfig
