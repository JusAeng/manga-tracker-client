/** @type {import('next').NextConfig} */
const nextConfig = {
  // Standalone output: needed so the Docker image only ships the
  // built server + its pruned node_modules, instead of the whole
  // source tree + full node_modules.
  output: "standalone",
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        port: "",
        pathname: "/**",
      },
    ],
  },
  reactStrictMode: false,
  // manga-tracker-admin (a separate Vite SPA, built and copied into
  // public/admin/ during CI — see .github/workflows/cicd.yml) is served
  // from here instead of its own Cloud Run service. Real files under
  // public/admin/assets/... are matched by Next's filesystem check before
  // rewrites run, so this only catches paths with no matching static file
  // (e.g. /admin/manga/123 on a direct load/refresh) and falls back to
  // the SPA shell, letting React Router take over client-side.
  async rewrites() {
    return [
      { source: "/admin", destination: "/admin/index.html" },
      { source: "/admin/:path*", destination: "/admin/index.html" },
    ];
  },
};

module.exports = nextConfig;
