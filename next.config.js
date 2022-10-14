/** @type {import('next').NextConfig} */
const withInterceptStdout = require("next-intercept-stdout");
module.exports = withInterceptStdout(
  {
    reactStrictMode: true,
    images: {
      domains: ["image.tmdb.org", "rb.gy"],
    },
  },
  (text) => (text.includes("Duplicate atom key") ? "" : text)
);
